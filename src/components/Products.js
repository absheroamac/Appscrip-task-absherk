import ProductGrid from "./products/ProductGrid";
import HideFilter from "./products/HideFilter";
import DropDown from "./header/DropDown";
import FilterPanel from "./products/FilterPanel";
import { FilterProvider } from "./context/FilterContext";
import styles from "./Products.module.css";

const sortBy = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE:HIGH TO LOW",
  "PRICE:LOW TO HIGH",
];

const Products = async ({ products, totalCount }) => {
  return (
    <div className="container">
      <FilterProvider>
        <div className={styles.topBar}>
          <span>
            <span>{totalCount}</span> ITEM
          </span>
          <HideFilter />
          <DropDown options={sortBy} />
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
