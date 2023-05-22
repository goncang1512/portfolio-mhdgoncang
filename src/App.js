import "./App.css";
import KirimEmail from "./KirimEmail/KirimEmail";
import HomePage from "./homePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
