import React from "react";

const Edit01Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube-nocookie.com/embed/0dScm7RglxA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="bottom">
        <div>
          <h2>
            一擊一會Precussion Online
            <br />
            打擊樂之歌 防疫Version
          </h2>
        </div>
        <p>
          客戶 Client : 朱宗慶打擊樂團
          <br />
          創意 Concept & Storyboard : 朱宗慶 / 林冠婷
          <br />
          攝影 Videography : 王翔生 / 陳韡誌 / 團員提供
          <br />
          主演 Lead starring : 藝術總監 朱宗慶 / 朱宗慶打擊樂團 團員
          <br />
          剪接 Editor : 王翔生
          <br />
          協力 Assistant : 林冠婷
        </p>
      </section>
    </div>
  );
};

export default Edit01Page;
