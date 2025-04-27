import React, { createContext, useRef } from "react";
import { useQuery } from "react-query";
import { fetchRecords, fetchArhivedRecords } from "../api/recordsAPI";
import { fetchArhivedEmployees, fetchEmployees } from "../api/EmployeesAPI";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data: records } = useQuery("records", fetchRecords);
  const { data: archivedRecords } = useQuery(
    "archivedRecords",
    fetchArhivedRecords
  );

  const { data: employees } = useQuery("employees", fetchEmployees);
  const { data: archivedEmployees } = useQuery(
    "archivedEmployees",
    fetchArhivedEmployees
  );
  return (
    <DataContext.Provider
      value={{ records, archivedRecords, archivedEmployees, employees }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
