import {IChapter} from "../../models/IChapter";
import {FC} from "react";
import {Box} from "@mui/material";
import '../Post/style.css';

interface IChapterProps {
    chapter: IChapter
}

export const Chapter: FC<IChapterProps> = ({chapter}) => {
    return (
        <Box className={'posts'}>
            {chapter.chapter_name}
        </Box>
    )
}