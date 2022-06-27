import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./components/level";
import Sidebar from "./components/Sidebar";
import University from "./components/University";
import Boards from "./components/Boards";
import Faculties from "./components/Faculties";
import Programs from "./components/Programs";
import Country from "./components/country";
import Province from "./components/Province";
import District from "./components/District";
import LocalBodyType from "./components/LocalBodyType";
import LocalBody from "./components/LocalBody";
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" />
          <Route path="/level" element={<Level />} />
          <Route path="/university" element={<University />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/country" element={<Country />} />
          <Route path="/province" element={<Province />} />
          <Route path="/district" element={<District />} />
          <Route path="/localBodyType" element={<LocalBodyType />} />
          <Route path="/localBody" element={<LocalBody />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
