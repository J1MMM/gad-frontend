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
  const { livestockData, totalLivestock } = useData();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    libraries: GMAP_LIBRARIES,
  });

  const [map, setMap] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState("");
  const [activeLivestock, setActiveLivestock] = React.useState("");

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(12.5);
    map.setCenter(GMAP_CENTER);

    // Optionally restrict the draggable area
    map.setOptions({
      restriction: {
        latLngBounds: ALLOWED_BOUNDS,
        strictBounds: false, // If true, prevents dragging outside bounds
      },
    });

    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  // React.useEffect(() => {
  //   if (map) {
  //     const marker = new window.google.maps.Marker({
  //       position: center,
  //       map: map,
  //       title: "Hello World!",
  //     });
  //   }
  // }, [map]);

  return <></>;
}

export default React.memo(Heatmap);
