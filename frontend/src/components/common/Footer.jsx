import { Paper, Stack, Box, Button } from '@mui/material'
import Logo from './Logo'
import menuConfigs from "../../configs/menu.configs"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
            <Paper square={true} sx={{backgroundColor:'#798edc', backgroundImage: "unset", padding: "2rem" }}>
                <Stack
                    alignItems="center"
                    justifyContent="space-between"
                    direction={{ xs: "column", md: "row" }}
                    sx={{ height: "max-content" }}>
                    <Logo />
                    <Box>
                        {menuConfigs.main.map((item, index) => (
                            <Button
                                key={index}
                                sx={{ color: "inherit" }}
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