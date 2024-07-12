import { Avatar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { BiDownvote, BiUpvote } from 'react-icons/bi'
import { IoChatboxOutline, IoShareOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router'

const BlogComponent = ({ blog, key }) => {

    const timestamp = blog.createdAt;
    const pastDate = new Date(timestamp);
    const currentDate = new Date();
    const navigate = useNavigate();

    // Calculate the difference in milliseconds
    const diffInMs = currentDate - pastDate;

    // Convert milliseconds to hours and days
    const diffInHours = Math.ceil(diffInMs / (1000 * 60 * 60));

    // Convert milliseconds to days and round up to the nearest whole number
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    const navigateToDetailBlog = (blog) => {
        navigate(`/blog/${blog._id}`, { state: { blogData: blog._id } });
        // navigate(`/post/${post._id}`);
      }

    return (
        <Box display='flex' flexDirection='column' mt='6px' mb='6px'>
            <Box display='flex' flexDirection='row' alignItems='center' mb='.25rem'>
                <Avatar alt="Remy Sharp" src={blog.customer && blog.customer.avatar} sx={{ width: '24px', height: '24px', mr: '6px' }} />
                <Typography variant='subtitle2' mr={1}>{blog.customer && blog.customer.username}</Typography>
                <Typography variant='subtitle2'>{diffInHours<=24?`${diffInHours} hours ago`:`${diffInDays} days ago`}</Typography>
            </Box>
            <Typography variant='h5' mb='.5rem' fontSize='1.125rem' lineHeight='1.5rem' fontWeight='bold'>{blog.title}</Typography>
            <Typography variant='body1' >{blog.content}</Typography>
           <img src={blog.images&&blog.images[0]} alt="" />

            <Box display='flex' flexDirection='row' >
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
                    <Button style={{ minWidth: '32px', height: '32px' }} onClick={()=>navigateToDetailBlog(blog)}>
                        <IoChatboxOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
                    </Button>
                    <span style={{ fontSize: '12px' }}>{blog.comments&&blog.comments.length}</span>

                </Box>
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' bgcolor='#e9eef1' padding='4px' borderRadius='20px' width='fit-content'
                    marginRight='12px' paddingRight='12px'>
                    <Button style={{ minWidth: '20px', height: '20px' }}>
                        <IoShareOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
                    </Button>
                    <span style={{ fontSize: '12px' }}>Share</span>
                </Box>
            </Box>
        </Box>
    )
}

export default BlogComponent