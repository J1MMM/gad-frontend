import React, { createContext, useRef } from "react";
import { useQuery } from "react-query";
import { fetchRecords } from "../api/recordsAPI";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const { data: records } = useQuery("records", fetchRecords);
  return (
    <DataContext.Provider value={{ records }}>{children}</DataContext.Provider>
  );
};

export default DataContext;
