"use client";
import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function useFilterVisibility() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible((prev) => !prev);

  return (
    <FilterContext.Provider value={{ visible, toggle }}>
      {children}
    </FilterContext.Provider>
  );
}
