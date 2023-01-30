import "../src/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./Notes";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
