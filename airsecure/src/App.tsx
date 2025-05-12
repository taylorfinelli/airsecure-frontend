import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import ScheduleAndEstimate from "./pages/schedule-and-estimate";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-center bg-slate-100 min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/duct-cleaning" element={<Home />} />
          <Route path="/schedule" element={<ScheduleAndEstimate />} />
          <Route path="/estimate" element={<ScheduleAndEstimate />} />
        </Routes>
      </div>
    </Router>
  );
}
