import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";

import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import { cloneElement, useState } from "react";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";

import Logo from "./Logo";
import UserMenu from "../common/UserMenu";
import Sidebar from "./SideBar";
// import Sidebar from "./Sidebar";

const ScrollAppBar = ({ children, window }) => {



    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
        target: window ? window() : undefined
    });

    return cloneElement(children, {
        sx: {
            color: trigger ? "text.primary" : "text.primary",
            backgroundColor: trigger ? "background.paper" : "background.paper"
        }
    });
};

const Topbar = () => {
    const { user } = useSelector((state) => state.user);
    const { appState } = useSelector((state) => state.appState);
    //   const { themeMode } = useSelector((state) => state.themeMode);

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const dispatch = useDispatch();


    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
            <ScrollAppBar>
                <AppBar elevation={0} sx={{ zIndex: 9999 }}>
                    <Toolbar sx={{ borderBottom: '3px solid #F0F0F0', alignItems: "center", backgroundColor: 'white' }}>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <IconButton
                                color="inherit"
                                sx={{ mr: 2, display: { md: "none" } }}
                                onClick={toggleSidebar}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                                <Logo />
                            </Box>
                        </Stack>

                        <Box flexGrow={1} alignItems="center" paddingY='20px' marginX='85px' justifyContent="space-between" display={{ xs: "none", md: "flex" }}>
                            <Box sx={{ marginRight: "30px" }}>
                                <Logo />
                            </Box>
                            <Box>
                                {menuConfigs.main.map((item, index) => 
                                (<Button
                                    key={index}
                                    sx={{
                                        fontFamily: '"Nunito", sans-serif',
                                        fontSize: "0.9rem",
                                        fontWeight: "600",
                                        color: appState.includes(item.state) ? "primary.contrastText" : "inherit",
                                        mr: 2
                                    }}
                                    component={Link}
                                    to={item.path}
                                    variant={appState.includes(item.state) ? "contained" : "text"}
                                >
                                    <Box mr='3px'>{item.icon}</Box>
                                    <Typography>{item.display}</Typography>
                                </Button>)
                                // {
                                //     if (user && item.role) {
                                //         return (
                                //             <Button
                                //                 key={index}
                                //                 sx={{
                                //                     fontFamily: '"Nunito", sans-serif',
                                //                     fontSize: "0.9rem",
                                //                     fontWeight: "600",
                                //                     color: appState.includes(item.state) ? "primary.contrastText" : "inherit",
                                //                     mr: 2
                                //                 }}
                                //                 component={Link}
                                //                 to={item.path}
                                //                 variant={appState.includes(item.state) ? "contained" : "text"}
                                //             >
                                //                 <Box mr='3px'>{item.icon}</Box>
                                //                 <Typography>{item.display}</Typography>
                                //             </Button>
                                //         );
                                //     } else if (!user && !item.role) {
                                //         return (
                                //             <Button
                                //                 key={index}
                                //                 sx={{
                                //                     fontFamily: '"Nunito", sans-serif',
                                //                     fontSize: "0.9rem",
                                //                     fontWeight: "600",
                                //                     color: appState.includes(item.state) ? "primary.contrastText" : "inherit",
                                //                     mr: 2
                                //                 }}
                                //                 component={Link}
                                //                 to={item.path}
                                //                 variant={appState.includes(item.state) ? "contained" : "text"}
                                //             >
                                //                 <Box mr='3px'>{item.icon}</Box>
                                //                 <Typography>{item.display}</Typography>
                                //             </Button>
                                //         )
                                //     }else if(user && item.role.includes("CUSTOMER") && user.role === "CUSTOMER"){
                                //         return (
                                //             <Button
                                //         key={index}
                                //         sx={{
                                //             fontFamily: '"Nunito", sans-serif',
                                //             fontSize: "0.9rem",
                                //             fontWeight: "600",
                                //             color: appState.includes(item.state) ? "primary.contrastText" : "inherit",
                                //             mr: 2
                                //         }}
                                //         component={Link}
                                //         to={item.path}
                                //         variant={appState.includes(item.state) ? "contained" : "text"}
                                //     >
                                //         <Box mr='3px'>{item.icon}</Box>
                                //         <Typography>{item.display}</Typography>
                                //     </Button>
                                //         )
                                //     }
                                // }
                                )}
                            </Box>
                            {!user && <Button
                                variant="text"
                                onClick={() => dispatch(setAuthModalOpen(true))}
                            >
                                sign in
                            </Button>}
                            {user && <UserMenu />}
                        </Box>
                        {/* main menu */}

                        {/* user menu */}


                        {/* user menu */}
                        {/* user menu */}
                    </Toolbar>
                </AppBar>
            </ScrollAppBar >
        </>
    );
};

export default Topbar;