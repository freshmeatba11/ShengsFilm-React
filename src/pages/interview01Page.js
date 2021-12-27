import React from "react";

const Interview01Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube-nocookie.com/embed/j0GmktOz0Gc"
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
          <h2>荷蘭在台辦事處Mr. André 推薦</h2>
        </div>
        <h3>
          打擊樂節宣傳期間，我們因荷蘭團體Percossa的演出行政庶務而與荷蘭在台辦事處有了密切的聯繫，因緣際會之下便請他們協助拍攝，為了用最有效率的方式拍攝，我們請副代表僅錄製影片前後的話，其餘皆為對稿錄製，大幅增快拍攝速度，同時也因副代表冷面笑匠的幽默感，讓整支影片變得非常有趣。
        </h3>
        <p>
          客戶 Client : 朱宗慶打擊樂團
          <br />
          受訪者 Respondent : 荷蘭在台辦事處 副代表 Mr. André Verkade
          <br />
          訪談者 Interviewer : 廖書旋
          <br />
          攝影 Videographer : 王翔生
          <br />
          剪接 Editor : 王翔生
        </p>
      </section>
    </div>
  );
};

export default Interview01Page;
