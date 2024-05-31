import { Button } from "@mui/material";
import UserSideBar from "../components/common/UserSideBar"
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Box, Stack, TextField, Typography } from "@mui/material";

const ChangePassword = () => {
  const form = useFormik({
    initialValues: {
       password: "",
       newPassword: "",
       confirmNewPassword: ""
    },
    validationSchema: Yup.object({
       password: Yup.string()
          .min(8, "Mật khẩu phải có ít nhất 8 ký tự!")
          .required("Cần nhập trường này !"),
       newPassword: Yup.string()
          .min(8, "Mật khẩu mới phải có ít nhất 8 ký tự !")
          .required("Cần nhập trường này !"),
       confirmNewPassword: Yup.string()
          .oneOf([Yup.ref("newPassword")], "Xác nhận mật khẩu không khớp !")
          .min(8, "Xác nhận mật khẩu phải có ít nhất 8 ký tự!")
          .required("Cần nhập trường này !")
    }),
    onSubmit: async values => onUpdate(values)
 });
  return (
    <UserSideBar>
      <Typography sx={{
        width: "100%",
        height: '50px',
        display: 'flex',
        paddingLeft: '10px',
        alignItems: 'center',
        backgroundColor: "#01877E",
        marginBottom: "1rem",
        fontFamily: '"Nunito", sans-serif',
        fontSize: "1.4rem",
        fontWeight: "600",
        color: 'white'
      }}>Change Password
      </Typography>
      <Box component="form" onSubmit={form.handleSubmit} >
            <Stack spacing={2}>
               <TextField
                  type="password"
                  placeholder="Previous password"
                  name="password"
                  fullWidth
                  value={form.values.password}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  color="success"
                  error={form.touched.password && form.errors.password !== undefined}
                  helperText={form.touched.password && form.errors.password}
               />
               <TextField
                  type="password"
                  placeholder="New password"
                  name="newPassword"
                  fullWidth
                  value={form.values.newPassword}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  color="success"
                  error={form.touched.newPassword && form.errors.newPassword !== undefined}
                  helperText={form.touched.newPassword && form.errors.newPassword}
               />
               <TextField
                  type="password"
                  placeholder="Confirm new password"
                  name="confirmNewPassword"
                  fullWidth
                  value={form.values.confirmNewPassword}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  color="success"
                  error={form.touched.confirmNewPassword && form.errors.confirmNewPassword !== undefined}
                  helperText={form.touched.confirmNewPassword && form.errors.confirmNewPassword}
               />
               <Button
                  type='submit'
                  fullWidth
                  size='small'
                  variant='contained'
                  sx={{
                     width: 'fit-content',
                     margin: '0 auto',
                     marginTop: 4,
                     bgcolor: '#01877E',
                  }}
               >
                  Cập nhât
               </Button>
            </Stack>
         </Box>
    </UserSideBar>
  )
}

export default ChangePassword