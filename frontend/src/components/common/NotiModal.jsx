import { Box, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import Logo from './Logo'

const NotiModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const handleClose = () => setIsModalOpen(false);
  return (
    <Modal open={isModalOpen} onClose={handleClose}>
        <Box sx={{
             position: "absolute",
             top: "50%",
             left: "50%",
             transform: "translate(-50%, -50%)",
             width: "100%",
             maxWidth: "600px",
             padding: 4,
             outline: "none",
             
        }}  
        >
            <Box
                sx={{padding: 4,boxShadow:24,backgroundColor: "background.paper",maxHeight: '90vh',
                overflowY: 'auto',}}
            >
                <Box sx={{textAlign: "center", marginBottom: "2rem"}}
                >
                    <Logo/>
                </Box>
               <Typography>
                Please wait while we process your request
               </Typography>

            </Box>

        </Box>
    </Modal>
  )
}

export default NotiModal