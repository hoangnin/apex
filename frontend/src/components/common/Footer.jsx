import { Paper, Stack, Box, Button } from '@mui/material'
import Logo from './Logo'
import menuConfigs from "../../configs/menu.configs"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
            <Paper square={true} sx={{backgroundColor:'#01877E', backgroundImage: "unset", padding: "2rem" }}>
                <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{ xs: "column", md: "row" }}
                    sx={{ height: "max-content" }}>
                    <Logo color='white'/>
                    <Box>
                        {menuConfigs.main.map((item, index) => (
                            <Button
                                key={index}
                                sx={{ color: "white" }}
                                component={Link}
                                to={item.path}
                            >
                                {item.display}
                            </Button>
                        ))}
                    </Box>
                </Stack>
            </Paper>
    )
}

export default Footer