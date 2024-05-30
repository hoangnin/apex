import { Box, Button, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, linearProgressClasses, styled } from "@mui/material"

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import UserSideBar from "../components/common/UserSideBar";

const usageHistory = [
  { date: '2024-05-01', description: 'Purchase at Store A', ID: 'ANK1039' },
  { date: '2024-04-20', description: 'Online Shopping', ID: 'OKHU291' },
  { date: '2024-04-15', description: 'Coffee Shop', ID: '1IDGOAJ2' },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: 'grey[200]',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}));

const Voucher = () => {
  return (
    <>

      <UserSideBar>
        <Box sx={{
          width: '100%',
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: '10px',
          bgcolor: 'white',
          padding: '10px',
          height: '100px',
          mr: '20px',
          mb: '20px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Added box shadow for enhancement
        }}>
          <AutoAwesomeIcon />
          <Box sx={{ width: '70%', marginX: '10px' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>Progress voucher 25/100 points</Typography>
            <BorderLinearProgress variant="determinate" value={25} />
            <Typography sx={{ fontWeight: 'lightbold', fontSize: '14px' }}>Let's claim your voucher</Typography>
          </Box>
          <ArrowForwardIosIcon />
          <Button variant="contained" sx={{ ml: '20px', bgcolor: '#2D89E5', color: 'white', fontSize: '12px', fontWeight: 'bold', padding: '10px', borderRadius: '10px' }}>Claim</Button>
        </Box>
        <Box sx={{
        }}>
          <Typography variant="h5" sx={{
            mb: 2, fontFamily: '"Nunito", sans-serif',
            fontSize: "1.4rem",
            fontWeight: "600",
          }}>Usage History</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Date</strong></TableCell>
                  <TableCell><strong>Description</strong></TableCell>
                  <TableCell><strong>VoucherID</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usageHistory.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.ID}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

      </UserSideBar>
    </>
  )
}

export default Voucher