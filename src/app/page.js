import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../assets/next.svg";
import Banner from "@/components/header/Banner";
import "./globals.css";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Product from "../assets/product/product1.png";

export default async function Home({ searchParams }) {
  const { sort = "recommended" } = searchParams;
  const products = await fetchProducts({ sort });
  const totalCount = products.length;
  return (
    <div className={styles.page}>
      <Banner />
      <Header />
      <Hero />
      <Products
        products={products}
        totalCount={totalCount}
        query={searchParams}
      />
    </div>
  );
}

async function fetchProducts({ sort }) {
  console.log("running");
  return [
    {
      id: 1,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Product,
    },
    {
      id: 2,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Product,
    },
    {
      id: 3,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Product,
    },
    {
      id: 4,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Product,
    },
    {
      id: 5,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Product,
    },
    {
      id: 6,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Product,
    },
    {
      id: 7,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Product,
    },
  ];
}
