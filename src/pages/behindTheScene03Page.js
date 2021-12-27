import React from "react";

const BehindTheScene01Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube-nocookie.com/embed/kxRfxcA7dHI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="bottom">
        <div className="titleWrap">
          <h2>2019 臺灣國際打擊樂節</h2>
          <h2>《追夢，不在遠方》</h2>
          <h2>回顧花絮</h2>
        </div>
        <p>
          客戶 Client : 朱宗慶打擊樂團
          <br />
          場景 Scene : 籌備過程側拍 / 團員側拍訪談
          <br />
          團員 Members : 黃堃儼 / 戴含芝
          <br />
          攝影 Videography : 王翔生
          <br />
          剪接 Editor : 王翔生
          <br />
          協力 Assistant : 林孜昱
        </p>
      </section>
    </div>
  );
};

export default BehindTheScene01Page;
