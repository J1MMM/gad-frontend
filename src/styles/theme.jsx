import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    info: {
      main: "#FFF",
    },
    primary: {
      // main: "#266A2D",
      main: "#6200E8",
    },
  },

  // components: {
  //   MuiTextField: {
  //     defaultProps: {
  //       margin: "dense", // Apply this to all variants if needed
  //       fullWidth: true, // Apply this to all variants if needed
  //     },
  //   },
  // },
});

export default theme;
