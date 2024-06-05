import React from "react";

const ImgSliderComponent = (props) => {
  const { imgArr, animationDelay } = props;

  return (
    <div className="imgSliderBox">
      <div id={animationDelay} className="coverflow">
        {imgArr.map((img, index) => (
          <a href="/" key={index}>
            <img src={img} alt=" " />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImgSliderComponent;
