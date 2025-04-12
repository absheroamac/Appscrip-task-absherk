import Image from "next/image";
import React from "react";
import LikeButton from "./LikeButton";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Image
        src={product.image.src}
        alt={product.title}
        width={product.image.width}
        height={product.image.height}
        placeholder="blur"
        blurDataURL={product.image.blurDataURL}
      />
      <h4>{product.title}</h4>
      <div>
        <p>
          <span>Sign in</span> or Create an account to see pricing
        </p>
        <LikeButton productId={product.id} initiallyLiked={product.isLiked} />
      </div>
    </div>
  );
};

export default ProductCard;
