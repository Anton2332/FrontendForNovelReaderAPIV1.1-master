import {IBookDetails} from "../../models/Response/IBookDetailts";
import React, {FC} from "react";
import {Box, Button, CardActionArea, CardMedia, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import './style.css'
import {PagenatedPostList} from "../Post/PaginatedPostList";
import {PaginatedChapterList} from '../Chapter/PaginatedChapterList'

interface IBookProps {
    book: IBookDetails
}

export const Book: FC<IBookProps> = ({book}) =>{
    return (<>
            {
                //first var
                // {/*<Box sx={{*/}
            //{/*    display:'flex',*/}
            //{/*    flexDirection:'row',*/}
            //{/*}}>*/}
            //{/*<CardMedia*/}
            //{/*    component="img"*/}
            ///*    alt="green iguana"*/}
           // {/*    sx={{*/}
          //  {/*        borderRadius:2,*/}
          //  {/*        height:200,*/}
          //  {/*        width:190,*/}
         //   {/*        mr:2,*/}
        //    {/*        marginTop:2,*/}
         //   {/*    }}*/}
         //   {/*    image={book.img}*/}
         //   {/*/>*/}
         //   {/*<Box*/}
         //   {/*    sx={{*/}
         //   {/*    marginTop:2,*/}
         //   {/*    // bgcolor:'white',*/}
         //   {/*    borderRadius:2,*/}
         //   {/*    display:"flex",*/}
         //   {/*    flexDirection:'column',*/}
         //   {/*    align:'center',*/}
         //   {/*}}>*/}
         //   {/*    <Box>*/}
         //   {/*        <Typography variant={'h4'}  sx={{mr:2, color:'white',padding:2, align:'center'}} mt={2}>*/}
         //   {/*            {*/}
         //   {/*                book.name*/}
         //   {/*            }*/}
         //   {/*        </Typography>*/}
         //   {/*        <Box sx={{*/}
         //   {/*            display:'flex',*/}
         //   {/*            flexDirection:"column",*/}
         //   {/*            marginLeft:3,*/}
         //   {/*        }}>*/}
         //   {/*            <RouterLink to={`chapters`}*/}
         //   {/*            >*/}
         //   {/*                Читати*/}
         //   {/*            </RouterLink>*/}
        //    {/*            <br/>*/}
         //   {/*            <RouterLink to={`bookmarks`}*/}
         //   {/*            >*/}
         //   {/*                Додати до закладки*/}
         //   {/*            </RouterLink>*/}
         //   {/*        </Box>*/}
          //  {/*    </Box>*/}
         //   {/*</Box>*/}
         //   {/*</Box>*/}
         //   {/*<Typography variant={'body2'}  sx={{mr:2, color:'white',padding:2, align:'center'}} mt={2}>*/}
         //   {/*    {*/}
         //   {/*        book.description*/}
         //   {/*    }*/}
         //   {/*</Typography>*/}
            }

            <Container maxWidth={'sm'} >
                <div className={'jsx-5da9c2067ceba581 jsx-193162299 grid-container'}>

                    <div className={'jsx-589fc8ffecb2fca9 leftRow'}>
                        {/* eslint-disable-next-line react/style-prop-object */}
                        <div>
                            <div className={'jsx-525f9ca96b40a0e6 root'}>
                                <div >
                                    <div className={'Image_container__NpLCh rounded-md'}>
                                        <img className={'Image_imgFluid__Men3E'} src={book.img}/>

                                    </div>

                                    <div className={'jsx-525f9ca96b40a0e6 buttons divForButton'}>

                                        <RouterLink className={'button'} to={'chapters'} type={'button'}>
                                            Читати
                                        </RouterLink>
                                    </div>
                                    <div className={'jsx-525f9ca96b40a0e6 buttons divForButton'}>

                                        <RouterLink className={'button'} to={'chapters'} type={'button'}>
                                            Додати до закладок
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'jsx-7324287667afa997 jsx-1650936851 grid-item'}>
                        <div className={'jsx-e268305963073dea header'}>
                            <h1 className={'Typography_h3__xWrmf Typography_gutterBottom__mjtdd'}>
                                {book.name}
                            </h1>
                        </div>
                        <div className={'desc'}>
                            {book.description}
                        </div>
                        <div className={'jsx-98e73d71ac525cf0'}>
                            <div className={'jsx-934d5549bc0ba301 root fullWidth Input_formControl__KCNcj'}>
                                <div className={'Input_root__4qYWz Input_multiline__I7CAM Input_adornedEnd__ucA_D Input_outlined__QwLf6'}
                                >
                                    <textarea  aria-invalid="false" name="text"
                                              placeholder="Залишити коментар ..."
                                              className=" textarea1 Input_input__F9Zao Input_inputMultiline__J_NsB Input_inputAdornedEnd__5xGz7"
                                              ></textarea>
                                    <textarea aria-hidden="true"
                                              className="textarea2 Input_input__F9Zao Input_inputMultiline__J_NsB Input_inputAdornedEnd__5xGz7">

                                    </textarea>
                                </div>
                            </div>
                            {/*<PaginatedChapterList bookId={book.id}/>*/}
                            <PagenatedPostList/>
                        </div>
                    </div>

                </div>
            </Container>

        </>
    )
}


