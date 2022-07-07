import $api from './axios/index'


export default class ChaptersService {
    static async getChaptersByBookId(bookId:number){
        const response = await $api.get(`books/${bookId}/chapters/`)
        return response
    }

    static async getChaptersDetail(chapterId:number){
        const response = await $api.get(`chapters/${chapterId}/`)
        return response
    }
}


