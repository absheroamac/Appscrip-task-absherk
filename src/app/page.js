import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../assets/next.svg";
import Banner from "@/components/header/Banner";
import "./globals.css";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import Products from "@/components/shopLayout/ShopLayout";
import Product from "../assets/product/product1.png";
import Images from "@/components/products/Images";

import Footer from "@/components/Footer";

export default async function Home({ searchParams }) {
  const { sort = "recommended" } = searchParams;
  const products = await fetchProducts({ sort });
  const totalCount = products.length;
  return (
    <div className={styles.page}>
      {/* Top Banner */}
      <Banner />
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/*  */}
      <Products
        products={products}
        totalCount={totalCount}
        query={searchParams}
      />
      <Footer />
    </div>
  );
}

// Mocked Fetching Products taking from assets
// isNew, isSoldOut Fields will render in cards

async function fetchProducts({ sort }) {
  console.log("running");
  return [
    {
      id: 1,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Images[0],
      isNew: true,
    },
    {
      id: 2,
      title: "PPXOC Milkyway dress in pressed flowers",
      image: Images[1],
      isOutOfStock: true,
    },
    {
      id: 3,
      title: "Product Name",
      image: Images[2],
    },
    {
      id: 4,
      title: "Product Name",
      image: Images[3],
    },
    {
      id: 5,
      title: "Product Name",
      image: Images[4],
    },
    {
      id: 6,
      title: "Product Name",
      image: Images[5],
    },
    {
      id: 7,
      title: "Product Name",
      image: Images[6],
    },
    {
      id: 8,
      title: "Product Name",
      image: Images[7],
      isNew: true,
    },
    {
      id: 9,
      title: "Product Name",
      image: Images[8],
      isOutOfStock: true,
    },
    {
      id: 10,
      title: "Product Name",
      image: Images[9],
    },
    {
      id: 11,
      title: "Product Name",
      image: Images[10],
    },
    {
      id: 12,
      title: "Product Name",
      image: Images[11],
    },
    {
      id: 13,
      title: "Product Name",
      image: Images[12],
    },
    {
      id: 14,
      title: "Product Name",
      image: Images[13],
    },
    {
      id: 15,
      title: "Product Name",
      image: Images[14],
    },
    {
      id: 16,
      title: "Product Name",
      image: Images[15],
    },
    {
      id: 17,
      title: "Product Name",
      image: Images[16],
    },
    {
      id: 18,
      title: "Product Name",
      image: Images[17],
    },
  ];
}
