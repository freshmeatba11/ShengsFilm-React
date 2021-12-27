import React from "react";
import { Link } from "react-router-dom";
import Album from "../components/gallery-album";

const InterviewPage = () => {
  return (
    <div className="galleryPage">
      <h1>Interview</h1>
      <section className="threeCards">
        <div className="cards">
          <Link to={"/interview01"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.interview.interviewCardText01}
                alt=""
              />
            </div>
            <img src={Album.interview.interviewCard01} alt="" title="" />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/interview02"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.interview.interviewCardText02}
                alt=""
              />
            </div>
            <img src={Album.interview.interviewCard02} alt="" title="" />
          </Link>
        </div>
        <div className="cards">
          <Link to={"/interview03"} className="link">
            <div className="mobileFilter">
              <img
                className="cardInfo"
                src={Album.interview.interviewCardText03}
                alt=""
              />
            </div>
            <img src={Album.interview.interviewCard03} alt="" title="" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InterviewPage;
