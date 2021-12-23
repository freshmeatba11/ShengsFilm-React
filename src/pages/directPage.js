import React from "react";
import { Link } from "react-router-dom";
import Album from "../components/gallery-album";

const DirectPage = () => {
  return (
    <div className="galleryPage">
      <h1>Direct</h1>
      <section className="threeCards">
        <div className="cards">
          <Link to={"/direct01"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.direct.directCardText01}
                alt=""
              />
            </div>
            <img src={Album.direct.directCard01} alt="" title="" />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/direct02"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.direct.directCardText02}
                alt=""
              />
            </div>
            <img src={Album.direct.directCard02} alt="" title="" />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/direct03"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.direct.directCardText03}
                alt=""
              />
            </div>
            <img src={Album.direct.directCard03} alt="" title="" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DirectPage;
