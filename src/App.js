import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchAppBar from "./components/SearchAppBar";
import Tour from "./pages/Tour";

function App() {
  return (
    <Router>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </Router>
  );
}

export default App;
