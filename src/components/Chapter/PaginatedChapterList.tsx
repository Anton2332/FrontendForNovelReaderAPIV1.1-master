import {useParams} from "react-router-dom";
import React, {FC} from "react";
import ChaptersService from "../../API/chaptersService";
import {Loader} from "../Loader/Loader";
import {Box} from "@mui/material";
import {Post} from "../Post/Post";
import {Chapter} from "./Chapter";
import {IChapter} from "../../models/IChapter";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useAction} from "../../hooks/useAction";
import {fetchChapter} from "../../store/reducers/chapter/chapterAction";
import {animateScroll as scroll} from "react-scroll/modules";

interface IChaptersProps {
    bookId:number
}


export const PaginatedChapterList : FC<IChaptersProps> = ({bookId}) =>{

    // const {chapter,isLoading, error,chaptersId} = useTypeSelector(store => store.chapter)
    //
    // const {fetchChapter} = useAction()

    // React.useEffect(() => {
    //     fetchChapter(Number(bookId))
    //     scroll.scrollToTop()
    // })
    const response = ChaptersService.getChaptersByBookId(bookId)

    return (
        <>
            <Box
                sx={{
                    display:'flex',
                    textDirection:'column',
                    align:'center',
                }}>
                {
                    // chaptersId.map((chapter) => {
                    //         return (
                    //             <Box sx={{
                    //                 width:'300px',
                    //                 height:'150px',
                    //             }}>
                    //                 <Chapter chapter={chapter}/>
                    //             </Box>
                    //         )
                    //     })
                }
            </Box>
        </>
    )
}