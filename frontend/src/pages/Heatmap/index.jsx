import React from "react";
import {
  GoogleMap,
  HeatmapLayer,
  Polygon,
  useJsApiLoader,
} from "@react-google-maps/api";
import { tiaongPolygonCoordinates } from "../../polygon";
import { Box, Stack, Typography } from "@mui/material";
import { PageContainer } from "../../components/layout/PageContainer";
import { BRGY_COOR, LIVESTOCK, TIAONG_BRGY } from "../../utils/constant";
import { setLocFormat } from "../../utils/helper";

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
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    libraries: GMAP_LIBRARIES,
  });

  const [map, setMap] = React.useState(null);

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
  console.log(Math.random());
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

  return isLoaded ? (
    <PageContainer
      titleText="Livestock Tiaong Heatmap"
      subText="Livestock Tiaong Heatmap"
    >
      <Stack width="100%" height="100%">
        <Box
          border="1px solid #1976D2"
          width="100%"
          height={"100%"}
          borderRadius={2}
          overflow="hidden"
        >
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
            }}
            center={GMAP_CENTER}
            zoom={12.5}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Polygon
              paths={tiaongPolygonCoordinates}
              options={{
                strokeColor: "#1976D2",
                strokeOpacity: 0.8,
                strokeWeight: 1,
                //   fillColor: "#FF0000",
                fillOpacity: 0,
              }}
            />
            <HeatmapLayer
              data={TIAONG_BRGY.map((brgy) => ({
                location: setLocFormat(
                  BRGY_COOR[brgy].lat,
                  BRGY_COOR[brgy].lng
                ),
                weight: Math.random(),
              }))}
              options={{
                radius: 20,
                opacity: 0.6,
              }}
            />
          </GoogleMap>
        </Box>

        <Stack
          direction="row"
          width="100%"
          justifyContent="center"
          gap={2}
          mt={2}
        >
          {LIVESTOCK.map((obj, i) => (
            <button key={i} variant="outlined" className="livestock-btn">
              <img style={{ maxWidth: 32 }} src={obj?.img} alt={obj.name} />
              <Typography variant="body2" fontWeight={600} mt={1}>
                {obj.name}
              </Typography>
              <Typography variant="body2" fontSize={10}>
                Total: {obj.count}
              </Typography>
            </button>
          ))}
        </Stack>
        <Stack
          direction="row"
          width="100%"
          justifyContent="center"
          gap={2}
          mt={2}
        >
          {LIVESTOCK.map((obj, i) => (
            <button key={i} variant="outlined" className="livestock-btn">
              <img style={{ maxWidth: 32 }} src={obj?.img} alt={obj.name} />
              <Typography variant="body2" fontWeight={600} mt={1}>
                {obj.name}
              </Typography>
              <Typography variant="body2" fontSize={10}>
                Total: {obj.count}
              </Typography>
            </button>
          ))}
        </Stack>
      </Stack>
    </PageContainer>
  ) : (
    <></>
  );
}

export default React.memo(Heatmap);
