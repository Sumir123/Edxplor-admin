import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./components/level";
import Sidebar from "./components/Sidebar";
import University from "./components/University";
import Boards from "./components/Boards";
import Faculties from "./components/Faculties";
import Programs from "./components/Programs";
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/"  />
          <Route path="/level" element={<Level />} />
          <Route path="/university" element={<University />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
