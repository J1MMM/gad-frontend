import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";

const RecordsLayout = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};

export default RecordsLayout;
