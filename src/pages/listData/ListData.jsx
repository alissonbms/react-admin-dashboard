import { useContext } from "react";

//Styles
import "./listData.scss";

//Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

//Utilities
import { SidebarContext } from "../../contexts/SidebarContext";

const ListData = () => {
  const { openSidebar } = useContext(SidebarContext);

  return (
    <div className="list">
      {openSidebar ? <Sidebar /> : <></>}
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default ListData;
