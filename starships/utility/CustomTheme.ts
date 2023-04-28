import { createTheme, Theme } from "@mui/material/styles";
import { PaletteColor, PaletteColorOptions } from "@mui/material/styles";
import { Colors } from "./Colors";

declare module "@mui/material/styles" {
  interface Palette {
    primary: PaletteColor;
  }
  interface PaletteOptions {
    primary?: PaletteColorOptions;
  }
}

// CustomTheme for mui primary button

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: Colors.StarWarsYellow,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-containedPrimary:hover": {
            backgroundColor: Colors.StarWarsYellowDarkest,
          },
          "&.MuiButton-outlinedPrimary:hover": {
            borderColor: Colors.StarWarsYellowDarker,
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
