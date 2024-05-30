import React, { Fragment, useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import PhotoAlbumIcon from "@mui/icons-material/PhotoAlbum";
import { LoadingButton } from "@mui/lab";
import InputAdornment from '@mui/material/InputAdornment';

const PhotoUploader = ({}) => {

 
  const [isUploading, setIsUploading] = useState(false);
  const [albumName, setAlbumName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // const uploadPhoto = async (ev, albumIndex) => {
  //   setIsUploading(true);
  //   const files = ev.target.files;
  //   const images = new FormData();

  //   for (let i = 0; i < files.length; i++) {
  //     images.append("images", files[i]);
  //   }

  //   photoUploading(true);
  //   const photoLinks = await uploadImageApi.uploadPhotoByFiles(images);
    
  //   if (albumIndex !== undefined && addedPhotos[albumIndex]) {
  //     addedPhotos[albumIndex].images.push(...photoLinks);
  //   } else {
  //     addedPhotos.push({ albumName: albumName, images: [...photoLinks] });
  //   }
  //   onChange(addedPhotos);
  //   photoUploading(false);
  //   setAlbumName("");
  //   setIsUploading(false);
  // };

  // const removePhoto = (ev, albumIndex, imgIdx) => {
  //   ev.preventDefault();
  //   const updatedAlbums = [...addedPhotos];

  //   updatedAlbums[albumIndex].images.splice(imgIdx, 1);
  //   onChange(updatedAlbums);
  // };

  // const selectAsMainPhoto = (ev, albumIndex, imgIdx) => {
  //   ev.preventDefault();
  //   const updatedAlbums = [...addedPhotos];
  //   const selectedImage = updatedAlbums[albumIndex].images.splice(imgIdx, 1);
  //   updatedAlbums[albumIndex].images.unshift(selectedImage);
 
  //   onChange(updatedAlbums);
  // };

  // const handleChangeAlbumName = (value, index) => {
  //   if (value in addedPhotos) {
  //     setErrorMessage("This album name already exists!");
  //   } else {
  //     setErrorMessage(undefined);
  //     if (index === undefined) {
  //       setAlbumName(value);
  //     } else {
  //       addedPhotos[index].albumName = value;
  //       onChange([...addedPhotos]);
  //     }
  //   }
  // };

  // const handleRemoveAlbum = (albumIndex) => {
  //   const updatedAlbums = [...addedPhotos];
  //   updatedAlbums.splice(albumIndex, 1);
  //   onChange(updatedAlbums);
  // };

  return (
    <Fragment>
      {/**Add photo by local file */}

      {/* {addedPhotos && addedPhotos.map((album, albumIndex) => ( */}

        {/* <Box key={albumIndex}> */}
        <Box>
          <Stack flexDirection={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} margin={'1rem 0'}>
            <TextField
              type="text"
              // name={`albumName-item-${albumIndex}`}
              name={`albumName-item-$`}
              variant="standard"
              color="warning"
              // value={album.albumName}
              placeholder="Tên album ..."
              // onChange={(ev) =>
              //   handleChangeAlbumName(ev.target.value, albumIndex)
              // }
              style={{
                width: { xs: '30%', md: '50%' }
              }}
              // InputProps={{
              //   startAdornment: (
              //     <InputAdornment position="start">
              //       <PhotoAlbumIcon sx={{
              //         fontSize: '2rem',
              //         marginBottom: '0.4rem',
              //         color: album.albumName === "" ? 'red' : 'secondary.main'
              //       }} />
              //     </InputAdornment>
              //   ),
              // }}
              // error={album.albumName === ""}
              // helperText={album.albumName === "" ? "Album name is required" : ""}
            />

            <LoadingButton
              variant="text"
              startIcon={<DeleteIcon   />}
              loadingPosition="start"
              // onClick={() => handleRemoveAlbum(albumIndex)}
              sx={{
                right: { xs: 0, md: "10px" },
                marginTop: { xs: 2, md: 0 },
                width: "max-content",
              }}
            >
              Xóa Album
            </LoadingButton>
          </Stack>

          <Grid
            container
            spacing={2}
            sx={{ marginBottom: "1rem" }}
          >
            {/* {album.images.map((image, index) => ( */}
              <Grid
                item xs={6} md={3} lg={2} 
                // key={index}
                sx={{
                  position: "relative",
                  height: "12rem",
                }}
                // index={index}
              >
                <img
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    boxShadow: "2px 2px 5px rgba(255,255,255, 0.6)",
                    overflow: "hidden",
                  }}
                  src={"https://source.unsplash.com/random"}
                  alt="PhotoItem"
                />

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <IconButton
                    sx={{
                      cursor: "pointer",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    // onClick={(ev) => removePhoto(ev, albumIndex, index)}
                    className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl"
                  >
                    <DeleteIcon sx={{ fontSize: "1.4rem",  color: "#fff", borderRadius: '10px', bgcolor: "#333", }} />
                  </IconButton>

                  {/* <IconButton
                    sx={{
                      cursor: "pointer",
                      color: "#fff",
                      borderRadius: "10px",
                      padding: "10px",
                    }}
                    onClick={(ev) => selectAsMainPhoto(ev, albumIndex, index)}
                  >
                    {image === album.images[0] ? (
                      <CheckCircleIcon sx={{fontSize: "1.4rem",  color: "#fff", borderRadius: '10px', bgcolor: "#333", }} />
                    ) : (
                      <StarIcon sx={{ fontSize: "1.4rem",  color: "#fff", borderRadius: '10px', bgcolor: "#333", }} />
                    )}
                  </IconButton> */}
                </Box>

              </Grid>
            {/* ))} */}

            <Grid item xs={6} md={3} lg={2} height={"12rem"}>
              <label
                // htmlFor={`upload-photo-item${albumIndex}`}
                htmlFor={`upload-photo-item`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  justifyContent: "center",
                  border: '2px dashed #000',
                  flexDirection: "column",
                }}
              >
                <input
                  // id={`upload-photo-item${albumIndex}`}
                  id={`upload-photo-item`}
                  type="file"
                  multiple
                  name="images"
                  style={{ display: "none" }}
                  onChange={(ev) => uploadPhoto(ev, albumIndex)}
                  disabled={isUploading}

                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  style={{ width: "4.4rem" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                {/* {isUploading ? "Đang tải ảnh lên ..." : "Thêm ảnh..."} */}
                "Thêm ảnh..."
              </label>
            </Grid>


            {/**End render album list */}
          </Grid>
        </Box>
      {/* ))} */}


      {/** Upload new album  */}

      {/* <TextField
        type="text"
        placeholder="Tên Album Của Bạn: "
        name="initAlbumName"
        fullWidth
        value={albumName}
        onChange={(ev) => handleChangeAlbumName(ev.target.value, undefined)}
        color="warning"
        error={errorMessage}
        helperText={errorMessage}
        style={{ marginBottom: "1rem" }}
      /> */}

      {/* <Grid item xs={6} sm={4} md={3} lg={2} height={"12rem"}>
        <label
          htmlFor="upload-photo"
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            border: '2px dashed #000',
            flexDirection: "column",
          }}
        >
          <input
            id="upload-photo"
            type="file"
            multiple
            name="images"
            style={{ display: "none" }}
            onChange={(ev) => uploadPhoto(ev, -1)}
            disabled={isUploading}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: "4.4rem" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          {isUploading
            ? "Đang tải ảnh lên ..."
            : "Tải ảnh cho album mới nhé..."}
        </label>
      </Grid> */}

    </Fragment>
  );
};

export default PhotoUploader;
