import Image from "next/image";
import React from "react";
import LikeButton from "./LikeButton";
import style from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={style.card}>
      <div className={style.imageContainer}>
        <Image
          src={product.image.src}
          alt={product.title}
          width={300}
          height={400}
          placeholder="blur"
          blurDataURL={product.image.blurDataURL}
          layout="responsive"
        />
        {product.isOutOfStock && (
          <div className={style.outOfStockLabel}>
            <span>OUT OF STOCK</span>
          </div>
        )}

        {product.isNew && (
          <div className={style.newProductLabel}>
            <span>NEW PRODUCT</span>
          </div>
        )}
      </div>
      <div className={style.titleContainer}>
        <h4>{product.title}</h4>
      </div>
      <div className={style.bottom}>
        <p>
          <a className={style.link} href="/">
            Sign in
          </a>{" "}
          or Create an account to see pricing
        </p>
        <LikeButton productId={product.id} initiallyLiked={product.isLiked} />
      </div>
    </div>
  );
};

export default ProductCard;
