const { ObjectID } = require("bson");

let db;

class AvailableDatabase{

    static injectDB(conn){
        db = conn.db('ingressos').collection('sessoes')
    }

    async listar(date){
        return await db.find({
            data: date
        })
        .project({
            _id: 0
        })
        .toArray();
    }

    inserir(movie){
        return db.insertOne(movie)
    }

    alterar(id, filme){
        return db.updateOne(
            { _id: ObjectID(id) },
            {
                $set: { name: filme.name }
            }
        )
    }

    deletar(id) {
        return db.deleteOne({ _id: ObjectID(id) })
    }
}

module.exports = AvailableDatabase