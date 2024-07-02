import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { IoShareOutline } from "react-icons/io5";


const Blog = () => {
  return (
    <Box className='mt-[90px]' display='flex' justifyContent='center'>
 
      <Box width='40%' p='10px' >
        <Typography variant='h3' align='center'>Blog</Typography>
        <Divider/>
        <Box display='flex' flexDirection='column' mt='6px' mb='6px'>
          <Box display='flex'  flexDirection='row' alignItems='center' mb='.25rem'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '24px', height: '24px', mr: '6px' }} />
            <Typography variant='subtitle2' mr={1}>Admin</Typography>
            <Typography variant='subtitle2'>17 hours ago</Typography>
          </Box>
          <Typography variant='h5' mb='.5rem' fontSize= '1.125rem' lineHeight= '1.5rem' fontWeight='bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
          <Typography variant='body1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
         
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
              <span style={{fontSize:'12px'}}>7</span>
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
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoChatboxOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>7</span>

            </Box>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' bgcolor='#e9eef1' padding='4px' borderRadius='20px' width='fit-content'
            marginRight='12px' paddingX='12px'>
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoShareOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>Share</span>
            </Box>
          </Box>
        </Box>
        <Divider/>
        <Box display='flex' flexDirection='column' mt='6px' mb='6px'>
          <Box display='flex'  flexDirection='row' alignItems='center' mb='.25rem'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '24px', height: '24px', mr: '6px' }} />
            <Typography variant='subtitle2' mr={1}>Admin</Typography>
            <Typography variant='subtitle2'>17 hours ago</Typography>
          </Box>
          <Typography variant='h5' mb='.5rem' fontSize= '1.125rem' lineHeight= '1.5rem' fontWeight='bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
          <Typography variant='body1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
         
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
              <span style={{fontSize:'12px'}}>7</span>
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
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoChatboxOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>7</span>

            </Box>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' bgcolor='#e9eef1' padding='4px' borderRadius='20px' width='fit-content'
            marginRight='12px' paddingX='12px'>
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoShareOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>Share</span>
            </Box>
          </Box>
        </Box>
        <Divider/>
        <Box display='flex' flexDirection='column' mt='6px' mb='6px'>
          <Box display='flex'  flexDirection='row' alignItems='center' mb='.25rem'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '24px', height: '24px', mr: '6px' }} />
            <Typography variant='subtitle2' mr={1}>Admin</Typography>
            <Typography variant='subtitle2'>17 hours ago</Typography>
          </Box>
          <Typography variant='h5' mb='.5rem' fontSize= '1.125rem' lineHeight= '1.5rem' fontWeight='bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
          <Typography variant='body1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
         
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
              <span style={{fontSize:'12px'}}>7</span>
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
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoChatboxOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>7</span>

            </Box>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' bgcolor='#e9eef1' padding='4px' borderRadius='20px' width='fit-content'
            marginRight='12px' paddingX='12px'>
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoShareOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>Share</span>
            </Box>
          </Box>
        </Box>
        <Divider/>
        <Box display='flex' flexDirection='column' mt='6px' mb='6px'>
          <Box display='flex'  flexDirection='row' alignItems='center' mb='.25rem'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '24px', height: '24px', mr: '6px' }} />
            <Typography variant='subtitle2' mr={1}>Admin</Typography>
            <Typography variant='subtitle2'>17 hours ago</Typography>
          </Box>
          <Typography variant='h5' mb='.5rem' fontSize= '1.125rem' lineHeight= '1.5rem' fontWeight='bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
          <Typography variant='body1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
         
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
              <span style={{fontSize:'12px'}}>7</span>
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
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoChatboxOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>7</span>

            </Box>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' bgcolor='#e9eef1' padding='4px' borderRadius='20px' width='fit-content'
            marginRight='12px' paddingX='12px'>
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoShareOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>Share</span>
            </Box>
          </Box>
        </Box>
        <Divider/>
        <Box display='flex' flexDirection='column' mt='6px' mb='6px'>
          <Box display='flex'  flexDirection='row' alignItems='center' mb='.25rem'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: '24px', height: '24px', mr: '6px' }} />
            <Typography variant='subtitle2' mr={1}>Admin</Typography>
            <Typography variant='subtitle2'>17 hours ago</Typography>
          </Box>
          <Typography variant='h5' mb='.5rem' fontSize= '1.125rem' lineHeight= '1.5rem' fontWeight='bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
          <Typography variant='body1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
         
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
              <span style={{fontSize:'12px'}}>7</span>
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
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoChatboxOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>7</span>

            </Box>
            <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' bgcolor='#e9eef1' padding='4px' borderRadius='20px' width='fit-content'
            marginRight='12px' paddingX='12px'>
              <Button style={{ minWidth: '32px', height: '32px' }}>
                <IoShareOutline style={{ color: 'black', minWidth: '20px', height: '20px' }} />
              </Button>
              <span style={{fontSize:'12px'}}>Share</span>
            </Box>
          </Box>
        </Box>
        
        
      </Box>
    </Box>
  )
}

export default Blog