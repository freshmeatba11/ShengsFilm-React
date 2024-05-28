import React from "react";
import Album from "../components/gallery-album";
import Cards from "../components/cards";

const list = [
  {
    to: "/behind_the_scene04",
    cardText: Album.behindTheScene.behindTheSceneCardText04,
    cardImg: Album.behindTheScene.behindTheSceneCard04,
  },
  {
    to: "/behind_the_scene05",
    cardText: Album.behindTheScene.behindTheSceneCardText05,
    cardImg: Album.behindTheScene.behindTheSceneCard05,
  },
  {
    to: "/behind_the_scene01",
    cardText: Album.behindTheScene.behindTheSceneCardText01,
    cardImg: Album.behindTheScene.behindTheSceneCard01,
  },
  {
    to: "/behind_the_scene02",
    cardText: Album.behindTheScene.behindTheSceneCardText02,
    cardImg: Album.behindTheScene.behindTheSceneCard02,
  },
  {
    to: "/behind_the_scene03",
    cardText: Album.behindTheScene.behindTheSceneCardText03,
    cardImg: Album.behindTheScene.behindTheSceneCard03,
  },
];

const BehindTheScenePage = () => {
  return (
    <div className="galleryPage">
      <h1>Behind the Scene</h1>
      <section className="threeCards">
        {list.map((item, index) => (
          <Cards key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default BehindTheScenePage;
