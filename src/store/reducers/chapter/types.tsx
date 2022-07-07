import {IChapter} from "../../../models/IChapter";

export  interface chapterState {
    chapter: IChapter,
    chaptersId:IChapter[],
    isLoading: boolean,
    error: string | null,
}

export enum chapterActionType {
    SET_CHAPTER = 'CHAPTERS/SET_CHAPTER',
    SET_IS_LOADING = 'CHAPTERS/SET_IS_LOADING',
    SET_ERROR = 'CHAPTERS/SET_ERROR',
    SET_CHAPTERS_ID = 'CHAPTERS/SET_CHAPTERS_ID',
}

export interface setChapter {
    type: chapterActionType.SET_CHAPTER,
    payload: IChapter
}

export interface setChapterError {
    type: chapterActionType.SET_ERROR,
    payload: string | null
}


export interface setChapterIsLoading {
    type: chapterActionType.SET_IS_LOADING,
    payload: boolean
}

export interface setChaptersId {
    type:chapterActionType.SET_CHAPTERS_ID,
    payload: IChapter[]
}


export type chapterActions = setChapter | setChapterError | setChapterIsLoading | setChaptersId






