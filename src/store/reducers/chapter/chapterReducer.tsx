import {IChapter} from "../../../models/IChapter";
import {chapterActions, chapterActionType, chapterState} from "./types";

const initialState: chapterState = {
    chapter: {} as IChapter,
    isLoading: false,
    error: null,
    chaptersId: []
}

export  const chapterReducer = (state = initialState, action:chapterActions) : chapterState => {
    switch (action.type) {
        case chapterActionType.SET_CHAPTER: {
            const chapter: IChapter = action.payload as IChapter
            return {...state, chapter: chapter}
            break;
        }

        case chapterActionType.SET_ERROR:
            return {...state, error: action.payload}
            break;

        case chapterActionType.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
            break;

        case chapterActionType.SET_CHAPTERS_ID:
            const chapters: IChapter[] = action.payload.map(
                item => {
                    return {...item}
                }
            )as IChapter[]
            return {...state, chaptersId:[...chapters] }

        default:
            return state;
    }
}
