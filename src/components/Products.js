import ProductGrid from "./products/ProductGrid";
import HideFilter from "./products/HideFilter";
import DropDown from "./header/DropDown";
import FilterPanel from "./products/FilterPanel";
import { FilterProvider } from "./context/FilterContext";
import styles from "./Products.module.css";
import FilterButton from "./products/FilterButton";

const sortBy = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE:HIGH TO LOW",
  "PRICE:LOW TO HIGH",
];

const Products = async ({ products, totalCount }) => {
  return (
    <div className={`${styles.container} container`}>
      <FilterProvider>
        <div className={styles.topBarContainer}>
          <hr />
          <div className={styles.topBar}>
            <div className={`${styles.topBarFirstSet} ${styles.smHidden}`}>
              <span>
                <span>{totalCount}</span> ITEM
              </span>

              <HideFilter />
            </div>
            <div className={`${styles.smVisible} ${styles.filterButton}`}>
              <FilterButton />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.sortBy}>
              <DropDown options={sortBy} />
            </div>
          </div>
          <hr />
        </div>

        <div className={styles.productLayout}>
          <FilterPanel />
          <div className={styles.gridContainer}>
            <ProductGrid products={products} />
          </div>
        </div>
      </FilterProvider>
    </div>
  );
};

export default Products;
