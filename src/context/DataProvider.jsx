import React, { createContext, useRef } from "react";
import { useQuery } from "react-query";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataContext;
