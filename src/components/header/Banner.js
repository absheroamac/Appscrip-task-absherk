import React from "react";
import BannerIcon from "../../assets/header/bannerIcon.svg";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={`${style.bannerContainer} fullWidth`}>
      <div className={`${style.bannerItem} ${style.item1}`}>
        <BannerIcon />
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={`${style.bannerItem} ${style.item2}`}>
        <BannerIcon />
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={`${style.bannerItem} ${style.item3}`}>
        <BannerIcon />
        <span>Lorem ipsum dolor</span>
      </div>
    </div>
  );
};

export default Banner;
