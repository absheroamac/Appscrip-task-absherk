import React from "react";
import ButtonArrow from "../assets/buttonArrow.svg";
import DropDown from "./header/DropDown";

const sortBy = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE:HIGH TO LOW",
  "PRICE:LOW TO HIGHT",
];

const Listing = () => {
  return (
    <div className="container">
      <div>
        <div>
          <span>
            <span>3425</span>ITEMS
          </span>
          <button>
            <ButtonArrow />
            <span>HIDE FILTER</span>
          </button>
        </div>
        <div>
          <DropDown options={sortBy} />
        </div>
      </div>
      <hr />
      <div></div>
    </div>
  );
};

export default Listing;
