"use client";
import React from "react";
import { useFilterVisibility } from "../context/FilterContext";

const FilterButton = () => {
  const { visible, toggle } = useFilterVisibility();
  return (
    <button style={{ fontWeight: "bold" }} onClick={toggle}>
      FILTER
    </button>
  );
};

export default FilterButton;
