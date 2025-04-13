"use client";
import { useFilterVisibility } from "../../context/FilterContext";
import CheckBox from "./filterPanel/CheckBox";
import DropDownOptions from "./filterPanel/DropDownOptions";
import styles from "./FilterPanel.module.css"; // Create this file if needed

const FilterPanel = () => {
  const { visible, toggle } = useFilterVisibility();
  return (
    <div className={`${styles.filterPanel} ${visible ? "" : styles.hidden}`}>
      <div className={styles.filterContainer}>
        <h4 className={styles.title}>Filter</h4>
        <CheckBox title={"Customizble"} />
        <hr />
        <DropDownOptions title={"IDEAL FOR"} />
        <hr />
        <DropDownOptions title={"OCCATION"} />
        <hr />
        <DropDownOptions title={"WORK"} />
        <hr />
        <DropDownOptions title={"FABRIC"} />
        <hr />
        <DropDownOptions title={"SEGMENT"} />
        <hr />
        <DropDownOptions title={"SUITABLE FOR"} />
        <hr />
        <DropDownOptions title={"RAW MATERIALS"} />
        <hr />
        <DropDownOptions title={"PATTERN"} />
        <hr />
        <button className={styles.button} onClick={toggle}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
