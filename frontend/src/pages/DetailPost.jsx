import { Avatar, Box, Grid, ImageListItem, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router';
import RelatedSlide from '../components/common/RelatedSlide';
import Data from '../data/Data';
import { SwiperSlide, Swiper } from 'swiper/react';
import RelatedItem from '../components/common/RelatedITem';

const DetailPost = () => {

    const location = useLocation();
    const post = location.state.postData;
    return (
        <Box sx={{
            paddingTop: '7%',
            paddingBottom: '10%',
        }}>
            <Box sx={{
                margin: '0 567px',
                padding: '0 24px 12px',
                // maxWidth: '768px'
            }}>
                <Typography variant="h1" sx={{
                    fontWeight: 'bold',
                    fontSize: '54px',
                    lineHeight: '32px',
                    margin: '32px 0 24px',
                    textWrap: 'balance'
                }}>{post.title}</Typography>
                <Typography variant="h2" sx={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    lineHeight: '24px',
                    marginBottom: '8px'
                }}>{post.description}</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '24px 0 48px'
                }}>
                    <Avatar src={post.author.avatar} sx={{
                        width: '48px',
                        height: '48px',
                        marginRight: '16px'
                    }} />
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        lineHeight: '24px',
                        color: '#000000',
                        marginRight: '16px'
                    }}>{post.author.username}</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        lineHeight: '24px',
                        color: '#000000'
                    }}>{post.time}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px'
                }}>
                    {post.content.map((item, index) => (
                        <>
                        <ImageListItem key={index}>
                            <img src={item.image} alt={item.descriptions} />
                        </ImageListItem>
                            <Typography variant='p' sx={{ fontFamily: 'Arial, Tahoma, Bitstream Vera Sans, sans-serif', textWrap: 'balance', fontSize: '20px' }}>
                                {item.descriptions}
                            </Typography></>
                    ))}
                </Box>
                <Typography sx={{ my: '20px', fontSize: '28px', fontWeight: 'bold' }} >Related Posts</Typography>
                {/* <RelatedSlide/> */}
                <Grid
                    container
                    spacing={2}
                    sx={{}}
                >

                    {Data.post.slice(0, 4).map((item, index) => (
                        <Grid
                            item xs={6} md={3}  key={index}
                            sx={{
                                position: "relative",
                                height: "12rem",
                            }}
                            index={index}
                        >
                                <RelatedItem post={item} />
                        </Grid>
                    ))}
                </Grid>

            </Box>

        </Box>
    )
}

export default DetailPost