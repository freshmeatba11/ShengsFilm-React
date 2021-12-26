import React from "react";

const Trailer03Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube.com/embed/Dvr82rEHPEM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="bottom">
        <div>
          <h2>
            朱宗慶打擊樂團 35週年 <br />
            擊樂劇場《泥巴》Official Trailer
          </h2>
        </div>
        <h3>
          朱宗慶打擊樂團特別選擇《泥巴》作為35週年代表作品，與一路走來的不變信念及不懈奮鬥相互呼應，在這個極速變動的時代中持續懷抱著不變的信念。透過19年留下的紀錄及導演對這齣戲的概念敘述，讓觀眾能真正了解這齣劇場想表達的概念與價值。
        </h3>
        <p>
          客戶 Client : 朱宗慶打擊樂團 <br />
          設計 Graphic Design : 莊易倫
          <br />
          攝影 Videography : 王翔生/ 陳韡誌
          <br />
          剪接 Editor : 王翔生
          <br />
          協力 Assistant : 林冠婷
        </p>
      </section>
    </div>
  );
};

export default Trailer03Page;
