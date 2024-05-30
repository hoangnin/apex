import UserSideBar from "../components/common/UserSideBar"
import { Box, Button, MenuItem, Select, Stack, TextField, Typography } from "@mui/material"
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Fragment, useEffect, useState } from "react";
import AvatarUploader from "../components/common/AvatarUploader";
import Data from "../data/Data";

const Profile = () => {

    // const { user } = useSelector(state => state.user);
    const user = Data.user[1];
    // const [avatarUrl, setAvatarUrl] = useState('');




    // useEffect(() => {
    //     setAvatarUrl(user.avatar);

    // }, []);

    // const handleAvatarUpload = async (avatarLink) => {
    //     console.log(avatarLink)
    //     setAvatarUrl(avatarLink);
    // }


    // const dispatch = useDispatch();

    const profileForm = useFormik({
        initialValues: {
            displayName: user.displayName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            location: user?.role === 'RESTAURANT' ? user.data.location : '',
            cuisine: user?.role === 'RESTAURANT' ? user.data.cuisine : '',
            description: user?.role === 'RESTAURANT' ? user.data.description : '',
            openingHours: user?.role === 'RESTAURANT' ? user.data.openingHours : '',
            closingHours: user?.role === 'RESTAURANT' ? user.data.closingHours : '',
            // menu: user?.role === 'RESTAURANT' ? user.data.menu:''
        },
        validationSchema: Yup.object({
            displayName: Yup.string()
                .min(8, "Display name at least 8 characters !")
                .required("Display name is required !"),
            phoneNumber: Yup.string()
                .matches(/^0\d{9}$/, 'Phone number is not valid')
                .required("Phone number is required!"),
            email: Yup.string()
                .email()
                .required("Email is required !"),
            location: Yup.string().required("Location is required."),
            cuisine: Yup.string().required("Cuisine is required."),
            description: Yup.string().required("Description is required."),
            
        }),
        enableReinitialize: true,
        onSubmit: async values => {
        }
    })
    return (
        <>
            <UserSideBar>
                <Typography sx={{
                    width: "100%",
                    height: '50px',
                    display: 'flex',
                    paddingLeft: '10px',
                    alignItems: 'center',
                    backgroundColor: "#f5f5f5",
                    marginBottom: "1rem",
                    fontFamily: '"Nunito", sans-serif',
                    fontSize: "1.4rem",
                    fontWeight: "600",
                }}>Cập nhật thông tin</Typography>
                <AvatarUploader />
                {/* <AvatarUploader handleUpload={handleAvatarUpload} avatar={user.avatar} /> */}

                <Box component="form" onSubmit={profileForm.handleSubmit}
                    sx={{
                        color: "secondary.colorText",
                        marginTop: 2,
                        paddingTop: '1rem',
                    }}
                >
                    <Stack spacing={2}>
                        <TextField type='text' placeholder='Enter your display name' name='displayName'
                            fullWidth value={profileForm.values.displayName}
                            onChange={profileForm.handleChange}
                            onBlur={profileForm.handleBlur}
                            error={profileForm.touched.displayName && profileForm.errors.displayName !== undefined}
                            helperText={profileForm.touched.displayName && profileForm.errors.displayName}
                            label='Tên Đại Diện'
                        >
                        </TextField>
                        <TextField type='text' placeholder='Enter your phone number' name='phoneNumber'
                            value={profileForm.values.phoneNumber} onChange={profileForm.handleChange}
                            onBlur={profileForm.handleBlur}
                            error={profileForm.touched.phoneNumber && profileForm.errors.phoneNumber !== undefined}
                            helperText={profileForm.touched.phoneNumber && profileForm.errors.phoneNumber}
                            label='Số Điện Thoại'
                        >
                        </TextField>
                        <TextField type='email' placeholder='Enter your email' name='email'
                            fullWidth value={profileForm.values.email} onChange={profileForm.handleChange}
                            onBlur={profileForm.handleBlur}
                            error={profileForm.touched.email && profileForm.errors.email !== undefined}
                            helperText={profileForm.touched.email && profileForm.errors.email}
                            label='Email'
                        >
                        </TextField>
                        
                        {user.role === 'RESTAURANT' && (
                            <Fragment >
                                <TextField type='text' placeholder='Enter your location' name='location'
                                    error={profileForm.touched.location && profileForm.errors.location !== undefined}
                                    value={profileForm.values.location} onChange={profileForm.handleChange}
                                    helperText={profileForm.touched.location && profileForm.errors.location}
                                    label='Địa Chỉ' fullWidth
                                >
                                </TextField>

                                <TextField type='text' placeholder='Enter your cuisine' name='cuisine' 
                                    value={profileForm.values.age} onChange={profileForm.handleChange}
                                    error={profileForm.touched.age && profileForm.errors.age !== undefined}
                                    helperText={profileForm.touched.age && profileForm.errors.age}
                                    label='Số Tuổi'
                                />

                                <TextField type='text' placeholder='Enter Discription' name='description'
                                    value={profileForm.values.description} onChange={profileForm.handleChange}
                                    error={profileForm.touched.description && profileForm.errors.description !== undefined}
                                    helperText={profileForm.touched.description && profileForm.errors.description}
                                    minRows={4} multiline fullWidth maxRows={6}
                                    label='Mô Tả Về Bạn'
                                />
                                <TextField type='time' placeholder='Enter opening hours' name='openingHours'
                                    value={profileForm.values.openingHours } onChange={profileForm.handleChange}
                                    error={profileForm.touched.openingHours && profileForm.errors.openingHours !== undefined}
                                    helperText={profileForm.touched.openingHours && profileForm.errors.openingHours}
                                    label='Giờ Mở Cửa'
                                />
                                <TextField type='time' placeholder='Enter closing hours' name='closingHours'
                                    value={profileForm.values.closingHours} onChange={profileForm.handleChange}
                                    error={profileForm.touched.closingHours && profileForm.errors.closingHours !== undefined}
                                    helperText={profileForm.touched.closingHours && profileForm.errors.closingHours}
                                    label='Giờ Đóng Cửa'/>
                                
                            </Fragment>
                        )}
                    </Stack>
                    <Button
                        type='submit'
                        variant='contained'
                        size='small'
                        sx={{
                            margin: '0 auto',
                            marginTop: 4,
                            width: 'fit-content'
                        }}
                    >
                        Cập nhật
                    </Button>
                </Box>
            </UserSideBar>
        </>
    )
}

export default Profile