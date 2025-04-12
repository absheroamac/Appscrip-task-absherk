"use client";
import React, { useState } from "react";
import Like from "../../assets/product/like.svg";
import LikeFilled from "../../assets/product/likeFilled.svg";

const LikeButton = ({ productId, initiallyLiked }) => {
  const [isLiked, setIsLiked] = useState(initiallyLiked);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
    //API Request to make it liked. using the productID
  };
  return isLiked ? <LikeFilled /> : <Like />;
};

export default LikeButton;
