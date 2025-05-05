import React, { createContext, useRef, useState } from "react";
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

  const [analyticsCards, setAnalyticsCards] = useState({});
  const [pwdAnalytics, setPwdAnalytics] = useState({});
  const [analytics, setAnalytics] = useState({});
  const [residecyAnalytics, setResidencyAnalytics] = useState({});

  return (
    <DataContext.Provider
      value={{
        records,
        archivedRecords,
        archivedEmployees,
        employees,
        analyticsCards,
        setAnalyticsCards,
        pwdAnalytics,
        setPwdAnalytics,
        analytics,
        setAnalytics,
        residecyAnalytics,
        setResidencyAnalytics,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
