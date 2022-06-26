import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Level from "./components/level";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Level />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
