import React, { useState } from "react";
import style from "./DropDownOptions.module.css";
import ArrowIcon from "../../assets/arrow.svg";

const DropDownOptions = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dynamicStyle = {
    arrow: {
      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
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
        <span>All</span>
      </div>
    </div>
  );
};

export default DropDownOptions;
