import { Box, Stack, Typography } from '@mui/material';
import React, { useCallback, useState, useEffect } from 'react'

import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from "react-icons/fi";
// import uploadImageApi from "../../api/modules/upload.api";


const AvatarUploader = ({ }) => {


   // const [avatarUrl, setAvatarUrl] = useState('');
   const [isUploading, setIsUploading] = useState(false);

   // useEffect(() => {
   //    setAvatarUrl(avatar);
   // }, [avatar])


   // const onDrop = useCallback(async (acceptedFiles) => {
   //    const avatar = new FormData();
   //    avatar.append('avatar', acceptedFiles[0]);

   //    setIsUploading(true);
   //    const avatarLink = await uploadImageApi.uploadAvatar(avatar);
   //    setAvatarUrl(avatarLink);
   //    setIsUploading(false);
   //    handleUpload(avatarLink);
   // }, []);


   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/jpeg, image/png',
      multiple: 'false',
      ondrop
   });

   return (
      <Stack flexDirection={{ sx: 'column', md: 'row' }} gap={'10px'} justifyContent={'space-between'}>
         <Box sx={{ width: { sx: '100%', md: '70%' }, textAlign: 'center' }}>
            <Box
               {...getRootProps()}
               sx={{
                  padding: '2rem',
                  border: '2px dashed #000',
                  bgcolor: '#f9f9f9',
                  cursor: 'pointer',
               }}
            >
               <input {...getInputProps()} />

               {isUploading ? <Typography

                  variant='p'
                  sx={{
                     color: 'secondary.colorText',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     flexDirection: 'column'
                  }}
               >
                  <FiUploadCloud style={{
                     color: 'secondary.main',
                     fontSize: '2rem',
                     marginBottom: '10px'
                  }} />
                 Đang tải lên...
               </Typography> :
                  <Box>
                     <Typography

                        variant='p'
                        sx={{
                           color: 'secondary.colorText',
                           display: 'flex',
                           alignItems: 'center',
                           justifyContent: 'center',
                           flexDirection: 'column'
                        }}
                     >
                        <FiUploadCloud style={{
                           color: 'secondary.main',
                           fontSize: '2rem',
                           marginBottom: '10px'
                        }} />
                        Thả ảnh vào đây hoặc click để chọn ảnh
                     </Typography>

                     <em style={{
                        fontSize: '0.8rem',
                        color: '#5a626e',
                     }}>
                        (chỉ hỗ trợ file ảnh định dạng .jpg, .png, .jpeg, dung lượng tối đa 100kb)
                     </em>
                  </Box>}
            </Box>
         </Box >

         {/* {avatarUrl && <Box sx={{
            width: { sx: '100%', md: '30%' },
            borderRadius: '10px',
            border: '2px solid #000',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${avatarUrl})`,
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
         }} />
         } */}
      </Stack>
   )
}

export default AvatarUploader
