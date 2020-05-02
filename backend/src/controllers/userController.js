const connection = require('../database/connection');
const crypto =  require('crypto');



module.exports =  {
    async create(request, response) {
        const { name, nickname, email, institution, studentrecord } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

   await connection('users').insert({
        id,
        name,
        nickname,
        email,
        institution,
        studentrecord,

    });

    return response.json({
        id, nickname
    });

    },

    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    }

}