import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import FormPage from "./Pages/FormPage/FormPage";
import * as Realm from "realm-web";
import { useState, useEffect } from "react";
import { MONGO_APP_ID, MONGO_CLUSTER } from "./config/config";
import MongoContext from "./Contexts/MongoContext";

function App() {
  const [client, setClient] = useState(null);
  const [user, setUser] = useState(null);
  const [app, setApp] = useState(new Realm.App({ id: MONGO_APP_ID }));

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
  return (
    <div className="App">
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
        <Routes>
          <Route path="/" element={renderComponent(WelcomePage)} />
          <Route path="/form" element={renderComponent(FormPage)} />
        </Routes>
      </MongoContext.Provider>
    </div>
  );
}

export default App;
