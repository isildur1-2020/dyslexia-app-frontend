import React, { useState, useEffect } from "react";
import { getUsername } from "../../../../utils/jwt";
import {
  deleteClient,
  updateTestClient,
  getClientsService,
} from "../../../../services/adminService";
import { Page } from "./page";

export const UserInfo = ({ reload, setReload }) => {
  const [clients, setClients] = useState([]);

  const handleEdit = async (username) => {
    const tests = prompt("New tests: ");
    if (tests === isNaN) return;
    const { message } = await updateTestClient(username, tests);
    alert(message);
    setReload(!reload);
  };

  const handleDelete = async (username) => {
    const { message } = await deleteClient(username);
    alert(message);
    setReload(!reload);
  };

  useEffect(() => {
    const getClients = async () => {
      const { clientsFound } = await getClientsService(getUsername());
      setClients(clientsFound);
    };
    getClients();
  }, [reload]);
  return (
    <Page
      clients={clients}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
