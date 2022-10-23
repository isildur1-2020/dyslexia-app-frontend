import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";

export const Page = ({ clients, handleEdit, handleDelete }) => {
  const columns = [
    {
      width: 180,
      type: "string",
      field: "username",
      headerName: "Username",
      valueGetter: (params) => params?.row?.username?.toUpperCase(),
    },
    {
      width: 120,
      type: "string",
      field: "tests",
      align: "center",
      headerName: "Tests",
    },
    {
      type: "actions",
      field: "actions",
      headerName: "Actions",
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          label="Edit"
          icon={<EditIcon color="primary" />}
          onClick={() => handleEdit(params?.row?.username)}
        />,
        <GridActionsCellItem
          label="Delete"
          icon={<DeleteIcon color="primary" />}
          onClick={() => handleDelete(params?.row?.username)}
        />,
      ],
    },
  ];
  return (
    <Box width={600} height={400}>
      <DataGrid rows={clients ?? []} columns={columns} />
    </Box>
  );
};

Page.propTypes = {
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  clients: PropTypes.arrayOf(PropTypes.object),
};
