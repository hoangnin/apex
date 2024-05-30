import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Topbar from "../common/TopBar"
import Footer from "../common/Footer"
import AuthModal from "../common/AuthModal"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const MainLayout = () => {
    // const dispatch = useDispatch();
    // const { user } = useSelector((state) => state.user);



    // useEffect(() => {
    //      const authUser = async () => {
    //           const { response, err } = await userApi.getInfo();

    //           if (response) dispatch(setUser(response));
    //           if (err) dispatch(setUser(null));
    //      };

    //      user && authUser();

    // }, [dispatch]);
    return (
        <>
            {/* globalloading */}
            {/* <GlobalLoading/> */}
            {/* globalloading */}

            {/* login modal */}

            <AuthModal/>
            {/* login modal */}

            <Box display="flex" minHeight="90vh">
                {/* header */}
                <Topbar/>
                {/* header */}

                {/* main */}
                <Box
                    component="main"
                    flexGrow={1}
                    overflow="hidden"
                    minHeight="100vh"
                    // bgcolor='#F0F2F5'
                >
                    <Outlet/>
                </Box>
                {/* main */}
            </Box>

            {/* footer */}
            <Footer/>
            {/* footer */}
        </>

    )
}

export default MainLayout