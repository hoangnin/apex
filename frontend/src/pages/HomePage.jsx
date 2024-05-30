import HomeOutlined from "@mui/icons-material/HomeOutlined"
import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Post from "../components/common/Post"
import  Data  from "../data/Data"
import Add from "../components/common/Add"
import ReviewsIcon from '@mui/icons-material/Reviews';

const HomePage = () => {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      mt: '82px'
    }}>
      <Box sx={{
        flex: 2,
        display:{xs:'none',md:'block',
          
        }       
      }}>
        <Box position="fixed" display='flex' flexDirection='column' paddingLeft='20px'>
          {/* <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={'/'}>
                <ListItemIcon>
                  <HomeOutlined />
                </ListItemIcon>
                <ListItemText primary="Posts" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to={'/vouchers'}>
                <ListItemIcon>
                  <ReviewsIcon />
                </ListItemIcon>
                <ListItemText primary="Reviews" />
              </ListItemButton>
            </ListItem>

          </List> */}
          <Button
            sx={{
              fontFamily: '"Nunito", sans-serif',
              fontSize: "0.9rem",
              fontWeight: "600",
              // color: appState.includes(item.state) ? "primary.contrastText" : "inherit",
              color: "inherit" ,
              justifyContent: 'flex-start',
              mr: 2
            }}
            component={Link}
            to={'/'}
            // variant={appState.includes(item.state) ? "contained" : "text"}
          >
            <Box mr='10px'><HomeOutlined/></Box>
            <Typography>Post</Typography>
          </Button>
          <Button
            sx={{
              fontFamily: '"Nunito", sans-serif',
              fontSize: "0.9rem",
              fontWeight: "600",
              // color: appState.includes(item.state) ? "primary.contrastText" : "inherit",
              color: "inherit" ,
              mr: 2,
              alignItems: 'center'
            }}
            component={Link}
            to={'/'}
            // variant={appState.includes(item.state) ? "contained" : "text"}
          >
            <Box mr='10px'><ReviewsIcon/></Box>
            <Typography>Reviews</Typography>
          </Button>
        </Box>
      </Box>
      <Box flex={{xs:10,md:4}} p={{ xs: 0, md: 2 }}>
            {Data.post.map((item,index)=>{
              return <Post post={item} key={item.id} />
            })}
      </Box>
      <Box sx={{
        flex:2
      }}>

      </Box>
      <Add/>
    </Box>
  )
}

export default HomePage