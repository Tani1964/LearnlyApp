import Logo from "../assets/Logo.png";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ReviewsRoundedIcon from "@mui/icons-material/ReviewsRounded";
import Groups3RoundedIcon from "@mui/icons-material/Groups3Rounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Badge, Tooltip } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="w-2/4 hidden lg:flex lg:flex-col lg:w-1/4 pr-4 px-4 ">
      {/* open */}
      <div className="h-screen flex  flex-col justify-between pb-10">
        <div className="flex flex-col gap-10">
          <div className="flex font-bold text-xl items-center justify-center  cursor-pointer">
            <img className="h-[50%]" src={Logo} alt="" />
            <p>TeachMateAI</p>
          </div>
          <div className="text-[#FB9D18]">
            <ul className="flex flex-col">
              <li className="pl-5 hover:bg-gradient-to-r hover:from-[#FB9D18] hover:text-white p-2 rounded-r-full flex gap-4 transition hover:transition-color duration-150 ease-in-out hover:duration-300 cursor-pointer">
                <HomeRoundedIcon />
                <p>Dashboard</p>
              </li>
              <li className="pl-5 hover:bg-gradient-to-r hover:from-[#FB9D18] hover:text-white p-2 rounded-r-full flex gap-4 transition hover:transition-color duration-150 ease-in-out hover:duration-300 cursor-pointer">
                <Tooltip title="You have 4 new messages">
                  <Badge
                    className="animate-pulse"
                    badgeContent={4}
                    color="secondary"
                  >
                    <EmailRoundedIcon />
                  </Badge>
                </Tooltip>
                <p>Messages</p>
              </li>
              <li className="pl-5 hover:bg-gradient-to-r hover:from-[#FB9D18] hover:text-white p-2 rounded-r-full flex gap-4 transition hover:transition-color duration-150 ease-in-out hover:duration-300 cursor-pointer">
                <Tooltip title="You have 4 new reviews">
                  <Badge className="animate-pulse" badgeContent={4} color="secondary">
                    <ReviewsRoundedIcon />
                  </Badge>
                </Tooltip>
                <p>Reviews</p>
              </li>
              <li className="pl-5 hover:bg-gradient-to-r hover:from-[#FB9D18] hover:text-white p-2 rounded-r-full flex gap-4 transition hover:transition-color duration-150 ease-in-out hover:duration-300 cursor-pointer">
                <Groups3RoundedIcon />
                <p>Team Members</p>
              </li>
              <li className="pl-5 hover:bg-gradient-to-r hover:from-[#FB9D18]  hover:text-white p-2 rounded-r-full flex gap-4 transition hover:transition-color duration-150 ease-in-out hover:duration-300 cursor-pointer">
                <PrecisionManufacturingRoundedIcon />
                <p>Productivity Tracker</p>
              </li>
              <li className="pl-5 hover:bg-gradient-to-r hover:from-[#FB9D18] hover:text-white p-2 rounded-r-full flex gap-4 transition hover:transition-color duration-150 ease-in-out hover:duration-300 cursor-pointer">
                <SettingsRoundedIcon />
                <p>Settings</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="hidden px-10 py-2  bg-gradient-to-r text-white from-[#FB9D18] to-orange-200 hover:from-orange-200 hover:to-orange-400  cursor-pointer">
            Sign In
          </div>
          <div className=" px-8 py-2  bg-gradient-to-r text-white from-orange-200 to-[#FB9D18] hover:from-[#FB9D18] hover:to-orange-200  cursor-pointer">
            Sign Out
          </div>
          <div>
            Don't have an account?{" "}
            <a
              className="text-blue-400 hover:underline  cursor-pointer"
              href=""
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="text-center  cursor-pointer">Theme</div>
      </div>
    </div>
  );
};

export default Sidebar;
