import { AiOutlineHeart } from "react-icons/ai";
import { Product } from "../hooks/use-products-list";
import styles from "./product-card.module.css";
import { clsx } from "clsx";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

interface ProductProps {
  product: Product;
}
export function ProductCard({ product }: ProductProps) {
  return (
    <div key={product.address} className={styles.card}>
      <AiOutlineHeart
        className={clsx(styles.header)}
        fill="white"
        width="2rem"
        height="2rem"
      />
      <img
        src={product.pictureUrl}
        alt="house"
        className={clsx(styles.blackAndWhite, styles.img)}
      />
      <div className={styles.footer}>
        <div className={clsx(styles.bottomLeft, styles.price)}>
          {currencyFormatter.format(product.price).replaceAll(",", ".")}
        </div>
        <div className={styles.bottomRight}>{product.address}</div>
      </div>
    </div>
  );
}
