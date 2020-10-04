import React from "react";
import Rating from "./Rating";

const Book = (props) => {
  const {
    name,
    author,
    img,
    currency,
    original_price,
    discounted_price,
    rating
  } = props.info;
  return (
    <article className="book_item">
      <img className="book_item__image" src={img} alt={name} />
      <p className="book_item__name">{name}</p>
      <p className="book_item__author">{author}</p>
      <p className="book_item__price">
        {currency}
        <span className="book_item__price--discounted">
          {discounted_price}
        </span>{" "}
        <span className="book_item__price--original">{original_price}</span>
      </p>
      <Rating count={rating} />
    </article>
  );
};

export default Book;
