import { useTheme, Theme, Breakpoint } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Helpers = {
  /**
   *
   * @param direction "down" | "up"
   * @param category "xs" | "sm" | "md" | "lg" | "xl"
   * @return media query to detect window size
   */
  useMediaQuery: (direction: "down" | "up", category: Breakpoint) => {
    if (!direction || !category) {
      throw Error("parameters are missing...");
    }
    const theme = useTheme<Theme>();
    return useMediaQuery(theme.breakpoints[direction](category));
  },
};

export default Helpers;
