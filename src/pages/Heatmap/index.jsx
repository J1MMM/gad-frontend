import React from "react";
import { tiaongPolygonCoordinates } from "../../polygon";
import { Box, Stack, Typography } from "@mui/material";
import { PageContainer } from "../../components/layout/PageContainer";
import { setLocFormat } from "../../utils/helper";
import {
  GoogleMap,
  HeatmapLayer,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  BRGY_COOR,
  LIVESTOCK,
  MORTALITY,
  TIAONG_BRGY,
} from "../../utils/constant";
import useData from "../../hooks/useData";

const GMAP_CENTER = {
  lat: 13.954276367408628,
  lng: 121.33907651130149,
};

const ALLOWED_BOUNDS = {
  north: GMAP_CENTER.lat + 0.07, // Upper bound (slightly north of center)
  south: GMAP_CENTER.lat - 0.12, // Lower bound (slightly south of center)
  west: GMAP_CENTER.lng - 0.08, // Left bound (slightly west of center)
  east: GMAP_CENTER.lng + 0.065, // Right bound (slightly east of center)
};
const GMAP_LIBRARIES = ["visualization"];

function Heatmap() {
  return <></>;
}

export default React.memo(Heatmap);
