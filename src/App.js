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
import InterviewPage from "./pages/interviewPage";
import Interview01Page from "./pages/interview01Page";
import Interview02Page from "./pages/interview02Page";
import Interview03Page from "./pages/interview03Page";
import BehindTheScenePage from "./pages/behindTheScenePage";
import BehindTheScene01Page from "./pages/behindTheScene01Page";
import BehindTheScene02Page from "./pages/behindTheScene02Page";
import BehindTheScene03Page from "./pages/behindTheScene03Page";
import EditPage from "./pages/editPage";
import Edit01Page from "./pages/edit01Page";
import Edit02Page from "./pages/edit02Page";
import ContectPage from "./pages/contectPage";
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
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/interview01" element={<Interview01Page />} />
        <Route path="/interview02" element={<Interview02Page />} />
        <Route path="/interview03" element={<Interview03Page />} />
        <Route path="/behind_the_scene" element={<BehindTheScenePage />} />
        <Route path="/behind_the_scene01" element={<BehindTheScene01Page />} />
        <Route path="/behind_the_scene02" element={<BehindTheScene02Page />} />
        <Route path="/behind_the_scene03" element={<BehindTheScene03Page />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/edit01" element={<Edit01Page />} />
        <Route path="/edit02" element={<Edit02Page />} />
        <Route path="/contect" element={<ContectPage />} />
      </Routes>
    </div>
  );
}

export default App;
