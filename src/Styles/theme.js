import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

export const theme = createTheme({

    palette: {
        primary: {
            main: "#1c1c1c",
            light: "#f13e98",
            dark: "#2f6d51",
            contrastText: "#de1e1e",
        },
        secondary: {
            main: '#f50057',
        },
        divider: "#1c1c1c",
        background: {
            default: "#e6e6e6",
            paper: deepOrange[900],
        },
        text: {
            primary: "#1c1c1c",
            secondary: "#333333",
        },
    },
    typography: {
        h1: {
            fontFamily: "Quicksand",
            fontSize: "4rem",
            fontWeight: 300,
            lineHeight: 1.15,
            letterSpacing: "0.05em",
        },
        subtitle1: {
            fontFamily: "Open Sans",
            fontSize: "0.8rem",
            lineHeight: 1.3,
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#5a5959",
                    color: "#e6e6e6",
                }
            }
        }
    },
}

);
