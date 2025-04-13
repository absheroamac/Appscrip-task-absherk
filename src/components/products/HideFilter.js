"use client";
import React, { useEffect, useState } from "react";
import ButtonArrow from "../../assets/buttonArrow.svg";
import { useFilterVisibility } from "../context/FilterContext";
import style from "./HideFilter.module.css";

const HideFilter = () => {
  const { visible, toggle } = useFilterVisibility();
  return (
    <button onClick={toggle} className={style.buttonContainer}>
      {visible ? (
        <div className={style.button}>
          <ButtonArrow />
          <span>HIDE FILTER</span>
        </div>
      ) : (
        <div className={style.button}>
          <ButtonArrow style={{ transform: "rotate(180deg)" }} />
          <span>SHOW FILTER</span>
        </div>
      )}
    </button>
  );
};

export default HideFilter;
