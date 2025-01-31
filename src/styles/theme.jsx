import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      // main: "#266A2D",
      main: "rgb(7,95,200)",
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
