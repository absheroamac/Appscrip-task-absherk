"use client";
import React, { useState } from "react";
import Tick from "../../../../assets/tick.svg";
import style from "./CheckBox.module.css";

const CheckBox = ({ title, handler, variant }) => {
  const [isActive, setIsActive] = useState(false);

  const checkBoxStyle = {
    width: variant === "sm" ? "18px" : "22px",
    height: variant === "sm" ? "18px" : "22px",
    backgroundColor: isActive ? "black" : "white",
  };

  const textStyle = {
    fontSize: variant === "sm" ? "16px" : "18px",
    fontWeight: variant === "sm" ? "normal" : "Bold",
  };

  const handleCheckBox = () => {
    setIsActive((prev) => !prev);
    //handler(isActive);
  };

  return (
    <div className={style.checkBoxContainer} onClick={handleCheckBox}>
      <div className={style.checkBox} style={checkBoxStyle}>
        {isActive && <Tick className={style.tick} />}
      </div>
      <div>
        <span style={textStyle}>{title}</span>
      </div>
    </div>
  );
};

export default CheckBox;
