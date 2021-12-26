import React from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/nav-component";
import Homepage from "./pages/homepage";
import DirectPage from "./pages/directPage";
import Direct01Page from "./pages/direct01Page";
import Direct02Page from "./pages/direct02Page";
import Direct03Page from "./pages/direct03Page";
import TrailerPage from "./pages/trailerPage";
import Trailer01Page from "./pages/trailer01Page";
import Trailer03Page from "./pages/trailer03Page";
import Trailer04Page from "./pages/trailer04Page";
import "./styles/style.css";

function App() {
  return (
    <div>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/direct" element={<DirectPage />} />
        <Route path="/direct01" element={<Direct01Page />} />
        <Route path="/direct02" element={<Direct02Page />} />
        <Route path="/direct03" element={<Direct03Page />} />
        <Route path="/trailer" element={<TrailerPage />} />
        <Route path="/trailer01" element={<Trailer01Page />} />
        <Route path="/trailer03" element={<Trailer03Page />} />
        <Route path="/trailer04" element={<Trailer04Page />} />
        <Route path="/interview" element={<Homepage />} />
        <Route path="/behind_the_Scene" element={<Homepage />} />
        <Route path="/edit" element={<Homepage />} />
        <Route path="/contect" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
