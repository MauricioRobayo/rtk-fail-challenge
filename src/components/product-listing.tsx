import { useProductsList } from "../hooks/use-products-list";
import { ProductCard } from "./product-card";
import styles from "./product-listing.module.css";

export function ProductListing() {
  const { products, status, error } = useProductsList();

  if (["idle", "loading"].includes(status)) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something unexpected happened</div>;
  }

  return (
    <div className={styles.listing}>
      {products?.map((product) => (
        <ProductCard product={product} key={product.address} />
      ))}
    </div>
  );
}
