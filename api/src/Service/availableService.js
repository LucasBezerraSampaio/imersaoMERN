const AvailableDatabase = require('../Database/availableDatabase.js')
const db = new AvailableDatabase();

class AvailableService{
    
   async listar(date){
        
        if(date <= 0)
            return 'Data inválida!'

        return await db.listar(date);
    }

    inserir(movie){
        if(!movie.name)
            throw 'Filme inválido'
        
        db.inserir(movie)
    }

    async listAvailableDays() {
        db.listAvailableDays();
    }

    alterar(id, filme){
        if(id < 0 )
            throw 'Filme não existe'
        
        db.alterar(id, filme)
    }

    deletar(id){
        if(id < 0 )
            throw 'Filme não existe'
        
        db.deletar(id)
    }
}

module.exports = AvailableService
