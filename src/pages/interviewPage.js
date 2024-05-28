import React from "react";
import Album from "../components/gallery-album";
import Cards from "../components/cards";

const list = [
  {
    to: "/interview04",
    cardText: Album.interview.interviewCardText04,
    cardImg: Album.interview.interviewCard04,
  },
  {
    to: "/interview01",
    cardText: Album.interview.interviewCardText01,
    cardImg: Album.interview.interviewCard01,
  },
  {
    to: "/interview02",
    cardText: Album.interview.interviewCardText02,
    cardImg: Album.interview.interviewCard02,
  },
  {
    to: "/interview03",
    cardText: Album.interview.interviewCardText03,
    cardImg: Album.interview.interviewCard03,
  },
];

const InterviewPage = () => {
  return (
    <div className="galleryPage">
      <h1>Interview</h1>
      <section className="threeCards">
        {list.map((item) => {
          return <Cards key={item.to} {...item} />;
        })}
      </section>
    </div>
  );
};

export default InterviewPage;
