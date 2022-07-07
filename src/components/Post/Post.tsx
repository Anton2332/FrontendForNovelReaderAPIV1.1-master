import {IPost} from "../../models/IPost";
import {FC} from "react";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import './style.css'

interface IPostProps {
    post: IPost
}

export const Post: FC<IPostProps> = ({post}) => {
    return (
        <Box className={'posts'}>
            {post.body}
        </Box>
    )
}