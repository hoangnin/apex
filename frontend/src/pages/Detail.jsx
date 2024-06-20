import React, { useEffect, useState } from 'react'
import postApi from '../api/modules/post.api';
import { useLocation } from 'react-router';

const Detail = () => {
    const location = useLocation();
    const postId = location.state.postData;
    const [postDetails, setPostDetails] = useState({ post: '', formattedDate: '', formattedTime: '' });

    useEffect(() => {
        const getPost = async () => {
            const { response, err } = await postApi.getPostById(postId);
            if (response) {
                const date = new Date(response.createdAt);
                const formattedDate = date.toLocaleDateString('en-CA'); // '2024-05-26'
                const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }); // '09:28'
                setPostDetails({ post: response, formattedDate, formattedTime });
                console.log(response);
            }
            if (err) toast.error(err.message);
        };
        getPost();
    }, [postId]);
    // console.log(postDetails.post.author && postDetails.post.author.avatar);

    return (
        <div className='p-[80px] bold '>{postDetails.formattedDate} & {postDetails.formattedTime} & {postDetails.post.author && postDetails.post.author.avatar} </div>
    );
}

export default Detail