import React from "react";
import { Routes, Route } from "react-router-dom";
import NavComponent from "./components/nav-component";
import Homepage from "./pages/homepage";
import DirectPage from "./pages/directPage";
import Direct01Page from "./pages/direct01Page";
import "./styles/style.css";

function App() {
  return (
    <div>
      <NavComponent />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/direct" element={<DirectPage />} />
        <Route path="/direct01" element={<Direct01Page />} />
        <Route path="/trailer" element={<Homepage />} />
        <Route path="/interview" element={<Homepage />} />
        <Route path="/behind_the_Scene" element={<Homepage />} />
        <Route path="/edit" element={<Homepage />} />
        <Route path="/contect" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
