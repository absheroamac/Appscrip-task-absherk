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
        <CheckBox title={"CUSTOMIZBLE"} />
        <hr />
        <DropDownOptions
          title={"IDEAL FOR"}
          options={["Men", "Women", "Baby & Kids"]}
        />
        <hr />
        <DropDownOptions
          title={"OCCATION"}
          options={["Men", "Women", "Baby & Kids"]}
        />
        <hr />
        <DropDownOptions
          title={"WORK"}
          options={["Men", "Women", "Baby & Kids"]}
        />
        <hr />
        <DropDownOptions
          title={"FABRIC"}
          options={["Men", "Women", "Baby & Kids"]}
        />
        <hr />
        <DropDownOptions
          title={"SEGMENT"}
          options={["Men", "Women", "Baby & Kids"]}
        />
        <hr />
        <DropDownOptions
          title={"SUITABLE FOR"}
          options={["Men", "Women", "Baby & Kids"]}
        />
        <hr />
        <DropDownOptions
          title={"RAW MATERIALS"}
          options={["Men", "Women", "Baby & Kids"]}
        />
        <hr />
        <DropDownOptions
          title={"PATTERN"}
          options={["Men", "Women", "Baby & Kids"]}
        />
        <hr />
        <button className={styles.button} onClick={toggle}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
