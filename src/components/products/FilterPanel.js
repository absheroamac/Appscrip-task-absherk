"use client";
import { useFilterVisibility } from "../context/FilterContext";
import styles from "./FilterPanel.module.css"; // Create this file if needed

const FilterPanel = () => {
  const { visible } = useFilterVisibility();
  return (
    <div className={`${styles.filterPanel} ${visible ? "" : styles.hidden}`}>
      {/* Your filter content */}
    </div>
  );
};

export default FilterPanel;
