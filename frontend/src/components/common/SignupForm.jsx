import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/user.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setUser } from "../../redux/features/userSlice";

const SignupForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signUpForm = useFormik({
    initialValues: {

      username: "",
      displayName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: ""

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
      role: Yup.string().required("Role is required")
    }),
    onSubmit: async values => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      const { response, err } = await userApi.signup(values);
      setIsLoginRequest(false);

      if (response) {
        signUpForm.resetForm();
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success("Sign in success");
      }

      if (err) setErrorMessage(err.message);
    }
  });

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
        <TextField type='text' placeholder='Phone number' name='phoneNumber'
          fullWidth value={signUpForm.values.phoneNumber} onChange={signUpForm.handleChange} color='warning'
          onBlur={signUpForm.handleBlur}

          error={signUpForm.touched.phoneNumber && signUpForm.errors.phoneNumber !== undefined}
          helperText={signUpForm.touched.phoneNumber && signUpForm.errors.phoneNumber}
        >
        </TextField>
        <TextField type='email' placeholder='Nhập email' name='email'
          fullWidth value={signUpForm.values.email} onChange={signUpForm.handleChange} color='warning'
          onBlur={signUpForm.handleBlur}

          error={signUpForm.touched.email && signUpForm.errors.email !== undefined}
          helperText={signUpForm.touched.email && signUpForm.errors.email}
        ></TextField>
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
          placeholder='Select you role'
          name="role"
          sx={{
            padding: '0',
          }}
        >
          <MenuItem value={"PHOTOGRAPHER"}>Employee</MenuItem>
          <MenuItem value={"CUSTOMER"}>Restaurant</MenuItem>
          <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
        </Select>
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
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
          <Alert severity="error" variant="outlined" >{errorMessage}</Alert>
        </Box>
      )}
    </Box>
  );
};

export default SignupForm;