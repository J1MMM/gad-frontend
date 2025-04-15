import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";

const EmployeesLayout = () => {
  return (
    <PageContainer
      tabs={[
        { to: "", label: "Employees" },
        { to: "archived", label: "Archived" },
      ]}
    >
      <Outlet />
    </PageContainer>
  );
};

export default EmployeesLayout;
