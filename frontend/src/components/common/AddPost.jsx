import React, { Fragment, useState, useEffect, useCallback } from "react";
import {
    Box,
    Typography,
    TextField,
    Alert,
    Avatar,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import AvatarUploader from "./AvatarUploader";
import PhotoUploader from "./PhotoUploader";
import Data from "../../data/Data";

const AddPost = () => {

    const { user } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [photoState, setPhotoState] = useState({
        addedPhotos: [],
        title: '',
        descriptions: '',
        content: '',
        poster: '',
        isPostRequest: false,
        errorMessage: '',
        isDataRetrieved: false,
        postId: {},
        photo: {},
        photoUploading: false
    });

    const postPhotoForm = useFormik({
        initialValues: {
            title: '',
            descriptions: '',
            content: '',
            poster: '',
            attachments: [],
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(8, "Title at least 8 characters !")
                .required("Title is required !"),
            descriptions: Yup.string()
                .min(8, "Descriptions name at least 8 characters !")
                .required("Descriptions name is required !"),
            content: Yup.string()
                .min(8, "Content name at least 8 characters !")
                .required("Content name is required !"),
        }),
        onSubmit: async (values) => {
            try {
                setPhotoState(prevState => ({ ...prevState, errorMessage: undefined, isPostRequest: true }));

                if (photoState.addedPhotos.length === 0) {
                    setPhotoState(prevState => ({ ...prevState, errorMessage: "Vui lòng thêm album của bạn và các gói dịch vụ!" }));
                    return;
                }

                values.poster = photoState.addedPhotos[0].images[0];
                values.attachments = photoState.addedPhotos;

                const validateResult = validateData(values);
                if (validateResult) {
                    toast.error(`Một số trường chưa có thông tin vui lòng nhập thêm !`);
                    setPhotoState(prevState => ({ ...prevState, isPostRequest: false }));
                    return;
                }


                let response;
                if (photoState.isDataRetrieved) {
                    response = await photoApi.updatePhotoByAuth(values);
                    toast.success("Bài viết được cập nhật thành công!");
                } else {
                    response = await photoApi.createPhoto(values);
                    toast.success("Bài viết được tạo thành công!");
                }

                setPhotoState(prevState => ({ ...prevState, isPostRequest: false }));

                if (response) {
                    postPhotoForm.resetForm();
                    setPhotoState(prevState => ({ ...prevState, addedPhotos: [] }));
                    navigate(`/photos/${photoState.postId}`);

                } else {
                    toast.error("Failed to create/update post.");
                }
            } catch (err) {
                setPhotoState(prevState => ({ ...prevState, isPostRequest: false }));
                toast.error(err.message);
            }
        },
    });


    const validateData = (values) => {
        const undefinedFields = Object.keys(values).filter((key) => {
            return (values[key] === undefined || values[key].length === 0);
        });
        return undefinedFields.length > 0 && undefinedFields;
    };


    return (
        <Fragment>
            <Box
                sx={{
                    position: "relative",
                }}
            >
              
                <Box sx={{ backgroundColor:'white', margin: "10%", display: "flex",boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
 }}>
                    <Container header={photoState.photo.length > 0 ? "UpdatePost" : "Create Post"} size={"3rem"}>
                        <Box
                            component={"form"}
                            onSubmit={postPhotoForm.handleSubmit}
                            sx={{
                                width: { sx: "500px", md: "1000px" },
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                sx={{
                                    textTransform: "capitalize",
                                }}
                                variant="h5"
                            >Title</Typography>
                            <TextField
                                type="text"
                                placeholder="Enter your title here"
                                name="title"
                                fullWidth
                                value={postPhotoForm.values.title}
                                onChange={postPhotoForm.handleChange}
                                color="warning"
                                error={
                                    postPhotoForm.touched.title &&
                                    postPhotoForm.errors.title !== undefined
                                }
                                helperText={
                                    postPhotoForm.touched.title && postPhotoForm.errors.title
                                }
                            />

                            <Typography
                                sx={{
                                    marginTop: 2,
                                    textTransform: "capitalize",
                                }}
                                variant="h5"
                            >Description</Typography>
                            <TextField
                                type="text"
                                placeholder="Enter your description here"
                                name="descriptions"
                                fullWidth
                                multiline
                                rows={5}
                                maxRows={10}
                                value={postPhotoForm.values.descriptions}
                                onChange={postPhotoForm.handleChange}
                                color="warning"
                                error={
                                    postPhotoForm.touched.descriptions &&
                                    postPhotoForm.errors.descriptions !== undefined
                                }
                                helperText={
                                    postPhotoForm.touched.descriptions &&
                                    postPhotoForm.errors.descriptions
                                }
                            />
                            <Typography
                                sx={{
                                    marginTop: 2,
                                    textTransform: "capitalize",
                                }}
                                variant="h5"
                            >Content</Typography>
                            <TextField
                                type="text"
                                placeholder="Enter your content here"
                                name="content"
                                fullWidth
                                multiline
                                rows={5}
                                maxRows={10}
                                value={postPhotoForm.values.content}
                                onChange={postPhotoForm.handleChange}
                                color="warning"
                                error={
                                    postPhotoForm.touched.content &&
                                    postPhotoForm.errors.content !== undefined
                                }
                                helperText={
                                    postPhotoForm.touched.content &&
                                    postPhotoForm.errors.content
                                }
                            />

                            <Typography
                                sx={{
                                    marginTop: 2,

                                    textTransform: "capitalize",
                                }}
                                variant="h5"
                            >Album</Typography>
                                {/* <PhotoUploader
                                    photoUploading={setPhotoUploading}
                                    addedPhotos={photoState.addedPhotos}
                                    onChange={setAddedPhotos}
                                /> */}
                                <PhotoUploader/>

                                <LoadingButton
                                    loadingPosition="start"
                                    type="submit"
                                    fullWidth
                                    size="small"
                                    sx={{
                                        marginTop: 4,
                                        fontFamily: '"Nunito", sans-serif',
                                        fontSize: "1rem",
                                    }}
                                    disabled={photoState.photoUploading}
                                    loading={photoState.isPostRequest}
                                >
                                    {photoState.photo ? "Update" : "Post"}
                                </LoadingButton>

                                {photoState.errorMessage && (
                                    <Box sx={{ marginTop: 2 }}>
                                        <Alert severity="error" variant="outlined">
                                            {photoState.errorMessage}
                                        </Alert>
                                    </Box>
                                )}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Fragment>
    );

}

export default AddPost