import React from "react";
import { Link } from "react-router-dom";
import useRWD from "../useRWD";
import ImgSliderComponent from "../components/img-slider-component";
import slideImg01 from "../assets/images/imgSlider/slideImg01.png";
import slideImg02 from "../assets/images/imgSlider/slideImg02.png";
import slideImg03 from "../assets/images/imgSlider/slideImg03.png";
import slideImg04 from "../assets/images/imgSlider/slideImg04.png";
import slideImg05 from "../assets/images/imgSlider/slideImg05.png";
import slideImg06 from "../assets/images/imgSlider/slideImg06.png";
import slideImg07 from "../assets/images/imgSlider/slideImg07.png";
import slideImg08 from "../assets/images/imgSlider/slideImg08.png";

const Homepage = () => {
  let device = useRWD();
  const imgArr1 = [slideImg01, slideImg04, slideImg03];
  const imgArr2 = [slideImg06, slideImg07, slideImg08];
  const imgArr3 = [slideImg02, slideImg03, slideImg06];
  const imgArr4 = [slideImg04, slideImg05, slideImg01];
  const animationDelay1 = "";
  const animationDelay2 = "secondSlide";
  const animationDelay3 = "thirdSlide";
  const animationDelay4 = "forthSlide";
  console.log(window.innerWidth);
  console.log(device);
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
