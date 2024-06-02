import React from "react";
import Album from "../components/gallery-album";
import Cards from "../components/cards";

const list = [
  {
    to: "/commercial01",
    cardText: Album.commercial.commercialText01,
    cardImg: Album.commercial.commercial01,
  },
  {
    to: "/commercial02",
    cardText: Album.commercial.commercialText02,
    cardImg: Album.commercial.commercial02,
  },
  {
    to: "/commercial03",
    cardText: Album.commercial.commercialText03,
    cardImg: Album.commercial.commercial03,
  },
  {
    to: "/commercial04",
    cardText: Album.commercial.commercialText04,
    cardImg: Album.commercial.commercial04,
  },
];

const EditPage = () => {
  return (
    <div className="galleryPage">
      <h1>Commercial</h1>
      <section className="threeCards">
        {list.map((item, index) => {
          return <Cards key={index} {...item} />;
        })}
      </section>
    </div>
  );
};

export default EditPage;
