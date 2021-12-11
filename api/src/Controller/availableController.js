const Router = require('express').Router()

const AvailableService = require('../Service/availableService.js')
const service = new AvailableService()

Router.get('/:date', async (req, resp) => {
    try{
        let { date } = req.params;
        let movies = await service.listar(date)

        resp.send(movies)
    } catch(e){
        resp
        .status(400)
        .send({
            erro: `${e}`
        })
    }
})


Router.get('/', async (req, resp) => {
    try {
        let availabeDays = await service.listAvailableDays();
        resp.send(availabeDays)
    } catch (error) {
        resp.status(400).send({
            erro: `${error}`
        })
    }
})

module.exports = Router