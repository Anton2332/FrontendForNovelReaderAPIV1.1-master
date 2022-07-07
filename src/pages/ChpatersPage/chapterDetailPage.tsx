import {FC} from "react";
import {useParams} from "react-router-dom";
import {Container} from "@mui/material";
import ChaptersService from '../../API/chaptersService'


export const ChapterDetailPage: FC = () => {
    const bookId = useParams().bookId


    return (
        <>
            <Container>

            </Container>
        </>
    )
}