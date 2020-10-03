import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Rating = (props) => {
  function getStars(val) {
    const stars = [];
    const [whole, part] = parseFloat(val).toString().split(".");
    for (let i = 0; i < whole; i++) {
      stars.push(<BsStarFill />);
    }
    if (part) {
      stars.push(<BsStarHalf />);
    }
    for (let i = whole; i < (part ? 4 : 5); i++) {
      stars.push(<BsStar />);
    }
    return stars;
  }
  return (
    <div className="book_item__rating">
      {getStars(props.count).map((star, index) => (
        <i key={index}>{star}</i>
      ))}
    </div>
  );
};
export default Rating;
