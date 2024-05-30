import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/userSlice";
import { toast } from "react-toastify";


const UserMenu = () => {

    const {user} = useSelector((state) => state.user);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const toggleMenu = (e) => setAnchorEl(e.currentTarget);
 
 
    const logout = () => {
       dispatch(setUser(null));
       navigate('/');
       toast.success("Logged out successfully");
    }

    return (

        <>
            <Typography
                sx={{ cursor: "pointer" ,
                fontFamily: '"Nunito", sans-serif',
                fontSize: "1rem",
                fontWeight: "600",}}
                onClick={toggleMenu}
            >
                {user.displayName}
            </Typography>
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                PaperProps={{ sx: { padding: 0 } }}
            >
                {menuConfigs.user.map((item, index) => (
                    <ListItemButton
                        component={Link}
                        to={item.path}
                        key={index}
                        onClick={() => setAnchorEl(null)}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText disableTypography primary={
                            <Typography textTransform="uppercase">{item.display}</Typography>
                        } />
                    </ListItemButton>
                ))}
                <ListItemButton
                    sx={{ borderRadius: "10px" }}
                    onClick={logout}
                >
                    <ListItemIcon><LogoutOutlinedIcon /></ListItemIcon>
                    <ListItemText disableTypography primary={
                        <Typography textTransform="uppercase">sign out</Typography>
                    } />
                </ListItemButton>
            </Menu>
        </>

    );
};

export default UserMenu;