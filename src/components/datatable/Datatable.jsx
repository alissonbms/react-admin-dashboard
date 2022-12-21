import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

//Styles
import "./datatable.scss";

//Utilities
import { userColumns, userRows } from "../../datatableSource";

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 300,
    sortable: false,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
          <div className="deleteButton">Delete</div>
        </div>
      );
    },
  },
];

const Datatable = () => {
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <h1>Users</h1>
        <Link to="/users/new" className="addButton">
          Add new
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
