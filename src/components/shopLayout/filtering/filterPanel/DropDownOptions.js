import React, { useState } from "react";
import style from "./DropDownOptions.module.css";
import ArrowIcon from "../../../../assets/arrow.svg";
import CheckBox from "./CheckBox";

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
      <span>All</span>

      <div className={style.options} style={dynamicStyle.container}>
        <div className={style.unselect}>
          <a>Unselect all</a>
        </div>
        <div className={style.optionsContainer}>
          {options.map((item, idx) => (
            <CheckBox key={idx} title={item} variant={"sm"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropDownOptions;
