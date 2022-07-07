import {IPost} from "../../models/IPost";
import React, {FC} from "react";
import {Box, Grid, Stack} from "@mui/material";
import {Loader} from "../Loader/Loader";
import {Book} from "../Book/Book";
import {Post} from "./Post";


interface IPostListProps {
    posts: IPost[]
    isLoading?: boolean
    error?: null | string
}

export const PostList: FC<IPostListProps> = ({posts,isLoading=false,error}) =>{
    return(
        <Box
        sx={{
            display:'flex',
            textDirection:'column',
            align:'center',
        }}>
            {
                isLoading ? <Loader/>:
                    posts.map((post) => {
                        return (
                            <Box sx={{
                                width:'300px',
                                height:'150px',
                            }}>
                                <Post post={post}/>
                            </Box>
                        )
                    })
            }
        </Box>
    )
}




