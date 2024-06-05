import React from "react";
import { Link } from "react-router-dom";
import useRWD from "../useRWD";
import ImgSliderComponent from "../components/img-slider-component";
import CoverPhoto01 from "../assets/images/imgSlider/CoverPhoto01.png";
import CoverPhoto02 from "../assets/images/imgSlider/CoverPhoto02.png";
import CoverPhoto03 from "../assets/images/imgSlider/CoverPhoto03.png";
import CoverPhoto04 from "../assets/images/imgSlider/CoverPhoto04.png";
import CoverPhoto05 from "../assets/images/imgSlider/CoverPhoto05.png";
import CoverPhoto06 from "../assets/images/imgSlider/CoverPhoto06.png";
import CoverPhoto07 from "../assets/images/imgSlider/CoverPhoto07.jpg";
import CoverPhoto08 from "../assets/images/imgSlider/CoverPhoto08.jpg";
import CoverPhoto09 from "../assets/images/imgSlider/CoverPhoto09.jpg";

const Homepage = () => {
  let device = useRWD();
  const imgArr1 = [
    CoverPhoto01,
    CoverPhoto02,
    CoverPhoto03,
    CoverPhoto04,
    CoverPhoto05,
    CoverPhoto06,
    CoverPhoto07,
    CoverPhoto08,
    CoverPhoto09,
  ];
  //隨機
  const imgArr2 = [
    CoverPhoto03,
    CoverPhoto04,
    CoverPhoto05,
    CoverPhoto06,
    CoverPhoto07,
    CoverPhoto08,
    CoverPhoto09,
    CoverPhoto01,
    CoverPhoto02,
  ];
  const imgArr3 = [
    CoverPhoto08,
    CoverPhoto09,
    CoverPhoto01,
    CoverPhoto02,
    CoverPhoto03,
    CoverPhoto04,
    CoverPhoto05,
    CoverPhoto06,
    CoverPhoto07,
  ];
  const imgArr4 = [
    CoverPhoto05,
    CoverPhoto06,
    CoverPhoto07,
    CoverPhoto08,
    CoverPhoto09,
    CoverPhoto01,
    CoverPhoto02,
    CoverPhoto03,
    CoverPhoto04,
  ];

  const animationDelay1 = "";
  const animationDelay2 = "secondSlide";
  const animationDelay3 = "thirdSlide";
  const animationDelay4 = "forthSlide";

  return (
    <div className="homePage">
      {device === "mobile" && (
        <Link to={"/"}>
          <h1>Sheng's Film</h1>
        </Link>
      )}
      <ImgSliderComponent imgArr={imgArr1} animationDelay={animationDelay1} />
      {device === "mobile" && (
        <div>
          <ImgSliderComponent
            imgArr={imgArr2}
            animationDelay={animationDelay2}
          />
          <ImgSliderComponent
            imgArr={imgArr3}
            animationDelay={animationDelay3}
          />
          <ImgSliderComponent
            imgArr={imgArr4}
            animationDelay={animationDelay4}
          />
        </div>
      )}
    </div>
  );
};

export default Homepage;
