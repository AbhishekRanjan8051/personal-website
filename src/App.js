import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Project from "./components/ProjectList";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projectlist" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
