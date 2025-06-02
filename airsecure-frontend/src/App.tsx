// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/home";

export default function App() {
  return (
    <main className="flex flex-col items-center">
      <NavBar />
      <Home />
      {/* <Router>
        <NavBar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router> */}
    </main>
  );
}
