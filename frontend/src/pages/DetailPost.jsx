import { Avatar, Box, Button, Divider, Grid, ImageListItem, MenuItem, Pagination, Select, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useLocation } from 'react-router';
import RelatedSlide from '../components/common/RelatedSlide';
import Data from '../data/Data';
import { SwiperSlide, Swiper } from 'swiper/react';
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
    const post = location.state.postData;
    const [value, setValue] = React.useState("Top comment");
    const [liked, setLiked] = useState(false);
    const [quantityLike, setQuantityLike] = useState(post.likeCount);

    const handleFavoriteClick = () => {
        setLiked((prevLiked) => !prevLiked);
        setQuantityLike((prevQuantityLike) =>
            liked ? prevQuantityLike - 1 : prevQuantityLike + 1
        );
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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
                    lineHeight: '44px',
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
                </Grid>
                <Box display='flex' justifyContent='space-between' mt='100px' alignItems='center' >
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
                <Box sx={{
                    mt: '10px',
                    border: '1px solid #E0E0E0',
                    padding: '20px',
                    borderRadius: '10px',
                }}>

                    <Box my='7px' display="flex" >

                        <Avatar sx={{ width: 56, height: 56, border: '4px solid gray' }} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                        <Box ml='13px' display="flex" flexDirection="column" justifyContent="center">
                            <Box display='flex' justifyContent='space-between'>
                                <Box display='flex' flexDirection='row'>
                                    <Typography sx={{ fontSize: '19px', mr: 2, fontWeight: 'bold' }}>John Doe</Typography>
                                    <StyledRating
                                        name="highlight-selected-only"
                                        defaultValue={2}
                                        IconContainerComponent={IconContainer}
                                        getLabelText={(value) => customIcons[value].label}
                                        highlightSelectedOnly
                                    />
                                </Box>
                                <Button

                                    variant="text"
                                    color='inherit'
                                    startIcon={liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder sx={{ color: "gray" }} />}
                                    onClick={handleFavoriteClick}
                                >    {quantityLike}
                                </Button>
                            </Box>

                            <Typography sx={{}}>Great post! I love it das ds dsfds dsaf dsf sdf dsf dsa fads fds fdsf sdaf daf dsf sdf sd fdsf  dsf dsf sf dsafdsafadsf asd</Typography>

                        </Box>
                    </Box>
                    <Divider />
                    <Box my='7px' display="flex" >

                        <Avatar sx={{ width: 56, height: 56, border: '4px solid gray' }} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                        <Box ml='13px' display="flex" flexDirection="column" justifyContent="center">
                            <Box display='flex' justifyContent='space-between'>
                                <Box display='flex' flexDirection='row'>
                                    <Typography sx={{ fontSize: '19px', mr: 2, fontWeight: 'bold' }}>John Doe</Typography>
                                    <StyledRating
                                        name="highlight-selected-only"
                                        defaultValue={2}
                                        IconContainerComponent={IconContainer}
                                        getLabelText={(value) => customIcons[value].label}
                                        highlightSelectedOnly
                                    />
                                </Box>
                                <Button

                                    variant="text"
                                    color='inherit'
                                    startIcon={liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder sx={{ color: "gray" }} />}
                                    onClick={handleFavoriteClick}
                                >    {quantityLike}
                                </Button>
                            </Box>

                            <Typography sx={{}}>Great post! I love it das ds dsfds dsaf dsf sdf dsf dsa fads fds fdsf sdaf daf dsf sdf sd fdsf  dsf dsf sf dsafdsafadsf asd</Typography>

                        </Box>
                    </Box>
                    <Divider />
                    <Box my='7px' display="flex" >

                        <Avatar sx={{ width: 56, height: 56, border: '4px solid gray' }} src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                        <Box ml='13px' display="flex" flexDirection="column" justifyContent="center">
                            <Box display='flex' justifyContent='space-between'>
                                <Box display='flex' flexDirection='row'>
                                    <Typography sx={{ fontSize: '19px', mr: 2, fontWeight: 'bold' }}>John Doe</Typography>
                                    <StyledRating
                                        name="highlight-selected-only"
                                        defaultValue={2}
                                        IconContainerComponent={IconContainer}
                                        getLabelText={(value) => customIcons[value].label}
                                        highlightSelectedOnly
                                    />
                                </Box>
                                <Button

                                    variant="text"
                                    color='inherit'
                                    startIcon={liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder sx={{ color: "gray" }} />}
                                    onClick={handleFavoriteClick}
                                >    {quantityLike}
                                </Button>
                            </Box>

                            <Typography sx={{}}>Great post! I love it das ds dsfds dsaf dsf sdf dsf dsa fads fds fdsf sdaf daf dsf sdf sd fdsf  dsf dsf sf dsafdsafadsf asd</Typography>

                        </Box>
                    </Box>



                </Box>

                <Box mt={1} display="flex" justifyContent="center">
                    <Pagination count={10} showFirstButton showLastButton />
                </Box>
            </Box>

        </Box>
    )
}

export default DetailPost