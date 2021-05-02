import React from "react";

// Components
import RestaurantCard from "../RestaurantCard";

const DeliveryContent = () => {
  return (
    <>
      <h1 className=" text-2xl md:text-3xl font-semibold text-gray-700 ">
        Delivery Restaurants in Bhuvaneshwari Nagar, Kempapura Agrahara,
        Bengaluru
      </h1>
      <section className="mt-4 md:flex md:flex-wrap">
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/2/60432/aa49749956282f2ef41a0bff720f5059_o2_featured_v2.jpeg?output-format=webp"
          title="Al-Bek"
          cuisine="Mughlai, Arabian, North Indian, Chinese, Seafood"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/chains/2/50382/6fa52a1c7dad34faa24f1bae4e7159de_o2_featured_v2.jpg?output-format=webp"
          title="Domino's Pizza"
          cuisine="Pizza, Fast Food, Italian"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/chains/4/50674/924d6db7dee0bb80abc31170174d0df6_o2_featured_v2.jpg?output-format=webp"
          title="McDonald's"
          cuisine="Burger, Fast Food, Beverages"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/3/19257063/89ec8db7cd1797f72225d90065784f67_o2_featured_v2.jpg?output-format=webp"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/chains/9/17946109/2b0b9bc5dafbbf2a8f6a0065ae70f52f_o2_featured_v2.jpg?output-format=webp"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/chains/4/50574/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg?output-format=webp"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/chains/1/50471/63650b66f09c0acb55075000dfcfa1aa_o2_featured_v2.jpg?output-format=webp"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/chains/0/60110/532abc849110908c9bb2c004160f08c8_o2_featured_v2.jpg?output-format=webp"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/5/19214815/c7fc6d35e913aef46814d4c8fa7429a8_o2_featured_v2.jpg?output-format=webp"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/chains/1/18603891/cea9b4fd5e3eb6da65136a3bcba3a652_o2_featured_v2.jpg?output-format=webp"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/2/18244312/7354cfdc5b40c93dde4826c1f8623b69_o2_featured_v2.jpg?output-format=webp"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
        <RestaurantCard
          image="https://b.zmtcdn.com/data/pictures/chains/8/51418/ba50a5176f9b3abf84a4b734543474a2_o2_featured_v2.jpg"
          title="Corner House Ice Creams"
          cuisine="Desserts, Beverages, Ice Cream"
          averageCost="150"
        />
      </section>
    </>
  );
};

export default DeliveryContent;
