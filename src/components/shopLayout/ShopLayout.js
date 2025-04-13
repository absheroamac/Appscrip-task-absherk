import ProductGrid from "../products/ProductGrid";
import HideFilter from "./filtering/HideFilter";
import DropDown from "../header/DropDown";
import FilterPanel from "./filtering/FilterPanel";
import { FilterProvider } from "../context/FilterContext";
import styles from "./ShopLayout.module.css";
import FilterButton from "./filtering/FilterButton";

const sortBy = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE:HIGH TO LOW",
  "PRICE:LOW TO HIGH",
];

const ShopLayout = async ({ products, totalCount }) => {
  return (
    <div className={`${styles.container} container`}>
      {/* Filter Provider, Provide Context */}
      <FilterProvider>
        {/* Top Bar */}
        <div className={styles.topBarContainer}>
          <hr />
          <div className={styles.topBar}>
            <div className={`${styles.topBarFirstSet} ${styles.smHidden}`}>
              <span>
                <span>{totalCount}</span> ITEM
              </span>

              {/* Button To Hide/Show Filter on Desktop */}
              <HideFilter />
            </div>

            {/* Button To Hide/Show Filter on Mobile */}
            <div className={`${styles.smVisible} ${styles.filterButton}`}>
              <FilterButton />
            </div>
            <div className={styles.divider}></div>

            {/* Drop down Menu */}
            <div className={styles.sortBy}>
              <DropDown options={sortBy} />
            </div>
          </div>
          <hr />
        </div>

        <div className={styles.productLayout}>
          {/* Filtering Panel */}
          <FilterPanel />
          {/* Product Grid */}
          <div className={styles.gridContainer}>
            <ProductGrid products={products} />
          </div>
        </div>
      </FilterProvider>
    </div>
  );
};

export default ShopLayout;
