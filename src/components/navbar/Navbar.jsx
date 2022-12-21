import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

//Styles
import "./navbar.scss";
import { SidebarContext } from "../../contexts/SidebarContext";
import { useContext } from "react";

const Navbar = () => {
  const { setOpenSidebar, openSidebar } = useContext(SidebarContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logoContainer">
          <MenuIcon
            className="menuIcon"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
          <span className="logo">Admin</span>
        </div>

        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <LogoutIcon className="icon" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
