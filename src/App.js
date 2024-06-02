import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
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
import Interview04Page from "./pages/interview04Page";
import BehindTheScenePage from "./pages/behindTheScenePage";
import BehindTheScene01Page from "./pages/behindTheScene01Page";
import BehindTheScene02Page from "./pages/behindTheScene02Page";
import BehindTheScene03Page from "./pages/behindTheScene03Page";
import BehindTheScene04Page from "./pages/behindTheScene04Page";
import BehindTheScene05Page from "./pages/behindTheScene05Page";
import EditPage from "./pages/editPage";
import Edit01Page from "./pages/edit01Page";
import Edit02Page from "./pages/edit02Page";
import CommercialPage from "./pages/commercialPage";
import Commercial01Page from "./pages/commercial01Page";
import Commercial02Page from "./pages/commercial02Page";
import Commercial03Page from "./pages/commercial03Page";
import Commercial04Page from "./pages/commercial04Page";
import ContactPage from "./pages/contactPage";
import "./styles/style.css";

function App() {
  let location = useLocation();
  return (
    <div className="app">
      <SwitchTransition>
        <CSSTransition
          classNames="nav"
          key={location.pathname}
          timeout={1000}
          unmountOnExit={true}
          appear
        >
          <NavComponent />
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition>
        <CSSTransition
          classNames="fade"
          key={location.pathname}
          timeout={1000}
          unmountOnExit={true}
          appear
        >
          <Routes location={location}>
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
            <Route path="/interview04" element={<Interview04Page />} />
            <Route path="/behind_the_scene" element={<BehindTheScenePage />} />
            <Route
              path="/behind_the_scene01"
              element={<BehindTheScene01Page />}
            />
            <Route
              path="/behind_the_scene02"
              element={<BehindTheScene02Page />}
            />
            <Route
              path="/behind_the_scene03"
              element={<BehindTheScene03Page />}
            />
            <Route
              path="/behind_the_scene04"
              element={<BehindTheScene04Page />}
            />
            <Route
              path="/behind_the_scene05"
              element={<BehindTheScene05Page />}
            />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/edit01" element={<Edit01Page />} />
            <Route path="/edit02" element={<Edit02Page />} />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/commercial01" element={<Commercial01Page />} />
            <Route path="/commercial02" element={<Commercial02Page />} />
            <Route path="/commercial03" element={<Commercial03Page />} />
            <Route path="/commercial04" element={<Commercial04Page />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
