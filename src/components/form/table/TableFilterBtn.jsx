import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import React from "react";

export default function TableFilterBtn() {
  return (
    <GridToolbarContainer>
      <GridToolbarFilterButton
        slotProps={{
          button: {
            style: {
              marginTop: "-3px",
              padding: "5.5px 20px",
              border: "1px solid ",
              borderColor: "primary.main",
            },
          },
        }}
      />
    </GridToolbarContainer>
  );
}
