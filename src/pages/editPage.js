import React from "react";
import Album from "../components/gallery-album";
import Cards from "../components/cards";

const list = [
  {
    to: "/edit01",
    cardText: Album.edit.editCardText01,
    cardImg: Album.edit.editCard01,
  },
  {
    to: "/edit02",
    cardText: Album.edit.editCardText02,
    cardImg: Album.edit.editCard02,
  },
];
const EditPage = () => {
  return (
    <div className="galleryPage">
      <h1>Edit</h1>
      <section className="threeCards">
        {list.map((item, index) => (
          <Cards key={index} {...item} />
        ))}
      </section>
    </div>
  );
};

export default EditPage;
