import React from "react";
import style from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={`${style.container} container`}>
      <h1 className={style.h1}>DISCOVER OUR PRODUCTS</h1>
      <h3 className={style.h3}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </h3>
    </section>
  );
};

export default Hero;
