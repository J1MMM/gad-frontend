import React, { createContext, useRef } from "react";
import { useQuery } from "react-query";
import { fetchRecords, fetchArhivedRecords } from "../api/recordsAPI";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data: records } = useQuery("records", fetchRecords);
  const { data: archivedRecords } = useQuery(
    "archivedRecords",
    fetchArhivedRecords
  );
  return (
    <DataContext.Provider value={{ records, archivedRecords }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
