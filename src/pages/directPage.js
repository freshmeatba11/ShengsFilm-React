import React from "react";
import Album from "../components/gallery-album";
import Cards from "../components/cards";

const list = [
  {
    to: "/direct01",
    cardText: Album.direct.directCardText01,
    cardImg: Album.direct.directCard01,
  },
  {
    to: "/direct02",
    cardText: Album.direct.directCardText02,
    cardImg: Album.direct.directCard02,
  },
  {
    to: "/direct03",
    cardText: Album.direct.directCardText03,
    cardImg: Album.direct.directCard03,
  },
];
const DirectPage = () => {
  return (
    <div className="galleryPage">
      <h1>Direct</h1>
      <section className="threeCards">
        {list.map((item, index) => (
          <Cards key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default DirectPage;
