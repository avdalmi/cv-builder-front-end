import { Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import FormPage from "./Pages/FormPage/FormPage";
import FormPage2 from "./Pages/FormPage/FormPage2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        {/* <Route path="/form" element={<FormPage />} /> */}
        <Route path="/form" element={<FormPage2 />} />
      </Routes>
    </div>
  );
}

export default App;
