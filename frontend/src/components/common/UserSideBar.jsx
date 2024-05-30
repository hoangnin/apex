import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import menuConfigs from "../../configs/menu.configs"
import { useSelector } from "react-redux";

const UserSideBar = ({ children }) => {

    const {appState} = useSelector((state) => state.appState);
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                padding: '5rem 32px 32px',
                margin: "60px 60px 0",

            }}>
                <Box sx={{
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                    flex: 2,
                    width: "100%",
                    flexDirection: "column",
                    padding: "32px 16px",
                    height: "fit-content",
                }}>
                    {menuConfigs.user.map((item, index) => (
                        <Button
                        component={Link}
                        to={item.path}
                        key={index}
                        sx={{
                           mr: 2,
                           fontFamily: '"Nunito", sans-serif',
                           fontSize: "0.9rem",
                           fontWeight: "600",
                           textTransform: 'none',
                           display: 'flex',
                           alignItems: 'center',
                           flexDirection: 'row',
                           justifyContent: 'flex-start',
                           padding: '0.6rem 10px',
                           width: '100%',
                           color: 'black'   ,
                           bgcolor: appState.includes(item.state) ? 'rgba(0,0,0,0.5)' : 'transparent',
                           '&:hover': {
                              color: 'secondary.colorText',
                              bgColor: 'rgba(0,0,0,0.5)',
                           }
                        }}
                     >
                           
                            <Typography>
                                {item.display}
                            </Typography>
                        </Button>
                    ))}
                </Box>
                <Box sx={{ 
                    flex: 8,
                    // boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
                   
                    width: "100%",
                    flexDirection: "column",
                    margin:'0 32px',
                    padding:'10px'
                }}>
                    {children }
                </Box>
            </Box>
        </>
    )
}

export default UserSideBar
