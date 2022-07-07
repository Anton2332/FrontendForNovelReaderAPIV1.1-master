import * as postActions from './reducers/post/postActions'
import * as authActions from './reducers/auth/authActions'
import * as booksActions from "./reducers/book/booksActions";
import * as bookActions from "./reducers/bookDetail/bookAction";
import * as chapterAction from "./reducers/chapter/chapterAction";





export const rootActions = {
    ...postActions,
    ...authActions,
    ...booksActions,
    ...bookActions,
    ...chapterAction,
}