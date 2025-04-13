"use client";
import React, { useEffect, useState } from "react";
import style from "./MobileNav.module.css";

const MobileNav = ({ headers, current }) => {
  const [active, setActive] = useState(current);

  return (
    <div className={style.container}>
      {headers.map((item, idx) =>
        active === item ? (
          <div key={idx} className={style.container}>
            <a key={idx} className={style.active}>
              {item}
            </a>
          </div>
        ) : (
          <div key={idx} className={style.container}>
            <a key={idx} className={style.notActive}>
              {item}
            </a>
            <div className={style.division}></div>
          </div>
        )
      )}
    </div>
  );
};

export default MobileNav;
