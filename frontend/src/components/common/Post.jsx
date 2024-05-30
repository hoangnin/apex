import { Favorite, FavoriteBorder, MoreVert, Send, Share } from "@mui/icons-material";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';


import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Stack,
  Skeleton,
  Divider,
  Box,
  Button,
  Modal,
  Paper,
  TextField
} from "@mui/material";
import { useState } from "react";
import {  useNavigate } from "react-router";



const Post = ({ post ,key}) => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [quantityLike, setQuantityLike] = useState(post.likeCount);
  const [openModal, setOpenModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments);
  const [expandedComments, setExpandedComments] = useState({}); // State to track expanded comments


  // Function to toggle display of all replies
  const handleToggleReplies = (commentId) => {
    setExpandedComments(prevState => ({
      ...prevState,
      [commentId]: !prevState[commentId]
    }));
  };

  const handleFavoriteClick = () => {
    setLiked((prevLiked) => !prevLiked);
    setQuantityLike((prevQuantityLike) =>
      liked ? prevQuantityLike - 1 : prevQuantityLike + 1
    );
  };

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = { id: comments.length + 1, text: commentText };
    setComments([...comments, newComment]);
    setCommentText("");
  };

  // const getTotalCommentsAndReplies = (comments) => {
  //   let total = comments.length;
  //   comments.forEach(comment => {
  //     if (comment.replies) {
  //       total += comment.replies.length;
  //     }
  //   });
  //   return total;
  // };

  const navigateToDetailPost = (id,post) => {
    console.log(id)
    navigate(`/post/${id}`,{ state: { postData: post } });
  }
  
  // Usage
  // const totalCommentsAndReplies = getTotalCommentsAndReplies(post.comments);

  return (
    <>
      {loading ? <Stack margin={5} padding={2} spacing={1}  borderRadius={2} border='1px solid #e5e7eb' >
        <Stack direction="row" spacing={2} alignItems="center">
        <Skeleton variant="circular" width={50} height={50} />
        <Stack direction="column" spacing={1} alignItems="center">
        <Skeleton variant="text" width={100} height={15}  />
        <Skeleton variant="text" width={100} height={15}/>
        </Stack>
        </Stack>
        <Skeleton variant="rectangular" height={300} />
        <Stack direction="row" spacing={7} justifyContent="center">
        <Skeleton variant="text" width={90} height={15}  />
        <Skeleton variant="text" width={90} height={15}  />
        <Skeleton variant="text" width={90} height={15}/>
        </Stack>
      </Stack>
        : <Card sx={{ margin: 5,borderRadius:2 }}>
          <CardHeader
            avatar={
              <Avatar src={post.author.avatar} />

            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={post.author.username}
            subheader={post.time}
          />
          <CardMedia
            component="img"
            sx={{
              maxHeight: '500px'
            }}
            image={post.content[0].image}
            onClick={()=>navigateToDetailPost(post.id,post)}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.title}
            </Typography>
          </CardContent>
          <Divider />
          <Box sx={{
            direction: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            p: '10px 0',
            m: '0 16px'
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              <Favorite sx={{ color: "red" }} />
              <Typography>{quantityLike}</Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row'
            }}>
              <ChatBubbleOutlineIcon />
              <Typography>{post.comments.length}</Typography>
            </Box>

          </Box>
          <Box sx={{
            m: '0 12px'
          }}>
            <Stack sx={{
              display: "flex",
              p: '4px',
              flexDirection: 'row',
            }}>
              <Button
                fullWidth
                variant="text"
                color='inherit'
                startIcon={liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder sx={{ color: "gray" }} />}
                onClick={handleFavoriteClick}
              >     Favorite
              </Button>
              <Button fullWidth variant="text" color="inherit" startIcon={<ChatBubbleOutlineIcon />} onClick={handleOpenModal}>Comment</Button>
              <Button fullWidth variant="text" color="inherit" startIcon={<Share />}>Share</Button>
            </Stack>
          </Box>
        </Card>}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 700,
          maxHeight: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,

        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Comments
          </Typography>

          <Box sx={{ mt: 2 ,overflowY: 'auto',maxHeight:'300px', flexGrow: 1,pr:2, scrollbarWidth: 'thin',
                scrollbarColor: '#ccc rgba(0,0,0,0.1)',
                '&::-webkit-scrollbar-track': {
                  boxShadow: 'inset 0 0 5px grey',
                  borderRadius: '10px'
                },

          }}>
            {comments.map((comment) => (
              <Stack key={comment.id} sx={{ mt: 1, marginBottom: '2px', flexDirection: 'row', display: 'flex', }}>
                <Avatar src={comment.avatar} sx={{ width: 32, height: 32 }} />
                <Box >
                  <Box sx={{
                    ml: 1,
                    bgcolor: '#f0f2f5',
                    p: '8px 12px',
                    borderRadius: 5,
                  }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>{comment.user}</Typography>
                    <Typography sx={{ fontSize: '14px' }}>{comment.comment}</Typography>
                  </Box>

                  {/* <Box height='4px' component={Button}>Reply</Box> */}
                  {/* <Box sx={{ mt: 1 }}>
                    {comment.replies && (expandedComments[comment.id] ? comment.replies.map(reply => (
                      <Stack key={reply.id} sx={{ mt: 1, marginBottom: '2px', flexDirection: 'row', display: 'flex', pl: 2 }}>
                        <Avatar src={reply.avatar} sx={{ width: 32, height: 32 }} />
                        <Box>
                          <Box sx={{
                            ml: 1,
                            bgcolor: '#f0f2f5',
                            p: '8px 12px',
                            borderRadius: 5,
                          }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>{reply.user}</Typography>
                            <Typography sx={{ fontSize: '14px' }}>{reply.comment}</Typography>
                          </Box>
                          <Box component={Button}>Reply</Box>
                        </Box>
                      </Stack>
                    )) : null)}
                    {comment.replies && comment.replies.length > 1 && (
                      <Box  component="button" sx={{ fontSize:'14px',color:'#65676B', fontWeight: 'bold', mt: 1 }} onClick={() => handleToggleReplies(comment.id)}>
                        {expandedComments[comment.id] ? "Hide" : "View All"} Replies
                      </Box>
                    )}
                  </Box> */}
                </Box>

              </Stack>
            ))}
          </Box>
           <Box
            component="form"
            sx={{ mt: 2, display: 'flex', alignItems: 'center', width: '100%'}}
            onSubmit={handleCommentSubmit}
          >
            <TextField
              fullWidth
              variant="outlined"
              label="Add a comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              sx={{ flexGrow: 1 }}
            />
            <IconButton type="submit" color="primary" sx={{ ml: 1 }}>
              <Send />
            </IconButton>
          </Box>
        </Paper>
       
      </Modal>
    </>

  );
};

export default Post;