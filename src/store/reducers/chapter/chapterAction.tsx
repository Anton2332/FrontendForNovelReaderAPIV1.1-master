import {IChapter} from "../../../models/IChapter";
import {
    chapterActions,
    chapterActionType,
    setChapter,
    setChapterError,
    setChapterIsLoading,
    setChaptersId
} from "./types";
import {Dispatch} from "react";
import ChaptersService from '../../../API/chaptersService'

const setChapterAction = (chapter: IChapter): setChapter =>{
    return {
        type: chapterActionType.SET_CHAPTER,
        payload:chapter
    }
}

const setIsLoadingAction = (isLoading: boolean) : setChapterIsLoading => {
    return  {
        type: chapterActionType.SET_IS_LOADING,
        payload: isLoading
    }
}

const setErrorAction = (error: string): setChapterError => {
    return  {
        type:chapterActionType.SET_ERROR,
        payload: error
    }
}

const setChaptersAction = (chapters: IChapter[]): setChaptersId =>{
    return {
        type: chapterActionType.SET_CHAPTERS_ID,
        payload:chapters
    }
}


export function fetchChapter(bookId:number){
    return async(dispatch:Dispatch<chapterActions>) => {
        try {
            dispatch(setIsLoadingAction(true))
            const response = await ChaptersService.getChaptersByBookId(bookId)
            console.log(response)
            dispatch(setChaptersAction(response))

        }
        catch(e) {
            dispatch(setErrorAction((e as Error).toString()))
        }finally {
            dispatch(setIsLoadingAction(false))
        }
    }
}