import React, { FC } from 'react'
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {animateScroll as scroll} from "react-scroll/modules";
import {Book} from './Book'
import {Loader} from "../Loader/Loader";

interface IBookDetail {
    bookId:number
}

export const BookDetail:FC<IBookDetail> = ({bookId})=>{

    const {book, isLoading, error} = useTypeSelector(store => store.book)

    const {fetchBookDetail} = useAction()

    React.useEffect(() => {
        fetchBookDetail(bookId)
        scroll.scrollToTop()
    }, [bookId])

    return(
        <>
            {
                isLoading ? <Loader/> :<Book book={book} />
            }
        </>
    )
}











