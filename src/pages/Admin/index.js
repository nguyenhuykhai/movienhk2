import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FunctionContext from "../../components/GlobalFunctions/FunctionContext";
import ScrollToTop from "../../components/GlobalFunctions/ScrollToTop";

//IMPORT MUI
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import BasicModal from "./DetailModal";
import Tooltip from "@mui/material/Tooltip";
import Delete from "./DeleteModal";
import Create from "./CreateModal";
import { styled } from "@mui/system";

function Admin() {
  const { reRender, updateMovieStatus } = useContext(FunctionContext);
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  //CHECK ISADMIN: IF NOT ISADMIN, THE APPICATION WILL RETURN TO HOMEPAGE
  const handleCheckAccountRole = () => {
    const accountRole = localStorage.getItem("isAdmin"); // Replace with your actual function to retrieve the account role
    // Navigate based on the account role
    if (!accountRole) {
      navigate("/");
    }
  };
  handleCheckAccountRole();

  // UPDATE ROWS TWO WAY BINDING
  const updateRows = (id, newStatus) => {
    const data = rows.map((row) => {
      if (row.id === id) {
        return { ...row, status: newStatus };
      }
      return row;
    });
    setRows(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://649152be2f2c7ee6c2c804cb.mockapi.io/movienhk/v1/movie"
      );
      const responseJSON = await response.json();
      setRows(responseJSON);
    };
    fetchData();
  }, [reRender]);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "year", headerName: "Year", width: 100 },
    { field: "content", headerName: "Content", width: 200 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "country", headerName: "Country", width: 150 },
    {
      field: "display",
      headerName: "Display",
      sortable: false,
      // width: 100,
      renderCell: (params) => (
        <Switch
          checked={params.row.status}
          onChange={() => {
            updateMovieStatus(params.row.id, !params.row.status);
            updateRows(params.row.id, !params.row.status);
          }}
        />
      ),
    },
    {
      field: "update",
      headerName: "Update",
      sortable: false,
      renderCell: (params) => <BasicModal value={params.row} />,
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      renderCell: (params) => <Delete value={params.row} />,
    },
  ];

  return (
    <>
      <ScrollToTop />
      {localStorage.getItem("isAdmin") && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <h1></h1>
            <Create />
          </div>

          <DataGrid
            autoHeight
            sx={{ backgroundColor: "white" }}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 7 },
              },
            }}
            pageSizeOptions={[7, 10]}
          />
        </>
      )}
    </>
  );
}

const MyButton = styled(Button)({
  backgroundColor: "#fa2828",
  "&:hover": {
    backgroundColor: "#ff0000",
  },
});

export default Admin;
