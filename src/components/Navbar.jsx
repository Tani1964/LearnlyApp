import ProfilePic from "../assets/profile.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

const Navbar = () => {
  const {menu,setMenu} = useContext(MenuContext)
  
  return (
    <div className="text-[15px] md:text-base flex justify-between items-center h-[10vh] py-2 border-b-2 border-orange-200 border-l-white px-4  ">
      <div className="lg:hidden">

      {menu? null :<MenuIcon onClick={()=>{setMenu(true)}} className="flex lg:hidden"/>}
      </div>
      <div className="flex gap-2 md:justify-between">
        <Link
          to="/"
          className="flex font-bold text-xl items-center justify-center  cursor-pointer lg:hidden"
        >
          <img className="h-[50%]" src={Logo} alt="" />
          <p className="hidden md:flex">TeachMateAI</p>
        </Link>
        <div className="flex gap-3 justify-center items-center lg:pr-8">
          <p className="font-bold lg:text-lg text-[#FB9D18]  ">NAME:</p>
          <p>Ibiyemi Pedro</p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <p className="font-bold lg:text-lg text-[#FB9D18]">STAFF ID:</p>
          <p>0001</p>
        </div>
      </div>
      <div className="h-12 flex items-center gap-4 lg:gap-6 cursor-pointer">
        <Tooltip title="You have 4 new notifications">
          <Badge className="animate-pulse" badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </Tooltip>
        <img
          className="h-full rounded-full  cursor-pointer"
          src={ProfilePic}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
