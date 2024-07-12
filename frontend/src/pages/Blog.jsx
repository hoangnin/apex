import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";
import blogApi from '../api/modules/blog.api';
import BlogComponent from '../components/common/BlogComponent';


const Blog = () => {

  const [blogs, setBlogs] = React.useState([]);

  useEffect(()=>{
    const getBlogs = async () => {
      const { response, err } = await blogApi.getBlogs();
      if (response) {
        setBlogs(response);
      } else {
        console.log(err);
      }
    }
    getBlogs();
  })

  return (
    <Box className='mt-[90px]' display='flex' justifyContent='center'>
 
      <Box width='40%' p='10px' >
        {blogs.map((blog, index) => (
         <>
          <Divider/>
          <BlogComponent key={index} blog={blog}/>
         </>
          ))}
      
        
        
      </Box>
    </Box>
  )
}

export default Blog