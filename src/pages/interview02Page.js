import React from "react";

const Interview02Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube-nocookie.com/embed/sejXrU0G-Lc"
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
          <h2>星坊酒業總經理 須家昌 專訪</h2>
        </div>
        <p>
          客戶 Client : 朱宗慶打擊樂團
          <br />
          受訪者 Respondent : 星坊酒業總經理 須家昌
          <br />
          訪談者 Interviewer : 蔡佳妤
          <br />
          攝影 Videographer : BLACK MOOSE 黑麋影像設計工作室
          <br />
          剪接 Editor : BLACK MOOSE 黑麋影像設計工作室
          <br />
          協調窗口 Coordinator : 王翔生
        </p>
      </section>
    </div>
  );
};

export default Interview02Page;
