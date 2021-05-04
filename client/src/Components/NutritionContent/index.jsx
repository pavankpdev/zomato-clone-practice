import React from "react";
import Slider from "react-slick";

// Components
import HeroImage from "./HeroImage";
import NutritionCollection from "./NutritionCollection";
import RestaurantCard from "../RestaurantCard";

// Configs
import ReactSlickConfig, { singleImage } from "../../config/reactSlickConfig";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NutritionContent = () => {
  const data = [
    {
      imageSm:
        "https://b.zmtcdn.com/web/nutrition/assets/ca2ad666f06033a3e2060d7d34a698261620108893.png",
      imageLg:
        "https://b.zmtcdn.com/web/nutrition/assets/47fb421f35ca12ad3111e3d99d1737571620108828.png",
    },
    {
      imageSm:
        "https://b.zmtcdn.com/web/nutrition/assets/3411bca9bef796775ae924ace20916bc1620108901.png",
      imageLg:
        "https://b.zmtcdn.com/web/nutrition/assets/0a8f2dad65904b89178905213efe886c1620108711.png",
    },
    {
      imageSm:
        "https://b.zmtcdn.com/web/nutrition/assets/bbee8bb8e4e6cc102804cea54f6bc22b1620108868.png",
      imageLg:
        "https://b.zmtcdn.com/web/nutrition/assets/f8da550c375c3bec2f6ba341336324561620108741.png",
    },
    {
      imageSm:
        "https://b.zmtcdn.com/web/nutrition/assets/c96ca6e3ce4a907e1c65134709db152c1620108861.png",
      imageLg:
        "https://b.zmtcdn.com/web/nutrition/assets/cfbb36a56a4203c7efac5de27318ea381620108756.png",
    },
    {
      imageSm:
        "https://b.zmtcdn.com/web/nutrition/assets/0bde69a7f760111a662f42fe890b97bf1620108908.png",
      imageLg:
        "https://b.zmtcdn.com/web/nutrition/assets/3872dc3041e9633ba40b51e7dbff263a1620108770.png",
    },
    {
      imageSm:
        "https://b.zmtcdn.com/web/nutrition/assets/bb5be66c9aed89521cc37717103f32d31620108878.png",
      imageLg:
        "https://b.zmtcdn.com/web/nutrition/assets/6070ce964372e9e39c5bf6345a7bf78c1620108789.png",
    },
    {
      imageSm:
        "https://b.zmtcdn.com/web/nutrition/assets/39dbd67fa046284b1b21906606d641db1620108887.png",
      imageLg:
        "https://b.zmtcdn.com/web/nutrition/assets/136f6056ec55c6431172d5405cb645761620108811.png",
    },
  ];

  const NutritionCollectionData = [
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/63a/465608c5e83c8668a8cb8ef27b50363a_1615481698.png?output-format=webp",
      name: "Health SUpplements",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/1e9/4f663bdd6e9c6dc60b949361747321e9_1615993234.png?output-format=webp",
      name: "Immunity & Digestion",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/33c/478ca76eb4ed8b06bfd5afd52d72433c_1617295398.png?output-format=webp",
      name: "Healthy Teas",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/956/efe7cf41bd9c6751984c1894d094a956_1615993161.png?output-format=webp",
      name: "Fitness Supplements",
    },
    {
      image:
        "https://dote.zmtcdn.com/prod/data/admin_assets/images/e32/b262661f66693aa5a5369bcf1dea9e32_1617295264.png?output-format=webp",
      name: "Weight Management",
    },
  ];
  return (
    <>
      <Slider {...singleImage}>
        {data.map((image) => (
          <HeroImage {...image} name={`${Date.now()}`} />
        ))}
      </Slider>
      <div className="py-10"></div>
      <Slider {...ReactSlickConfig}>
        {NutritionCollectionData.map((list) => (
          <NutritionCollection {...list} />
        ))}
      </Slider>
      <h1 className="mt-8 mb-4 text-xl" >All Products</h1>
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

export default NutritionContent;
