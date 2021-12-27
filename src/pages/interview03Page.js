import React from "react";

const Interview03Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube-nocookie.com/embed/l0HttJ11V4A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="bottom">
        <div className="titleWrap">
          <h2>朱宗慶打擊樂團</h2>
          <h2>2018 音樂會《有一種嚮往あこがれ》</h2>
          <h2>團員專訪—我們眼中的櫻井弘二</h2>
        </div>
        <p>
          客戶 Client : 朱宗慶打擊樂團
          <br />
          受訪者 Respondent : 朱宗慶 / 吳思珊 / 吳珮菁 / 何鴻棋 / 黃堃儼
          <br />
          訪談者 Interviewer : 林冠婷
          <br />
          攝影 Videographer : 王翔生
          <br />
          剪接 Editor : 王翔生
        </p>
      </section>
    </div>
  );
};

export default Interview03Page;
