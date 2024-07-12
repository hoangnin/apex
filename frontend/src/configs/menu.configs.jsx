import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

const main = [
  {
    display: "Home",
    path: "/",
    state: "home",
    icon: <HomeOutlinedIcon/>
  },
  {
    display: "Blog",
    path: "/blog",
    state: "blog",
 

    icon: <EditNoteOutlinedIcon/>
  },
  {
    display: "History",
    path: "/vouchers",
    state: "voucher",
    role: "CUSTOMER",
    icon: <HistoryOutlinedIcon/>
  },
  // {
  //   display: "Add Post",
  //   path: "/post",
  //   state: "post",
  //   role: [ "RESTAURANT"], 

  //   icon: <EditNoteOutlinedIcon/>
  // },
]

const user = [
  {
    display: "Update Profile",
    path: "/profile",
    state: "profile",
    icon: <PersonOutlineOutlinedIcon/>
  },
  {
    display: "Voucher",
    path: "/vouchers",
    state: "voucher",
    role: "CUSTOMER",
    icon: <DiscountOutlinedIcon/>
  },
  {
    display: "Change Password",
    path: "/password-change",
    state: "password.change",
    icon: <LockResetOutlinedIcon/>
  }
];

const  menuConfigs ={main,user};

export default menuConfigs;
