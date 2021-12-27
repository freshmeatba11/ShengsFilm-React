import React from "react";

const BehindTheScene01Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube-nocookie.com/embed/3iTYtOApB7A"
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
            台北國際打擊樂夏令研習營
            <br />
            2019 回顧花絮
          </h2>
        </div>
        <p>
          客戶 Client : 朱宗慶打擊樂團
          <br />
          場景 Scene : 課間花絮 / 講師訪談
          <br />
          攝影 Videography : 王翔生
          <br />
          剪接 Editor : 王翔生
          <br />
          協力 Assistant : 呂昕怡
        </p>
      </section>
    </div>
  );
};

export default BehindTheScene01Page;
