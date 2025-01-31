import React from "react";
import { Outlet } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer";

const RecordsLayout = () => {
  return (
    <PageContainer
      tabs={[
        ,
        { to: "", label: "Records" },
        { to: "archived", label: "Archived" },
      ]}
    >
      <Outlet />
    </PageContainer>
  );
};

export default RecordsLayout;
