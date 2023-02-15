import axios from "axios";
import { useEffect, useState } from "react";

const productsUrl = "https://api.jsonbin.io/v3/b/63eb94c4c0e7653a05775af9";

const fetch = fetchCache();
export interface Product {
  pictureUrl: string;
  price: number;
  address: string;
}
export function useProductsList() {
  const [products, setProducts] = useState<Product[]>();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function fetchListing() {
      setStatus("loading");
      try {
        const { data } = await fetch<{ record: Product[] }>(productsUrl, {
          headers: {
            "X-Access-Key":
              "$2b$10$W9mx9/dlGUv2//LIiBnS7.J5DwGiieJQRRYux3kFYD3B7RkBo89EG",
          },
        });
        setProducts(data.record);
        setStatus("success");
      } catch (err) {
        setStatus("error");
        setError(err);
      }
    }
    fetchListing();
  }, []);
  return { products, status, error };
}

function fetchCache() {
  const cache: Record<string, any> = {};
  return async function <T>(url: string, options: any) {
    if (!cache[url]) {
      cache[url] = axios.get<T>(url, options);
    }

    return cache[url];
  };
}
