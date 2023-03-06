import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import FormPage from "./Pages/FormPage/FormPage";
import * as Realm from "realm-web";
import { useState, useEffect, useMemo } from "react";
import { MONGO_APP_ID, MONGO_CLUSTER } from "./config/config";
import MongoContext from "./Contexts/MongoContext";
import {
  Box,
  createTheme,
  CssBaseline,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { amber, deepOrange, grey } from "@mui/material/colors";

function App() {
  const [client, setClient] = useState(null);
  const [user, setUser] = useState(null);
  const [app, setApp] = useState(new Realm.App({ id: MONGO_APP_ID }));

  const getDesignTokens = (mode) => ({
    mode,
    ...(mode === "light"
      ? {
          palette: {
            // palette values for light mode
            primary: {
              main: "#b8d4e3",
              light: "#f13e98",
              dark: "#2f6d51",
              contrastText: "#de1e1e",
            },
            // secondary: {
            //   main: "#eb9486",
            // },
            background: {
              paper: "#646869",
              default: "#131718",
            },
            warning: {
              main: "#e3d081",
            },
            error: {
              main: "#eb9486",
            },
            text: {
              primary: "#fff",
              secondary: "rgba(255,255,255,0,7)",
            },
          },
          components: {
            MuiInputBase: {
              styleOverrides: {
                input: {
                  color: "#fff",
                  "&::before": {
                    borderBottom: "1px solid #eb9486",
                  },
                },
              },
            },
          },
        }
      : {
          palette: {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          },
        }),
  });
  useEffect(() => {
    async function init() {
      if (!user) {
        setUser(
          app.currentUser
            ? app.currentUser
            : await app.logIn(Realm.Credentials.anonymous())
        );
      }

      if (!client) {
        setClient(app.currentUser.mongoClient(MONGO_CLUSTER));
      }
    }

    init();
  }, [app, client, user]);

  function renderComponent(Component, additionalProps = {}) {
    return (
      <MongoContext.Consumer>
        {(mongoContext) => (
          <Component mongoContext={mongoContext} {...additionalProps} />
        )}
      </MongoContext.Consumer>
    );
  }

  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <CssBaseline />
      <MongoContext.Provider
        value={{
          app,
          client,
          user,
          setClient,
          setUser,
          setApp,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>

        <Routes>
          <Route path="/" element={renderComponent(WelcomePage)} />
          <Route path="/form" element={renderComponent(FormPage)} />
        </Routes>
      </MongoContext.Provider>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
