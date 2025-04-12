"use client";
import React, { useEffect, useState } from "react";
import ButtonArrow from "../../assets/buttonArrow.svg";
import { useFilterVisibility } from "../context/FilterContext";

const HideFilter = () => {
  const { visible, toggle } = useFilterVisibility();
  return (
    <button onClick={toggle}>
      {visible ? (
        <>
          <ButtonArrow />
          <span>HIDE FILTER</span>
        </>
      ) : (
        <>
          <ButtonArrow style={{ transform: "rotate(180deg)" }} />
          <span>SHOW FILTER</span>
        </>
      )}
    </button>
  );
};

export default HideFilter;
