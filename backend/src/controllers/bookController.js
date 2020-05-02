const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        
        const { title, theme, edition, year, pages, synopsis, city, uf} = request.body;

        const user_id = request.headers.authorization;

        await connection('books').insert({
            title,
            theme,
            edition,
            year,
            pages,
            synopsis,
            city,
            uf,
            user_id,
        });

        return response.json({
            title, user_id
        });

    },

    async index(request, response){
        const { page = 1} = request.query;

        const [count] = await connection('books').count();

        const books = await connection('books')
        .join('users','users.id','=','books.user_id')
        .limit(5)
        .offset((page-1)*5)
        .select([  
                'books.*'
                ,'users.name'
                ,'users.nickname'
                ,'users.institution'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(books);
    },


    
    async delete(request, response){
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const books = await connection('books').where('id',id).select('user_id').first();

        if(books.user_id !== user_id){
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('books').where('id',id).delete();

        return response.status(204).send();
    }

}