import React, { useContext, useEffect, useLayoutEffect, useState } from "react";

import FunctionContext from "../../components/GlobalFunctions/FunctionContext";
import { DataGrid } from "@mui/x-data-grid";
import ScrollToTop from "../../components/GlobalFunctions/ScrollToTop";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import BasicModal from "./DetailModal";
import Delete from "./DeleteModal";
import Create from "./CreateModal";
import { styled } from "@mui/system";

function Admin() {
  const { reRender, updateMovieStatus } = useContext(FunctionContext);
  const [rows, setRows] = useState([]);

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

  const MyButton = styled(Button)({
    backgroundColor: "#fa2828",
    "&:hover": {
      backgroundColor: "#ff0000",
    },
  });

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <h1>

        </h1>
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
  );
}

export default Admin;
