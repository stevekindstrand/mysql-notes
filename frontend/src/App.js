import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Notes from "./Pages/Notes";
import Edit from "./Pages/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
