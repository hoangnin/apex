import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { IoMdStar } from 'react-icons/io'

const Review = ({ review }) => {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      border: '1px solid white',
      borderRadius: 5,
      padding: '20px',
      bgcolor:'#E5E2DD'
    }}>
      <Avatar sx={{ width: 56, height: 56, }} src={review.employee && review.employee.avatar} />
      <Box ml='13px' display="flex" flexDirection="column" justifyContent="center">
        <Box display='flex' flexDirection='row' mb='7px'>
          {Array.from({ length: review.rating }).map((_, index) => (
            <IoMdStar key={index} style={{ color: 'black', fontSize: '20px' }} />
          ))}
        </Box>
        <Typography sx={{ fontWeight: 'bold' }}>{review.employee && review.employee.username}</Typography>
        <Typography sx={{}}>{review.overView}</Typography>
      </Box>
    </Box>
  )
}

export default Review