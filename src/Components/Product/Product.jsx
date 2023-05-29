// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Product.css";

// eslint-disable-next-line no-unused-vars
const Product = (props) => {
  // console.log(props.product.name);
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { img, name, seller, quantity, price, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="productInfo">
        <p className="productName">{name} </p>
        <p>Price: ${price} </p>
        <p>Manufacturing: {seller}</p>
        <p>Rating: {ratings} star </p>
      </div>
      <button className="btn-cart">Add to Cart</button>
    </div>
  );
};

export default Product;
