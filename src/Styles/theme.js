import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

export const theme = createTheme({

    palette: {
        primary: {
            main: "#1c1c1c",
            light: "#5a5959",
            dark: "#cc5500",
            contrastText: "#1c1c1c",
        },
        secondary: {
            main: "#5a5959",
        },
        divider: "#1c1c1c",
        background: {
            default: "#e6e6e6",
            paper: "#fff",
        },
        text: {
            primary: "#1c1c1c",
            secondary: "#333333",
        },
        error: {
            main: "#EF5350",
            light: "#EF5350",
            dark: "#EF5350"
        }
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
            variants: [
                {
                    props: { variant: "outlined", color: "error" },
                    style: {
                        borderColor: "#EF5350"
                    }
                },
                {
                    props: { variant: "contained" },
                    style: {
                        backgroundColor: "#5a5959",
                        color: "#e6e6e6",
                    }
                },
                {
                    props: { variant: "outlined" },
                    style: {
                        "&:hover": {
                            backgroundColor: "#cc5500"
                        }
                    }
                }
            ],
        }
    },
}

);
