import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { DataGrid } from "@mui/x-data-grid";

export const Page = ({ clients, handleEdit, handleDelete }) => {
  const columns = [
    { field: "username", headerName: "Username", width: 150, type: "string" },
    { field: "tests", headerName: "Tests", width: 80, type: "string" },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        const { username } = params.row;
        return (
          <ButtonGroup variant="contained">
            <Button color="primary" onClick={() => handleEdit(username)}>
              EDIT
            </Button>
            <Button color="secondary" onClick={() => handleDelete(username)}>
              DELETE
            </Button>
          </ButtonGroup>
        );
      },
    },
  ];

  return (
    <Box width={500} height={400}>
      <DataGrid rows={clients ?? []} columns={columns} />
    </Box>
  );
};
