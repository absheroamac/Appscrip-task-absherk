"use client";
import React, { useState } from "react";
import styles from "./DropDown.module.css";
import ArrowIcon from "../../assets/arrow.svg";

const options = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const DropDown = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader} onClick={() => setOpen(!open)}>
        {selected}
        <ArrowIcon />
      </div>

      {open && (
        <div className={styles.dropdownList}>
          {options.map((option) => (
            <div
              key={option}
              className={`${styles.dropdownItem} ${
                option === selected ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option === selected ? (
                <span className={styles.checkmark}>✔</span>
              ) : (
                <span className={styles.checkmarkDisabled}>✔</span>
              )}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
