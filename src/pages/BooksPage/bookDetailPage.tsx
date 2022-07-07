import React, { FC } from 'react'

import {Container, Grid , Typography} from '@mui/material'
import {PaginatedBookList} from "../../components/Book/PaginatedBookList";
import {BookDetail} from "../../components/BookDetail/BookDetail";
import {useParams} from "react-router-dom";
import {PagenatedPostList} from "../../components/Post/PaginatedPostList";



export const BookDetailPage: FC = () => {

    const bookId = useParams().bookId
    return (
        <>
            <Container sx={{
                display:'flex',
                flexDirection:'column',
                align:'center',
            }}>
            <BookDetail bookId={Number(bookId)}/>

            </Container>
        </>
    )
}

const style = {

}
