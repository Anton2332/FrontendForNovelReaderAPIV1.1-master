import React, {FC} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {animateScroll as scroll} from "react-scroll/modules";
import {useParams} from "react-router-dom";
import {BookList} from "../Book/BookList";
import {CustomPagination} from "../CustomPagination/CustomPagination";
import {Typography} from "@mui/material";
import {PostList} from "./PostList";

export const PagenatedPostList : FC = () =>{

    const {posts, total_pages, current_page, isPostsLoading, postsError} = useTypeSelector(store => store.posts)

    const {fetchPosts} = useAction()

    const [currentPage, setCurrentPage] = React.useState(current_page)

    const bookId = useParams().bookId

    React.useEffect(() => {
        fetchPosts(Number(bookId),currentPage)
        scroll.scrollToTop()
    }, [currentPage])
    console.log(posts)

    return (
        <>
            <PostList posts={posts}
                      isLoading={isPostsLoading}
                      error={postsError}/>
            {
                !isPostsLoading && posts.length ? <CustomPagination  totalPages={total_pages}
                                                                currentPage={current_page}
                                                                onSetCurrentPage={setCurrentPage}
                    /> :
                    <Typography align={'center'} variant="h6" color='white' component="div" marginTop={"35px"}>
                        Повідомлень не знайдено
                    </Typography>
            }
        </>
    )
}


