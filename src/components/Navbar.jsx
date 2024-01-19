import ProfilePic from "../assets/profile.jpg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, Tooltip } from "@mui/material";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[10vh] px-10 py-2 border-b-2 border-orange-200 border-l-white pr-4  ">
      <div className="flex gap-4">
        <div className="flex gap-3 justify-center items-center">
          <p className="font-bold text-lg text-[#FB9D18]">Name:</p>
          <p>Ibiyemi Pedro</p>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <p className="font-bold text-lg text-[#FB9D18]">Staff-Id:</p>
          <p>000001</p>
        </div>
      </div>
      <div className="h-12 flex items-center gap-6 cursor-pointer">
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
