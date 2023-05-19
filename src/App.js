import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import KirimEmail from "./KirimEmail/KirimEmail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kirim-email" element={<KirimEmail />} />
      </Routes>
    </Router>
  );
}

export default App;
