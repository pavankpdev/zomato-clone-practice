import React from "react";
import Rating from "./FoodList";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const Review = ({
  name,
  avatar,
  rating,
  date,
  review,
  tags,
  likes,
  images,
  comments,
}) => {
  return (
    <>
      <div className="my-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11">
            <img
              src={avatar}
              alt="user"
              className="w-full h-full rounded-full"
            />
          </div>
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <div className="mt-4">
          <Rating value={rating} />{" "}
          <span className="text-gray-400">{date} Months ago</span>
        </div>

        <div className="flex flex-wrap items-center my-4 gap-2">
          {tags &&
            tags.map((tag) => (
              <div className="bg-gray-300 px-4 py-1 rounded-full">{tag}</div>
            ))}
        </div>
        <div className="my-4">
          <p>{review}</p>
        </div>
        <div className="w-full flex flex-wrap items-center gap-2">
          {images &&
            images.map((image) => (
              <LazyLoadImage
                src={image}
                alt="review image"
                placeholder={
                  <div className="animate-pulse w-full h-full bg-gray-200 "></div>
                }
                className="w-full h-full"
                wrapperClassName="w-1/4 h-1/4"
              />
            ))}
        </div>

        <div className="mb-4">
          <span className="mr-2 text-md">{likes || 0} Likes</span>
          <span className="text-md">{comments || 0} Comments</span>
        </div>

        <div className="flex justify-between md:justify-start md:gap-3 items-center pb-4 border-b">
          <button className="bg-white border border-gray-600 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
            <i className="far fa-thumbs-up mr-2 text-gray-800 " />
            <span>Like</span>
          </button>
          <button className="bg-white border border-gray-600 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
            <i className="far fa-comment mr-2 text-gray-800 " />
            <span>Comment</span>
          </button>
          <button className="bg-white border border-gray-600 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
            <i className="far fa-share-square mr-2 text-gray-800 " />
            <span>Share</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default trackWindowScroll(Review);
