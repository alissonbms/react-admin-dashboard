import {
  KeyboardArrowUp,
  PersonOutlined,
  AccountBalanceWalletOutlined,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  Inventory,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

//Styles
import "./widget.scss";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 200;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "users",
        isMoney: false,
        link: (
          <Link className="linkRouter" to={"/users"}>
            See all users
          </Link>
        ),
        icon: (
          <PersonOutlined
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "product":
      data = {
        title: "products",
        isMoney: false,
        link: (
          <Link className="linkRouter" to={"/products"}>
            See all products
          </Link>
        ),
        icon: (
          <Inventory
            className="icon"
            style={{
              color: "teal",
              backgroundColor: "rgba(0,128,128, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "orders",
        isMoney: false,
        link: <span className="link">See all orders</span>,
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "earnings",
        isMoney: true,
        link: <span className="link">See net earnings</span>,
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "balance",
        isMoney: true,
        link: <span className="link">See details</span>,
        icon: (
          <AccountBalanceWalletOutlined
            className="icon"
            style={{
              color: "purple",
              backgroundColor: "rgba(128, 0, 128, 0.2)",
            }}
          />
        ),
      };
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        {data.link}
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp /> {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
