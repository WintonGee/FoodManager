import { createTheme } from "@mui/material/styles";

// Define color constants
const DEEP_FOREST_GREEN = "#4B5842";
const RUSTIC_ORANGE = "#D35400";
const LIGHT_BEIGE = "#F5F5DC";
const IVORY = "#FFFFF0";
const CHARCOAL = "#333333";
const SADDLE_BROWN = "#8B4513";
const GOLDENROD = "#DAA520";
const LIGHT_GREY = "#E0E0E0";
const DARK_GREY = "#616161";

const theme = createTheme({
  palette: {
    primary: {
      main: DEEP_FOREST_GREEN,
      contrastText: IVORY,
      dark: "#354B3A",
      light: "#6F8A67",
    },
    secondary: {
      main: RUSTIC_ORANGE,
      contrastText: IVORY,
      dark: "#A84300",
      light: "#FF7F33",
    },
    background: {
      default: LIGHT_BEIGE,
      paper: IVORY,
    },
    text: {
      primary: CHARCOAL,
      secondary: SADDLE_BROWN,
    },
    action: {
      hover: GOLDENROD,
      selected: GOLDENROD,
      disabled: DARK_GREY,
      disabledBackground: LIGHT_GREY,
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      color: CHARCOAL,
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      color: CHARCOAL,
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      color: CHARCOAL,
      fontSize: "1.75rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h4: {
      color: CHARCOAL,
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      color: CHARCOAL,
      fontSize: "1.25rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    h6: {
      color: CHARCOAL,
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body1: {
      color: SADDLE_BROWN,
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      color: CHARCOAL,
      fontSize: "0.875rem",
      lineHeight: 1.6,
    },
    button: {
      color: IVORY,
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: DEEP_FOREST_GREEN,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: DEEP_FOREST_GREEN,
          color: IVORY,
          "&:hover": {
            backgroundColor: GOLDENROD,
          },
        },
        contained: {
          backgroundColor: DEEP_FOREST_GREEN,
          color: IVORY,
        },
        outlined: {
          borderColor: DEEP_FOREST_GREEN,
          color: DEEP_FOREST_GREEN,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: IVORY,
          "&.Mui-selected": {
            color: DEEP_FOREST_GREEN,
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: DEEP_FOREST_GREEN,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: IVORY,
          color: CHARCOAL,
          padding: "16px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          body1: "p",
          body2: "p",
        },
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
