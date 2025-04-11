import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
  title,
  description,
  image,
  id,
  rating,
  reviewLength,
  price,
  discountPercentage,
}) => {
  const navigate = useNavigate();
  return (
    <div className="card bg-base-100 w-96 shadow-sm border">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div
        className="card-body cursor-pointer"
        onClick={() => navigate(`/product/${id}`)}
      >
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
          <span className="text-white-600">
            {rating} ({reviewLength} Reviews)
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-green-500">${price}</span>
          <span className="text-sm text-red-600 line-through">
            ${((price / (100 - discountPercentage)) * 100).toFixed(2)}
          </span>
          <span className="text-sm text-green-600">
            -{discountPercentage}% Off
          </span>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/product/${id}`)}
          >
            Shop Now 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
