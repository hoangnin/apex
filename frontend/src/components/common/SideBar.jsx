import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import Logo from "./Logo";



const Sidebar = ({ open, toggleSidebar }) => {
    const dispatch = useDispatch();

    const { appState } = useSelector((state) => state.appState);


    const drawer = (
        <>
            <Toolbar sx={{ paddingY: "20px", color: "text.primary" }}>
                <Stack width="100%" direction="row" justifyContent="center">
                    <Logo />
                </Stack>
            </Toolbar>
            <List sx={{ paddingX: "30px" }}>
                <Typography variant="h6" marginBottom="20px">MENU</Typography>
                {menuConfigs.main.map((item, index) => (
                    <ListItemButton
                        key={index}
                        sx={{
                            borderRadius: "10px",
                            marginY: 1,
                            backgroundColor: appState.includes(item.state) ? "primary.main" : "unset"
                        }}
                        component={Link}
                        to={item.path}
                        onClick={() => toggleSidebar(false)}
                    >
                        <ListItemText disableTypography primary={<Typography textTransform="uppercase">
                            {item.display}
                        </Typography>} />
                    </ListItemButton>
                ))}

                <Typography variant="h6" marginBottom="20px">PERSONAL</Typography>
                {menuConfigs.user.map((item, index) => (
                    <ListItemButton
                        key={index}
                        sx={{
                            borderRadius: "10px",
                            marginY: 1,
                            backgroundColor: appState.includes(item.state) ? "primary.main" : "unset"
                        }}
                        component={Link}
                        to={item.path}
                        onClick={() => toggleSidebar(false)}
                    >
                        <ListItemText disableTypography primary={<Typography textTransform="uppercase">
                            {item.display}
                        </Typography>} />
                    </ListItemButton>
                ))}


            </List>
        </>
    );

    return (
        <Drawer
            open={open}
            onClose={() => toggleSidebar(false)}
            sx={{
                "& .MuiDrawer-Paper": {
                    boxSizing: "border-box",
                    widh: {
                        sideBarWidth: "300px",
                        contentMaxWidth: "1366px"
                    },
                    borderRight: "0px"
                }
            }}
        >
            {drawer}
        </Drawer>
    );
};

export default Sidebar;