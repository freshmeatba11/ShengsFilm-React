import React from "react";

const ImgSliderComponent = (props) => {
  const { imgArr, animationDelay } = props;

  return (
    <div className="imgSliderBox">
      <div id={animationDelay} className="coverflow">
        <a href="#">
          <img src={imgArr[0]} alt=" " />
        </a>
        <a href="#">
          <img src={imgArr[1]} alt=" " />
        </a>
        <a href="#">
          <img src={imgArr[2]} alt=" " />
        </a>
      </div>
    </div>
  );
};

export default ImgSliderComponent;
