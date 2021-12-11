import axios from 'axios'
const api = axios.create({
    baseURL: "http://localhost:3030"
})

export default class Api {
    async listar(date){
        let r = await api.get(`/available/${date}`)
        return r.data;
    }
}