const { ObjectID } = require("bson");

let db;


function today() {
    return new Date().toISOString.slice(0, 10);
}


function getDayOfWeek(data) {
    let currentDay = today();
    if (currentDay === data)
        return 'Hoje';

    data = new Date(`${data}T00:00:00`);
    switch (data.getDay()) {
        case 0: return 'Domingo';
        case 1: return 'Segunda';
        case 2: return 'Terça';
        case 3: return 'Quarta';
        case 4: return 'Quinta';
        case 5: return 'Sexta';
        case 6: return 'Sábado';
    }
}

function getMonth(data) {
    data = new Date(`${data}T00:00:00`);
    switch (data.getMonth()) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
    }
}


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

    async listAvailableDays() {
        let currentDay = today();
        
        let days = await db
            .aggregate([
            {
                $match: {
                    data: {
                        $gte: currentDay 
                    }
                }
            },
            {
                $group: {
                    _id: '$data'
                }
            },
            {
                $project: {
                    _id: 0,
                    data: '$_id'
                }
            },
            {
                $sort: {
                    data: 1
                }
            },
            {
                $limit: 7
            }
        ])
            .toArray();
       
        
        return days = days.map(item => {
            return {
                data: item.data,
                mes: getMonth(item.data),
                dia: getDayOfWeek(item.data)
            }
        })
        
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