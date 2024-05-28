import React from "react";
import Album from "../components/gallery-album";
import Cards from "../components/cards";

const list = [
  {
    to: "/trailer01",
    cardText: Album.trailer.trailerCardText01,
    cardImg: Album.trailer.trailerCard01,
  },
  {
    to: "/trailer02",
    cardText: Album.trailer.trailerCardText02,
    cardImg: Album.trailer.trailerCard02,
  },
  {
    to: "/trailer03",
    cardText: Album.trailer.trailerCardText03,
    cardImg: Album.trailer.trailerCard03,
  },
  {
    to: "/trailer04",
    cardText: Album.trailer.trailerCardText04,
    cardImg: Album.trailer.trailerCard04,
  },
];
const TrailerPage = () => {
  return (
    <div className="galleryPage">
      <h1>Trailer</h1>
      <section className="threeCards">
        {list.map((item, index) => (
          <Cards key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default TrailerPage;
