import {
  Dashboard,
  LocalShipping,
  CreditCard,
  Store,
  InsertChart,
  Logout,
  NotificationsNone,
  Settings,
  LightMode,
  PsychologyOutlined,
  AccountCircleOutlined,
  SettingsSystemDaydreamOutlined,
  DarkMode,
  Person,
} from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useContext } from "react";

//Styles
import "./sidebar.scss";

//Utilities
import { DarkModeContext } from "../../contexts/DarkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    dispatch({ type: "DARK" });
    document.body.style.backgroundColor = "#111";
  };

  const handleLightMode = () => {
    dispatch({ type: "LIGHT" });
    document.body.style.backgroundColor = "#fff";
  };

  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <Dashboard className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <Store className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>

          <p className="title">Useful</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>

          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>

          <p className="title">User</p>
          <li>
            <AccountCircleOutlined className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottomSidebar">
        <div onClick={handleLightMode} className="colorOption">
          <span>LightMode</span>
          <LightMode className="icon" />
        </div>
        <div onClick={handleDarkMode} className="colorOption">
          <span>DarkMode</span>
          <DarkMode className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
