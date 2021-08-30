import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "48em",
  lg: "64em",
  xl: "75em",
  xxl: "96em"
});

const theme = extendTheme({
  colors: {
    brand: {
      white: "#FFFFFF",
      eerieBlack: "#151515",
      raisinBlack: { 1: "#272A2E", 2: "#232732", 3: "#24262B" }
    }
  },
  breakpoints,
  styles: {
    global: props => ({
      body: {
        color: "brand.white",
        background: "white",
        "@media only print": {
          marginBottom: "0px",
          boxShadow: "none"
        }
      },
      a: {
        color: "brand.white"
      }
    })
  },
  fonts: {
    body: "Rancho, sans-serif",
    heading: "Rancho, sans-serif"
  },
  config: {
    initialColorMode: "dark"
  }
});

export default theme;
