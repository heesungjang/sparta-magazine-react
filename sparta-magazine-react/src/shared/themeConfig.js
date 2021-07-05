import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#778beb",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#e66767",
            contrastText: "#ffffff",
        },
    },
    typography: {
        fontFamily: "Noto+Serif+KR",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});
