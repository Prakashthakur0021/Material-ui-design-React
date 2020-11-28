import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { red, lightGreen, grey } from "@material-ui/core/colors";

// Create a theme instance.
const breakpoints = createBreakpoints({});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5FCAAF",
    },
    secondary: {
      main: "#fff",
    },
    lightGreen: {
      main: lightGreen,
    },
    gray: {
      main: grey,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  myFont: {
    primary: "Dancing Script",
    secondary: "Brawler",
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: "6rem",
        fontFamily: "Dancing Script",
        [breakpoints.down("md")]: {
          fontSize: "5rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "4rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "3rem",
        },
      },
      h2: {
        fontSize: "4rem",
        fontFamily: "Dancing Script",
        [breakpoints.down("md")]: {
          fontSize: "3.5rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "3rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "2rem",
        },
      },
      h3: {
        fontSize: "3rem",
        fontFamily: "Brawler",
        [breakpoints.down("md")]: {
          fontSize: "2.5rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "2.1rem",
        },
        [breakpoints.down("xs")]: {
          fontSize: "1.8rem",
        },
      },
      h4: {
        fontSize: "2.2rem",
        fontFamily: "Brawler",
        [breakpoints.down("md")]: {
          fontSize: "1.7rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1.4rem",
        },
      },
      h5: {
        fontSize: "1.5rem",
        fontFamily: "Brawler",
        [breakpoints.down("md")]: {
          fontSize: "1.4rem",
        },
        [breakpoints.down("sm")]: {
          fontSize: "1.2",
        },
      },
    },
  },
});

export default theme;
