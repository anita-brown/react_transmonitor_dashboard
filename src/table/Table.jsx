import { Box, Typography, IconButton } from "@mui/material";
import React from "react";
import { DataGrid, GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import { tableData as data } from "../data/data";
import { columns } from "./Column";
function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton
        componentsProps={{
          button: {
            startIcon: <IconButton></IconButton>,
          },
        }}
      />
    </GridToolbarContainer>
  );
}
const Table = () => {
  return (
    <Box padding="2rem">
      <Typography>Payments</Typography>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#414042",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#EAEEF0",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#FFFFFF",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
          },
          "& .MuiCheckbox-root": {
            color: "#414042",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "#414042",
          },
        }}
      >
        <DataGrid rows={data} columns={columns} components={{ Toolbar: CustomToolbar }} />
      </Box>
    </Box>
  );
};

export default Table;
