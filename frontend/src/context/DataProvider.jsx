import React, { createContext } from "react";
import { useQuery } from "react-query";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // const {
  //   data: assessorData,
  //   isLoading: isAssessorLoading,
  //   isError: isAssessorError,
  // } = useQuery("assessorData", () => {});

  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataContext;
