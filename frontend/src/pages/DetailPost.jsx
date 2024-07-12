import { Avatar, Box, Button, Divider, Grid, ImageListItem, MenuItem, Pagination, Select, Typography } from '@mui/material';
import { useLocation } from 'react-router';
import RelatedItem from '../components/common/RelatedITem';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import postApi from '../api/modules/post.api';
import { toast } from 'react-toastify';
import { Fragment, useEffect, useState } from 'react';
import Data from '../data/Data';
import RelatedSlide from '../components/common/RelatedSlide';
import { IoMdStar } from "react-icons/io";
import Review from '../components/common/Review';
import commentApi from '../api/modules/comment.api';


const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};


const DetailPost = () => {

    const location = useLocation();
    const postId = location.state.postData;
    const [value, setValue] = useState("Top comment");
    const [liked, setLiked] = useState(false);
    const [quantityLike, setQuantityLike] = useState('');
    const [postDetails, setPostDetails] = useState({ post: '', formattedDate: '', formattedTime: '', reviews: '' });

    useEffect(() => {
        const getPost = async () => {
            const { response, err } = await postApi.getPostById(postId);
            if (response) {
                const date = new Date(response.createdAt);
                const formattedDate = date.toLocaleDateString('en-CA'); // '2024-05-26'
                const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }); // '09:28'
                setPostDetails({ post: response, formattedDate, formattedTime });
            }
            if (err) toast.error(err.message);
        };
        getPost();

    }, [postId]);

    useEffect(() => {
        const getReviews = async () => {
            const { response, err } = await postApi.getReviews(postDetails.post.restaurant);
            if (response) {
                setPostDetails({ ...postDetails, reviews: response });
            }
            if (err) toast.error(err.message);
        };
        (postDetails.post && getReviews());
    }, [postDetails.post.restaurant]);

    const handleFavoriteClick = async (commentIndex) => {
        const updatedComments = [...postDetails.post.comments];
        const updatedComment = { ...updatedComments[commentIndex] };
    
        updatedComment.liked = !updatedComment.liked;
        updatedComment.quantityLike = updatedComment.liked ? updatedComment.quantityLike + 1 : updatedComment.quantityLike - 1;
    
        updatedComments[commentIndex] = updatedComment;
    
        setPostDetails({
            ...postDetails,
            post: {
                ...postDetails.post,
                comments: updatedComments
            }
        });


    
        // Update the quantity in the database for the specific comment here
        // You can make an API call to update the quantity for the specific comment
        // For example:
        await commentApi.updateComment(updatedComment.id, updatedComment.quantityLike);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const commentsPerPage = 4;
    const totalPages =postDetails.post.comments ? Math.ceil(postDetails.post.comments.length / commentsPerPage) : 0;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = postDetails.post.comments && postDetails.post.comments.slice(indexOfFirstComment, indexOfLastComment);


    return (
        <Box sx={{
            paddingTop: '7%',
            paddingBottom: '10%',
        }}>
            <Box sx={{
                margin: { md: '0 200px', lg: '0 300px', xl: '0 567px'},
                padding: '0 24px 12px',
                // maxWidth: '768px'
            }}>
                <Typography variant="h1" sx={{
                    fontWeight: 'bold',
                    fontSize: '54px',
                    lineHeight: '44px',
                    margin: '32px 0 24px',
                    textWrap: 'balance'
                }}>{postDetails.post.title}</Typography>
                <Typography variant="h2" sx={{
                    fontSize: '28px',
                    fontWeight: 'bold',
                    lineHeight: '24px',
                    marginBottom: '8px'
                }}>{postDetails.post.description}</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '24px 0 48px'
                }}>
                    <Avatar src={postDetails.post.author && postDetails.post.author.avatar} sx={{
                        width: '48px',
                        height: '48px',
                        marginRight: '16px'
                    }} />
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        lineHeight: '24px',
                        color: '#000000',
                        marginRight: '16px'
                    }}>{postDetails.post.author && postDetails.post.author.username}</Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        lineHeight: '24px',
                        color: '#000000'
                    }}>{postDetails.formattedDate}</Typography>
                    <Typography sx={{
                        ml: '16px',
                        fontSize: '14px',
                        lineHeight: '24px',
                        color: '#000000'
                    }}>{postDetails.formattedTime}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px'
                }}>
                    {postDetails.post.content && postDetails.post.content.map((item, index) => (
                        <>
                            <ImageListItem key={index}>
                                <img src={item.image} alt={item.descriptions} />
                            </ImageListItem>
                            <Typography variant='p' sx={{ fontFamily: 'Arial, Tahoma, Bitstream Vera Sans, sans-serif', textWrap: 'balance', fontSize: '20px' }}>
                                {item.descriptions}
                            </Typography></>
                    ))}
                </Box>
                <Typography sx={{ my: '20px', fontSize: '28px', fontWeight: 'bold' }} >Related posts</Typography>
                <RelatedSlide />
                {/* <Grid
                    container
                    spacing={2}
                    sx={{}}
                >

                    {Data.post.slice(0, 4).map((item, index) => (
                        <Grid
                            item xs={6} md={3} key={index}
                            sx={{
                                position: "relative",
                                height: "12rem",
                            }}
                            index={index}
                        >
                            <RelatedItem post={item} />
                        </Grid>
                    ))}
                </Grid> */}
                <Box >
                    <Typography sx={{ my: '20px', fontSize: '28px', fontWeight: 'bold' }} >Reviews</Typography>
                    <Grid
                        container
                        spacing={2}
                    >
                        {postDetails.reviews && postDetails.reviews.map((review, index) => (
                             <Grid
                             item xs={6} md={6} key={index}
                             sx={{
                                 position: "relative",
                                 height: "12rem",
                                 height:'auto'

                             }}
                             index={index}
                         >
                             <Review review={review} />
                         </Grid>
                       ) )}
                    </Grid>
                </Box>
                <Box display='flex' justifyContent='space-between' alignItems='center' >
                    <Typography sx={{ my: '20px', fontSize: '28px', fontWeight: 'bold' }} >Comments</Typography>
                    <Select
                        labelId="selection"
                        id="selection"
                        value={value}
                        onChange={handleChange}
                        name="selection"
                        sx={{
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                        }}
                    >
                        <MenuItem value={"Top comment"}>Top comment</MenuItem>
                        <MenuItem value={"Liked"}>Liked</MenuItem>
                    </Select>
                </Box>

               
                {currentComments&&currentComments.map((comment, index) => (
                    <Fragment key={index}>
                        <Box my='7px' display="flex" >

                            <Avatar sx={{ width: 56, height: 56, border: '4px solid gray' }} src={comment.created_by.avatar} />

                            <Box width='100%' ml='13px' display="flex" flexDirection="column" justifyContent="center">
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <Box display='flex' flexDirection='row'>
                                        <Typography sx={{ fontSize: '19px', mr: 2, fontWeight: 'bold' }}>{comment.created_by.username}</Typography>
                                        <StyledRating
                                            name="highlight-selected-only"
                                            defaultValue={comment.rating}
                                            IconContainerComponent={IconContainer}
                                            getLabelText={(value) => customIcons[value].label}
                                            highlightSelectedOnly
                                            readOnly
                                        />
                                    </Box>
                                    <Button
                                        variant="text"
                                        color='inherit'
                                        startIcon={liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder sx={{ color: "gray" }} />}
                                        onClick={()=>handleFavoriteClick(indexOfFirstComment + index)}
                                    >    {quantityLike}
                                    </Button>
                                </Box>

                                <Typography sx={{}}>{comment.content}</Typography>

                            </Box>
                        </Box>
                        {index !== currentComments.length - 1 && <Divider />}
                    </Fragment>
                ))}
                <Box mt={1} display="flex" justifyContent="center">
                    <Pagination count={totalPages} page={currentPage} onChange={(event, page) => setCurrentPage(page)} showFirstButton showLastButton />
                </Box>

                
            </Box>

        </Box>
    )
}

export default DetailPost