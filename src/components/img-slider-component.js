import React from "react";

const ImgSliderComponent = (props) => {
  const { picSrc_1, picSrc_2, picSrc_3 } = props;
  return (
    <div>
      <div className="imgSliderBox">
        <div id="cover" className="coverflow">
          <a href="#">
            <img src={picSrc_1} alt=" " />
          </a>
          <a href="#">
            <img src={picSrc_2} alt=" " />
          </a>
          <a href="#">
            <img src={picSrc_3} alt=" " />
          </a>
          <p>slider here</p>
        </div>
      </div>
    </div>
  );
};

export default ImgSliderComponent;
