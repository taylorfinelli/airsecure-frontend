import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
