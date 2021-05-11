import React from "react";
import AddRating from "../../Components/Restaurant/addReviewStars";
import Review from "../../Components/Restaurant/Review";

const ReviewRestaurant = () => {
  return (
    <>
      <main className="flex flex-col md:flex-row w-full h-screen gap-4 relative">
        <section className="w-full h-screen overflow-y-scroll	">
          <div className="md:hidden mb-8 bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-xl font-semibold">Rate your experience for</h1>
            <div className="my-4 flex justify-around items-center">
              <label class="text-gray-700">
                <input type="radio" value="" />
                <span class="ml-1">Dining</span>
              </label>
              <label class="text-gray-700">
                <input type="radio" value="" />
                <span class="ml-1">Delivery</span>
              </label>
            </div>
            <AddRating />
            <div className="mt-4">
              <button className="cursor-pointer bg-white text-brand font-normal rounded inline-flex items-center">
                <span>Write a review</span>
              </button>
            </div>
          </div>
          <Review
            avatar="https://b.zmtcdn.com/data/user_profile_pictures/b46/6e56b6f55a2693ce7ffaafca9ad5ab46.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            name="Pavan"
            rating={3}
            date="3"
            tags={["taste"]}
            review="Yaaay 🥳🎉 I just crossed 4,000 subscribers on my YouTube
        Channel! For some, it may not sound like a lot. To me, it's
        huge 🙏 If you haven't checked out the channel yet, I think
        you should take a look. It may be something for you as well 🤩"
          />
          <Review
            avatar="https://b.zmtcdn.com/data/user_profile_pictures/b46/6e56b6f55a2693ce7ffaafca9ad5ab46.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            name="Pavan"
            rating={3}
            date="3"
            tags={["taste"]}
            review="Yaaay 🥳🎉 I just crossed 4,000 subscribers on my YouTube
        Channel! For some, it may not sound like a lot. To me, it's
        huge 🙏 If you haven't checked out the channel yet, I think
        you should take a look. It may be something for you as well 🤩"
          />
          <Review
            avatar="https://b.zmtcdn.com/data/user_profile_pictures/b46/6e56b6f55a2693ce7ffaafca9ad5ab46.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            name="Pavan"
            rating={3}
            date="3"
            tags={["taste"]}
            review="Yaaay 🥳🎉 I just crossed 4,000 subscribers on my YouTube
        Channel! For some, it may not sound like a lot. To me, it's
        huge 🙏 If you haven't checked out the channel yet, I think
        you should take a look. It may be something for you as well 🤩"
          />
          <Review
            avatar="https://b.zmtcdn.com/data/user_profile_pictures/b46/6e56b6f55a2693ce7ffaafca9ad5ab46.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            name="Pavan"
            rating={3}
            date="3"
            tags={["taste"]}
            review="Yaaay 🥳🎉 I just crossed 4,000 subscribers on my YouTube
        Channel! For some, it may not sound like a lot. To me, it's
        huge 🙏 If you haven't checked out the channel yet, I think
        you should take a look. It may be something for you as well 🤩"
          />
        </section>
        <aside class="hidden md:block w-80 lg:w-96 h-screen bg-white pt-8">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h1 className="text-xl font-semibold">Rate your experience for</h1>
            <div className="my-4 flex justify-around items-center">
              <label class="text-gray-700">
                <input type="radio" value="" />
                <span class="ml-1">Dining</span>
              </label>
              <label class="text-gray-700">
                <input type="radio" value="" />
                <span class="ml-1">Delivery</span>
              </label>
            </div>
            <AddRating />
            <div className="mt-4">
              <button className="cursor-pointer bg-white text-brand font-normal rounded inline-flex items-center">
                <span>Write a review</span>
              </button>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default ReviewRestaurant;
