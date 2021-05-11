import React, { useState } from "react";
import classnames from "classnames";

const AddRating = () => {
  const [stars, setStars] = useState(0);

  return [1, 2, 3, 4, 5].map((ratingValue) => (
    <i
      className={classnames(
        "fas fa-star fa-xs text-white p-1 rounded mr-1 cursor-pointer",
        {
          "bg-brand": ratingValue <= stars,
          "bg-gray-300": ratingValue > stars,
        }
      )}
      key={ratingValue}
      id={ratingValue}
      onClick={(e) => setStars(parseInt(e.target.id))}
    ></i>
  ));
};

export default AddRating;
