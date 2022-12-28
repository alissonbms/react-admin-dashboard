import {
  DarkModeOutlined,
  Logout,
  WbSunnyOutlined,
  CloseSharp,
  MenuOpenSharp,
} from "@mui/icons-material";

import { useContext } from "react";

//Styles
import "./navbar.scss";

//Utilities
import { SidebarContext } from "../../contexts/SidebarContext";
import { DarkModeContext } from "../../contexts/DarkModeContext";

const Navbar = () => {
  const { setOpenSidebar, openSidebar } = useContext(SidebarContext);
  const { dispatch, darkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    dispatch({ type: "DARK" });
    document.body.style.backgroundColor = "#111";
  };

  const handleLightMode = () => {
    dispatch({ type: "LIGHT" });
    document.body.style.backgroundColor = "#fff";
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logoContainer">
          {openSidebar ? (
            <CloseSharp
              className="menuIcon"
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          ) : (
            <MenuOpenSharp
              className="menuIcon"
              onClick={() => setOpenSidebar(!openSidebar)}
            />
          )}
          <span className="logo">Admin</span>
        </div>

        <div className="items">
          <div className="item">
            {darkMode ? (
              <WbSunnyOutlined className="icon" onClick={handleLightMode} />
            ) : (
              <DarkModeOutlined className="icon" onClick={handleDarkMode} />
            )}
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
          <div className="item">
            <Logout className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
