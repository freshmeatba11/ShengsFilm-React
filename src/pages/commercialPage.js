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
  {
    to: "/commercial05",
    cardText: Album.commercial.commercialText05,
    cardImg: Album.commercial.commercial05,
  },
];

const CommercialPage = () => {
  return (
    <div className="galleryPage">
      <h1>Commercial</h1>
      <section className="threeCards">
        {list.map((item, index) => {
          if (index === 4) {
            // 2024年6月17日以後才會顯示
            if (new Date() > new Date("2024-06-17")) {
              return <Cards key={index} {...item} />;
            }
            return null;
          }
          return <Cards key={index} {...item} />;
        })}
      </section>
    </div>
  );
};

export default CommercialPage;
