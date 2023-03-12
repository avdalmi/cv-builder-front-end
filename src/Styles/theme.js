import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
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
        },
        h4: {
            fontFamily: "Roboto",
            fontSize: "1.5rem",
            marginTop: "-15px",
            textAlign: "center",
        }
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "outlined", color: "error" },
                    style: {
                        borderColor: "#EF5350",
                        "&:hover": {
                            color: "#e6e6e6"
                        }
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
                            backgroundColor: "#cc5500",
                            border: "1px solid #cc5500",
                            color: "#e6e6e6"
                        }
                    }
                }
            ],
        }
    },
}

);
