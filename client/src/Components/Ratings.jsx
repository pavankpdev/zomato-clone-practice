import React from "react";
import classnames from "classnames";

const Rating = ({ value, bg }) => {
  return [1, 2, 3, 4, 5].map((ratingValue) => (
    <i
      className={classnames("fas fa-star fa-xs text-white p-1 rounded mr-1", {
        [bg || "bg-brand"]: ratingValue <= value,
        "bg-gray-300": ratingValue > value,
      })}
      key={ratingValue}
    ></i>
  ));
};

export default Rating;
