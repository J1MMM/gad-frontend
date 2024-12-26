import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";

const DashboardLayout = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};

export default DashboardLayout;
