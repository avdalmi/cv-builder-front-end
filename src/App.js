import { Route, Routes } from 'react-router-dom';
import './App.css';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import FormPage from './Pages/FormPage/FormPage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/form" element={<FormPage />} />
     </Routes>
    </div>
  );
}

export default App;
