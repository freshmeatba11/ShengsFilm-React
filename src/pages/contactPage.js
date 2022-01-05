import React from "react";
import SelfPic from "../assets/images/selfPic.png";
import InstagramIcon from "../assets/images/instagram.png";
import FacebookIcon from "../assets/images/facebook.png";
import HiShengChannelIcon from "../assets/images/HiShengChannel.png";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <h1>Contect</h1>
      <section className="selfPic">
        <img src={SelfPic} alt="self" />
      </section>

      <section className="selfInfo">
        <section className="top">
          <h2>
            王翔生 Sheng Wang <span className="mobileNoShow"> | Director</span>
          </h2>
          <p>
            Hi, 我是Sheng ,
            在影音創作上已有超過四年的製作經驗，曾任職於朱宗慶打擊樂團的幕後團隊。於2018年開始從事編導工作，參與過多支品牌形象、行銷宣傳等影音製作。
          </p>
          <p>
            2020年於青年職涯中心創客基地及中國文化大學開設單期影音講座，目前仍持續創作中。
          </p>
        </section>
        <section className="bottom">
          <h3>電話 tel : 0955-987539</h3>
          <h3>信箱 Email : garyghost2@gmail.com</h3>
          <div className="iconBox">
            <a href="https://www.instagram.com/wx.sheng/" className="link">
              <img src={InstagramIcon} alt="Instagram" title="Instagram Page" />
            </a>
            <a href="https://www.facebook.com/xshengw/" className="link">
              <img src={FacebookIcon} alt="Facebook" title="Facebook Page" />
            </a>
            <a href="https://www.instagram.com/hi.sheng/" className="link">
              <img
                src={HiShengChannelIcon}
                alt="hi.sheng Channel"
                title="HiSheng Channel"
              />
            </a>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ContactPage;
