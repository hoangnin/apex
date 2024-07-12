import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router';
import blogApi from '../api/modules/blog.api';
import { IoChatboxOutline, IoShareOutline } from 'react-icons/io5';
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import { FiPlus } from "react-icons/fi";


const DetailBlog = () => {

    const location = useLocation();
    const blogId = location.state.blogData;
    const [blog, setBlog] = React.useState({});

    useEffect(() => {
        const getBlog = async () => {
            const { response, err } = await blogApi.getBlogById(blogId);
            if (response) {
                setBlog(response);
                console.log(response);
            } else {
                console.log(err);
            }
        }
        getBlog();
    }, [])
    return (
        <>
            <Box sx={{
                paddingTop: '7%',
                paddingBottom: '10%',
            }}>
                <Box sx={{
                    margin: { md: '0 200px', lg: '0 300px', xl: '0 567px' },
                    padding: '0 24px 12px',
                    // maxWidth: '768px'
                }}>
                    <Stack direction='row' alignItems='center'>
                        <Avatar src={blog.customer && blog.customer.avatar} />
                        <Typography fontWeight='bold' ml={1} mr={2}>{blog.customer && blog.customer.username}</Typography>
                        <Typography fontSize='13px'>7 hours ago</Typography>
                    </Stack>
                    <Typography fontWeight='bold' fontSize='24px' mb='16px'>{blog.title}</Typography>
                    <img src={blog.images && blog.images[0]} alt="" />
                    <Typography fontSize='14px' mt='16px'>{blog.content}</Typography>
                    <Box display='flex' flexDirection='row' mt='16px'>
                        <Box
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='center'
                            bgcolor='#e9eef1' // Background color similar to the image
                            padding='4px' // Add some padding
                            borderRadius='20px' // Rounded corners
                            width='fit-content'
                            marginRight='12px' // Fit the content
                        >
                            <Button style={{ minWidth: '32px', height: '32px' }}>
                                <BiUpvote style={{ color: 'black', minWidth: '16px', height: '16px' }} />
                            </Button>
                            <span style={{ fontSize: '12px' }}>{blog.votesUp}</span>
                            <Button style={{ minWidth: '32px', height: '32px' }}>
                                <BiDownvote style={{ color: 'black', minWidth: '16px', height: '16px' }} />
                            </Button>
                        </Box>
                        <Box
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='center'
                            bgcolor='#e9eef1' // Background color similar to the image
                            padding='4px' // Add some padding
                            borderRadius='20px' // Rounded corners
                            width='fit-content'
                            marginRight='12px' // Fit the content
                            paddingX='12px'
                        >
                            <Button style={{ minWidth: '32px', height: '32px' }} onClick={() => navigateToDetailBlog(blog)}>
                                <IoChatboxOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
                            </Button>
                            <span style={{ fontSize: '12px' }}>{blog.comments && blog.comments.length}</span>

                        </Box>
                        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' bgcolor='#e9eef1' padding='4px' borderRadius='20px' width='fit-content'
                            marginRight='12px' paddingRight='12px'>
                            <Button style={{ minWidth: '20px', height: '20px' }}>
                                <IoShareOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
                            </Button>
                            <span style={{ fontSize: '12px' }}>Share</span>
                        </Box>
                    </Box>
                    <Button  variant='outlined' sx={{my:'10px',color:'black', border:'1px solid black', borderRadius:'10px'}}>
                        <span style={{marginRight:'8px'}}><FiPlus/></span>
                        <span>Add a Comment</span>
                    </Button>
                    <Box ml={1}>
                        {blog.comments && blog.comments.map((comment, index) => (
                           <>
                           <Stack direction='row' alignItems='center'>
                        <Avatar src={blog.customer && blog.customer.avatar} />
                        <Typography fontWeight='bold' ml={1} mr={2}>{blog.customer && blog.customer.username}</Typography>
                        <Typography fontSize='13px'>7 hours ago</Typography>
                    </Stack>
                    <Typography fontWeight='bold' fontSize='24px' mb='16px'>{blog.title}</Typography>
                        <Typography fontSize='14px' mt='16px'>{blog.content}</Typography>
                    <Box display='flex' flexDirection='row' mt='16px'>
                        <Box
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='center'
                            bgcolor='#e9eef1' // Background color similar to the image
                            padding='4px' // Add some padding
                            borderRadius='20px' // Rounded corners
                            width='fit-content'
                            marginRight='12px' // Fit the content
                        >
                            <Button style={{ minWidth: '32px', height: '32px' }}>
                                <BiUpvote style={{ color: 'black', minWidth: '16px', height: '16px' }} />
                            </Button>
                            <span style={{ fontSize: '12px' }}>{blog.votesUp}</span>
                            <Button style={{ minWidth: '32px', height: '32px' }}>
                                <BiDownvote style={{ color: 'black', minWidth: '16px', height: '16px' }} />
                            </Button>
                        </Box>
                        <Box
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                            justifyContent='center'
                            bgcolor='#e9eef1' // Background color similar to the image
                            padding='4px' // Add some padding
                            borderRadius='20px' // Rounded corners
                            width='fit-content'
                            marginRight='12px' // Fit the content
                            paddingX='12px'
                        >
                            <Button style={{ minWidth: '32px', height: '32px' }} onClick={() => navigateToDetailBlog(blog)}>
                                <IoChatboxOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
                            </Button>
                            <span style={{ fontSize: '12px' }}>{blog.comments && blog.comments.length}</span>

                        </Box>
                        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' bgcolor='#e9eef1' padding='4px' borderRadius='20px' width='fit-content'
                            marginRight='12px' paddingRight='12px'>
                            <Button style={{ minWidth: '20px', height: '20px' }}>
                                <IoShareOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
                            </Button>
                            <span style={{ fontSize: '12px' }}>Share</span>
                        </Box>
                    </Box>
                           </>
                           ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DetailBlog