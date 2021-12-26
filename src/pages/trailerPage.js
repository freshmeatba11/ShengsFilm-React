import React from "react";
import { Link } from "react-router-dom";
import Album from "../components/gallery-album";

const TrailerPage = () => {
  return (
    <div className="galleryPage">
      <h1>Trailer</h1>
      <section className="threeCards">
        <div className="cards">
          <Link to={"/trailer01"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.trailer.trailerCardText01}
                alt=""
              />
            </div>
            <img src={Album.trailer.trailerCard01} alt="" title="" />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/trailer03"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.trailer.trailerCardText03}
                alt=""
              />
            </div>
            <img src={Album.trailer.trailerCard03} alt="" title="" />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/trailer04"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.trailer.trailerCardText04}
                alt=""
              />
            </div>
            <img src={Album.trailer.trailerCard04} alt="" title="" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TrailerPage;
