"use client";
import React from "react";
import style from "./Collapsible.module.css";
import ArrowIcon from "../../assets/arrow.svg";
import { useState } from "react";

const Collapsible = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dynamicStyle = {
    arrow: {
      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
      fill: "white",
    },

    container: {
      display: isOpen ? "block" : "none",
    },
  };

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <div className={style.header} onClick={handleOpen}>
        <span>{title}</span>
        <ArrowIcon style={dynamicStyle.arrow} />
      </div>

      <div className={style.options} style={dynamicStyle.container}>
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
