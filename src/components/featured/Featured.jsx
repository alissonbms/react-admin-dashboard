import {
  MoreVert,
  KeyboardArrowDown,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";

//Sytles
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={`70%`} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$450</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Our Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$14.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmount">$3.0k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$15.0k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
