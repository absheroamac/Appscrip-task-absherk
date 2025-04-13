"use client";
import React, { useState } from "react";
import Tick from "../../assets/tick.svg";
import style from "./CheckBox.module.css";

const CheckBox = ({ title, handler }) => {
  const [isActive, setIsActive] = useState(false);

  const checkBoxStyle = { backgroundColor: isActive ? "black" : "white" };

  const handleCheckBox = () => {
    setIsActive((prev) => !prev);
    //handler(isActive);
  };

  return (
    <div className={style.checkBoxContainer} onClick={handleCheckBox}>
      <div className={style.checkBox} style={checkBoxStyle}>
        {isActive && <Tick className={style.tick} />}
      </div>
      <span>{title}</span>
    </div>
  );
};

export default CheckBox;
