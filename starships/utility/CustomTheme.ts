import { createTheme, Theme } from "@mui/material/styles";
import { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    primary: PaletteColor;
  }
  interface PaletteOptions {
    primary?: PaletteColorOptions;
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#E4B853",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-containedPrimary:hover": {
            backgroundColor: "#C6933B",
          },
          "&.MuiButton-outlinedPrimary:hover": {
            borderColor: "#D7A447",
            borderWidth: "2px",
          },
          "&.MuiButton-outlinedPrimary": {
            borderWidth: "2px",
          },
        },
      },
    },
  },
});

export default theme;
