const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id, nickname } = request.body;

        const user = await connection('users')
        .where({
            id:  id,
      nickname: nickname}).select('nickname').first();

      if(!user){
          return response.status(400).json({ error: 'No User found with this ID or Nickname'})
      }
      return response.json(user)
    }
}