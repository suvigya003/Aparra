import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
      primary: {
        main: "#1F365C", //for article accordion heading
        tag: "#bacff2",  // for current affairs' article's tag's bgColor
        hrule: "#1F365C",  // for horizontal rule in article
        light: "#2196f3",
        dark: "#424242",
      },
      secondary: {
        main: "#1F365C", // theme color blue of Iqra ias page
      },
      text: {
        main: "#000", 
        light: "#d2d2d2", 
        dark: "#6C757D",
        default: "#fff",
      },
      background: {
        default: "#fff", 
        main: "#ae1555", 
        light: "#faf6f2",
      },
      error: {
        main: "#E71C24", 
        bg: "#ffebeb",
      },
      warning: {
        main: "#e5a200", 
        bg: "#fdede1",
      },
      cancel: {
        main: "#8a8d93",
        dark: "#e03546",
        bg: "#fff",
      },
      active: {
        main: "#8E95A7", //for articles page date
        bg: "#eaf5ea"
      },
      star: {
        main: "#FFA500", // for star rtaing in articles of current affairs
      },
    },
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontSize: 15,
    //   fontWeightLight: 300,
    //   fontWeightRegular: 400,
    //   fontWeightMedium: 500,
    //   fontWeightDark: 600,
    //   fontWeightBold: 700,
    //   fontWeightBolder: 800,
    //   fontWeightBoldest: 900,
      h1: {
        fontSize: "1.1em",    // navbar
        fontWeight: 500,
        // lineHeight: "50px",
        // margin: "0 0 0 0",
      },
      h2: {
        fontSize: "3.5em", //banner title
        fontWeight: 600,
        textShadow: '-1px 1px 10px rgba(0, 0, 0, 0.50)',
        // textShadowColor:'secondary'
        // lineHeight: "30px",
        // margin: "0 0 0 0",
      },
      h3: {
        fontSize: "1.2em",
        fontWeight: 400,
        // lineHeight: "28px",
        // margin: "0 0 0 0",
      },
      h4: {
        fontSize: "1em",
        fontWeight: 500,
        // lineHeight: "32px",
        // margin: "0 0 0 0",
      },
      h5: {
        fontSize: "1.2em",
        fontWeight: 600,
        // lineHeight: "24px",
        // margin: "0 0 0 0",
      },
      h6: {
          fontSize: "1.5em",
          fontWeight: 700,
          // lineHeight: "28px",
          // margin: "0 0 0 0",
      },
      h7: {
          fontSize: "1.3em",
          fontWeight: 600,
          // lineHeight: "16px",
          // margin: "0 0 0 0",
      },
      h8: {
        fontSize: "1em",
        fontWeight: 600,
        // lineHeight: "16px",
        // margin: "0 0 0 0",
    },
    subtitle1: {
            fontSize: "0.9em",
            fontWeight: 600,
            // lineHeight: "16px",
            // margin: "0 0 0 0",
        },
        subtitle2: {
          fontSize: "1em",
          fontWeight: 400,
          // lineHeight: "16px",
          // margin: "0 0 0 0",
      },
        body1: {
          fontSize: "1.2em",
          fontWeight: 300,
          // lineHeight: "16px",
          // margin: "0 0 0 0",
      },
        body2: {
          fontSize: "0.9em",
          fontWeight: 300,
          // lineHeight: "16px",
          // margin: "0 0 0 0",
      },
    },
    // components: {
    //   MuiAppBar: {
    //     styleOverrides: {
    //       colorPrimary: {
    //         backgroundColor: "#ffffff",
    //       },
    //     },
    //   },
    //   MuiListItemIcon: {
    //     styleOverrides: {
    //       root: {
    //         minWidth: "0px",
    //         marginRight: "5px",
    //       },
    //     },
    //   },
    //   MuiListItemText: {
    //     styleOverrides: {
    //       primary: {
    //         color: "#544f5a",
    //         fontSize: "16px",
    //       },
    //     },
    //   },
    // },
  });