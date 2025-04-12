import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

const ProductGrid = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products?.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductGrid;
