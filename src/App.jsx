import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.jsx";
import Today from "./pages/Today.jsx";
import Archive from "./pages/Archive.jsx";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">🏠 Home</Link> | <Link to="/today">📅 Today</Link> |{" "}
        <Link to="/archive">🗃️ Archive</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </div>
  );
}
