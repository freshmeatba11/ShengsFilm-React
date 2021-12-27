import React from "react";
import { Link } from "react-router-dom";
import Album from "../components/gallery-album";

const BehindTheScenePage = () => {
  return (
    <div className="galleryPage">
      <h1>Behind the Scene</h1>
      <section className="threeCards">
        <div className="cards">
          <Link to={"/behind_the_scene01"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.behindTheScene.behindTheSceneCardText01}
                alt=""
              />
            </div>
            <img
              src={Album.behindTheScene.behindTheSceneCard01}
              alt=""
              title=""
            />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/behind_the_scene02"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.behindTheScene.behindTheSceneCardText02}
                alt=""
              />
            </div>
            <img
              src={Album.behindTheScene.behindTheSceneCard02}
              alt=""
              title=""
            />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/behind_the_scene03"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.behindTheScene.behindTheSceneCardText03}
                alt=""
              />
            </div>
            <img
              src={Album.behindTheScene.behindTheSceneCard03}
              alt=""
              title=""
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BehindTheScenePage;
