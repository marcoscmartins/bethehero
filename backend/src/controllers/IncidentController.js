const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const incidents = await connection('incidents').select('*');
        return response.json(incidents);
    },
    async create(request, response) { 
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        console.log(title, description, value);
        // using desestruturation, we can retrieve the id of the insertion
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id});
    },
    async delete(request, response) {
        const { id } = request.params; 
        
        // getting the ong_id to make sure the incident was created by that specific ong 
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        // if the status is different retorn not authorized (401)
        if (incident.ong_id != ong_id) {
            return response.status(401).json( { error : 'Operation not permitted '});
        }

        await connection('incidents').where('id', id).delete();

        // response the worked out the deletion
        return response.status(204).send();
    },
}