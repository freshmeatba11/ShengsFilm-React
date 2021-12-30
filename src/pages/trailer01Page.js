import React from "react";

const Trailer01Page = () => {
  return (
    <div className="galleryDetailPage">
      <section className="top">
        <div className="videoBox">
          <iframe
            src="https://www.youtube-nocookie.com/embed/T_2Liey9dm4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="bottom">
        <div className="titleWrap">
          <h2>第十屆臺灣國際打擊樂節</h2>
          <h2>《追夢，不在遠方》</h2>
          <h2>30sec Trailer</h2>
        </div>
        <h3>
          「你可以說，我是個拿著鼓棒琴槌追夢的人，
          而我始終知道，懷著對打擊樂的狂熱信念，我們並不孤單！」
          <br />
          <br />
          19年朱宗慶打擊樂團推出第十屆臺灣國際打擊樂節《追夢，
          不在遠方》，嘗試使用Motion
          graphic結合各國團隊素材呈現共12個國家、70位打擊樂手的演出畫面，營造出聽覺及視覺的震撼感。
        </h3>
        <p>
          客戶 Client : 朱宗慶打擊樂團 <br />
          設計 Graphic Design : 品墨設計
          <br />
          創意 Concept & Storyboard : 王翔生 / 林孜昱
          <br />
          剪接 Editor : 王翔生
          <br />
          協力 Assistant : 林孜昱
        </p>
      </section>
    </div>
  );
};

export default Trailer01Page;
