import {instance} from './instance'

export const searchApi = {   
    async getArticle(text) {
        let response =  await instance.get(`/search?query=${text}&tags=story`)
        return response.data.hits
    }
   } 
