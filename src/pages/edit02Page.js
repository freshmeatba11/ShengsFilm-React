import React from "react";

const Edit02Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube-nocookie.com/embed/OT99e2wjY9g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="bottom">
        <div className="titleWrap">
          <h2>2019 豆莢寶寶兒童音樂會</h2>
          <h2>《淘氣旅行箱》Official Music Video</h2>
        </div>
        <p>
          客戶 Client : 朱宗慶打擊樂團
          <br />
          設計 Graphic Design : 吳秋敏Amin Wu
          <br />
          創意 Concept & Storyboard : 黃珮綺 / 王翔生
          <br />
          攝影 Videography : 王翔生 / 黃珮綺 / 張乃藴
          <br />
          剪接 Editor : 王翔生
          <br />
          協力 Assistant : 黃珮綺
        </p>
      </section>
    </div>
  );
};

export default Edit02Page;
