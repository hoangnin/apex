import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, MenuItem, Modal, Select, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setUser } from "../../redux/features/userSlice";
import Logo from "./Logo";

const SignupForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isSignUpRequest, setIsSignUpRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const signUpForm = useFormik({
    initialValues: {
      username: "",
      displayName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      location: "",
      openingHours: "",
      closingHours: "",
      restaurantName: "",
      type: "",
      priceRange: "",
      // rushHours: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "Username minimum 8 characters")
        .required("Username is required"),
      displayName: Yup.string()
        .min(8, "DisplayName minimum 8 characters")
        .required("DisplayName is required"),
      phoneNumber: Yup.string()
        .matches(/^0\d{9}$/, 'Phonenumber is not valid')
        .required("Phonenumber is required!"),
      email: Yup.string()
        .email()
        .required("Email is required !"),
      password: Yup.string()
        .min(8, "Password minimum 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "ConfirmPassword not match")
        .min(8, "ConfirmPassword minimum 8 characters")
        .required("ConfirmPassword is required"),
      role: Yup.string().required("Role is required"),
      location: Yup.string().when('role', {
        is: (role) => role === 'RESTAURANT',
        then: () => Yup.string().required("Location is required")
      }),
      openingHours: Yup.string().when('role', {
        is: (role) => role === 'RESTAURANT',
        then: () => Yup.string().required("OpeningHours is required")
          .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
      }),
      closingHours: Yup.string().when('role', {
        is: (role) => role === 'RESTAURANT',
        then: () => Yup.string().required("ClosingHours is required")
          .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format")
      }),
      restaurantName: Yup.string().when('role', {
        is: (role) => role === 'RESTAURANT',
        then: () => Yup.string().required("RestaurantName is required")
      }),
      type: Yup.string().when('role', {
        is: (role) => role === 'RESTAURANT',
        then: () => Yup.string().required("Type is required")
      }),
      priceRange: Yup.string().when('role', {
        is: (role) => role === 'RESTAURANT',
        then: () => Yup.string().required("PriceRange is required")
      })


    }),
    onSubmit: async values => {
      setErrorMessage(undefined);
      setIsSignUpRequest(true);
      const { response, err } = await userApi.signup(values);
      setIsSignUpRequest(false);

      if (response) {
        signUpForm.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success("Sign in success");
      }

      if (err) setErrorMessage(err.message);
    }
  });

  // useEffect(() => {
  //   if (signUpForm.values.role === 'RESTAURANT') {
  //     setIsModalOpen(true);
  //   } else {
  //     setIsModalOpen(false);
  //   }
  // }, [signUpForm.values.role]);

  return (
    <Box component="form" onSubmit={signUpForm.handleSubmit}>
      <Stack spacing={3}>
        <TextField
          type="text"
          placeholder="Username"
          name="username"
          fullWidth
          value={signUpForm.values.username}
          onChange={signUpForm.handleChange}
          onBlur={signUpForm.handleBlur}
          color="success"
          error={signUpForm.touched.username && signUpForm.errors.username !== undefined}
          helperText={signUpForm.touched.username && signUpForm.errors.username}
        />
        <TextField
          type="text"
          placeholder="Display name"
          name="displayName"
          fullWidth
          value={signUpForm.values.displayName}
          onChange={signUpForm.handleChange}
          onBlur={signUpForm.handleBlur}
          color="success"
          error={signUpForm.touched.displayName && signUpForm.errors.displayName !== undefined}
          helperText={signUpForm.touched.displayName && signUpForm.errors.displayName}
        />
        <TextField
          type='text'
          placeholder='Phone number'
          name='phoneNumber'
          fullWidth
          value={signUpForm.values.phoneNumber}
          onChange={signUpForm.handleChange}
          color='warning'
          onBlur={signUpForm.handleBlur}
          error={signUpForm.touched.phoneNumber && signUpForm.errors.phoneNumber !== undefined}
          helperText={signUpForm.touched.phoneNumber && signUpForm.errors.phoneNumber}
        />
        <TextField
          type='email'
          placeholder='Enter email'
          name='email'
          fullWidth
          value={signUpForm.values.email}
          onChange={signUpForm.handleChange}
          color='warning'
          onBlur={signUpForm.handleBlur}
          error={signUpForm.touched.email && signUpForm.errors.email !== undefined}
          helperText={signUpForm.touched.email && signUpForm.errors.email}
        />
        <TextField
          type="password"
          placeholder="Password"
          name="password"
          fullWidth
          value={signUpForm.values.password}
          onChange={signUpForm.handleChange}
          onBlur={signUpForm.handleBlur}
          color="success"
          error={signUpForm.touched.password && signUpForm.errors.password !== undefined}
          helperText={signUpForm.touched.password && signUpForm.errors.password}
        />
        <TextField
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          fullWidth
          value={signUpForm.values.confirmPassword}
          onChange={signUpForm.handleChange}
          onBlur={signUpForm.handleBlur}
          color="success"
          error={signUpForm.touched.confirmPassword && signUpForm.errors.confirmPassword !== undefined}
          helperText={signUpForm.touched.confirmPassword && signUpForm.errors.confirmPassword}
        />
        <Select
          labelId="role_selection"
          id="role"
          value={signUpForm.values.role}
          onChange={signUpForm.handleChange}
          name="role"
          sx={{
            padding: '0',

          }}
        >
          <MenuItem value={"EMPLOYEE"}>Employee</MenuItem>
          <MenuItem value={"RESTAURANT"}>Restaurant</MenuItem>
          <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
        </Select>

        {signUpForm.values.role && signUpForm.values.role === 'RESTAURANT' && (
          <>

            <TextField
              type='text'
              placeholder='Enter your location'
              name='location'
              error={signUpForm.touched.location && signUpForm.errors.location !== undefined}
              value={signUpForm.values.location}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
              helperText={signUpForm.touched.location && signUpForm.errors.location}
              label='Location'
              fullWidth
            />
            <TextField
              type='time'
              placeholder='Enter opening hours'
              name='openingHours'
              value={signUpForm.values.openingHours}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
              error={signUpForm.touched.openingHours && signUpForm.errors.openingHours !== undefined}
              helperText={signUpForm.touched.openingHours && signUpForm.errors.openingHours}
              label='OpenTime' 
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              type='time'
              placeholder='Enter closing hours'
              name='closingHours'
              value={signUpForm.values.closingHours}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}
              error={signUpForm.touched.closingHours && signUpForm.errors.closingHours !== undefined}
              helperText={signUpForm.touched.closingHours && signUpForm.errors.closingHours}
              label='CloseTime' 
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              type='text'
              placeholder='Enter restaurant name'
              name='restaurantName'
              value={signUpForm.values.restaurantName}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}

              error={signUpForm.touched.restaurantName && signUpForm.errors.restaurantName !== undefined}
              helperText={signUpForm.touched.restaurantName && signUpForm.errors.restaurantName}
              label='Restaurant Name'
            />
            <TextField
              type='text'
              placeholder='Enter your cuisine'
              name='type'
              value={signUpForm.values.type}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}

              error={signUpForm.touched.type && signUpForm.errors.type !== undefined}
              helperText={signUpForm.touched.type && signUpForm.errors.type}
              label='Type'
            />
            <TextField
              type='text'
              placeholder='Enter price range'
              name='priceRange'
              value={signUpForm.values.priceRange}
              onChange={signUpForm.handleChange}
              onBlur={signUpForm.handleBlur}

              error={signUpForm.touched.priceRange && signUpForm.errors.priceRange !== undefined}
              helperText={signUpForm.touched.priceRange && signUpForm.errors.priceRange}
              label='Price Range'
            />
          </>
        )}
        {/* <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
              sx={{
                padding: 4, boxShadow: 24, backgroundColor: "background.paper", maxHeight: '90vh',
                overflowY: 'auto',
              }}
            >
              <Box sx={{ textAlign: "center", marginBottom: "2rem" }}
              >
                <Logo />
              </Box>

              <Stack spacing={2} sx={{ padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%' }}>
                <TextField
                  type='text'
                  placeholder='Enter your location'
                  name='location'
                  error={signUpForm.touched.location && signUpForm.errors.location !== undefined}
                  value={signUpForm.values.location}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}
                  helperText={signUpForm.touched.location && signUpForm.errors.location}
                  label='Location'
                  fullWidth
                />
                <TextField
                  type='time'
                  placeholder='Enter opening hours'
                  name='openingHours'
                  value={signUpForm.values.openingHours}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}

                  error={signUpForm.touched.openingHours && signUpForm.errors.openingHours !== undefined}
                  helperText={signUpForm.touched.openingHours && signUpForm.errors.openingHours}
                  label='OpenTime'
                />
                <TextField
                  type='time'
                  placeholder='Enter closing hours'
                  name='closingHours'
                  value={signUpForm.values.closingHours}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}

                  error={signUpForm.touched.closingHours && signUpForm.errors.closingHours !== undefined}
                  helperText={signUpForm.touched.closingHours && signUpForm.errors.closingHours}
                  label='CloseTime'
                />
                <TextField
                  type='text'
                  placeholder='Enter restaurant name'
                  name='restaurantName'
                  value={signUpForm.values.restaurantName}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}

                  error={signUpForm.touched.restaurantName && signUpForm.errors.restaurantName !== undefined}
                  helperText={signUpForm.touched.restaurantName && signUpForm.errors.restaurantName}
                  label='Restaurant Name'
                />
                <TextField
                  type='text'
                  placeholder='Enter your cuisine'
                  name='type'
                  value={signUpForm.values.type}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}

                  error={signUpForm.touched.type && signUpForm.errors.type !== undefined}
                  helperText={signUpForm.touched.type && signUpForm.errors.type}
                  label='Type'
                />
                <TextField
                  type='text'
                  placeholder='Enter price range'
                  name='priceRange'
                  value={signUpForm.values.priceRange}
                  onChange={signUpForm.handleChange}
                  onBlur={signUpForm.handleBlur}

                  error={signUpForm.touched.priceRange && signUpForm.errors.priceRange !== undefined}
                  helperText={signUpForm.touched.priceRange && signUpForm.errors.priceRange}
                  label='Price Range'
                />

                <Button onClick={() => 
                  setIsModalOpen(false)}>Next</Button>
              </Stack>
            </Box>

          </Box>
        </Modal> */}
      </Stack>
      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isSignUpRequest}
      >
        sign up
      </LoadingButton>

      <Button
        fullWidth
        sx={{ marginTop: 1 }}
        onClick={() => switchAuthState()}
      >
        sign in
      </Button>

      {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined">{errorMessage}</Alert>
        </Box>
      )}
    </Box>
  );
};

export default SignupForm;
