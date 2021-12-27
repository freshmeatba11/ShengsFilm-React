import React from "react";
import { Link } from "react-router-dom";
import Album from "../components/gallery-album";

const EditPage = () => {
  return (
    <div className="galleryPage">
      <h1>Edit</h1>
      <section className="threeCards">
        <div className="cards">
          <Link to={"/edit01"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.edit.editCardText01}
                alt=""
              />
            </div>
            <img src={Album.edit.editCard01} alt="" title="" />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/edit02"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.edit.editCardText02}
                alt=""
              />
            </div>
            <img src={Album.edit.editCard02} alt="" title="" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EditPage;
