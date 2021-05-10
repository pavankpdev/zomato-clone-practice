import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Rating from "../../Components/Ratings";
import MenuCard from "../../Components/Restaurant/menuCard";

const OverviewRestaurant = () => {
  const menuCard = [
    {
      images: [
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      ],
      category: "Food",
    },
    {
      images: [
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      ],
      category: "Bar",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold my-6">Overview</h1>
      <div className="w-full md:flex">
        <div className="md:w-4/6">
          <div className="flex flex-wrap items-center gap-2">
            {menuCard.map((menu) => (
              <MenuCard {...menu} />
            ))}
          </div>

          <div className="my-8">
            <h2 className="text-xl font-semibold mb-4">Cuisines</h2>
            <div className="flex items-center flex-wrap gap-3">
              <div className="px-3 py-1 border border-gray-400 text-blue-600 font-light rounded-full">
                Kerala
              </div>
              <div className="px-3 py-1 border border-gray-400 text-blue-600 font-light rounded-full">
                Kerala
              </div>
              <div className="px-3 py-1 border border-gray-400 text-blue-600 font-light rounded-full">
                South Indian
              </div>
              <div className="px-3 py-1 border border-gray-400 text-blue-600 font-light rounded-full">
                Chinese
              </div>
            </div>
          </div>

          <div className="my-8">
            <h1 className="text-xl font-semibold">Popular Dishes</h1>
            <p className="text-md text-gray-500">
              Meen Curry, Egg Roast, Porotta, Appam, Chicken Curry, Meat
            </p>
          </div>

          <div className="md:hidden">
            <h2 className="text-xl font-semibold mb-2">Call</h2>
            <span itemprop="telephone">
              <a href="tel:+919513746310" className="text-brand text-lg">
                +919513746310
              </a>
            </span>
            <h2 className="text-xl font-semibold mt-4 mb-4">Direction</h2>
            <div className="w-full h-80">
              <MapContainer
                center={[12.973435, 77.584304]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: "18rem" }}
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[12.973435, 77.584304]}>
                  <Popup>
                    800, Near ICICI Bank, 7th Cross, 15th Main, 2nd Stage, BTM,
                    Bangalore.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <div className="my-4">
            <h1 className="text-xl font-semibold">Rate your experience for</h1>
            <div className="mt-3 flex justify-around items-center md:justify-start md:gap-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Dining</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Delivery</span>
              </label>
            </div>
            <button className="mt-4 bg-white shadow-md text-brand font-normal py-2 px-4 rounded inline-flex items-center my-8 hover:font-bold hover:border hover:border-brand ">
              <span>Write a review</span>
            </button>
            <div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11">
                  <img
                    src="https://b.zmtcdn.com/data/user_profile_pictures/b46/6e56b6f55a2693ce7ffaafca9ad5ab46.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                    alt="user"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <h2 className="text-lg font-semibold">Pavan Shetty</h2>
              </div>
              <div className="mt-4">
                <Rating value={3} />{" "}
                <span className="text-gray-400">3 Months ago</span>
              </div>

              <div className="flex flex-wrap items-center my-4">
                <div className="bg-gray-300 px-4 py-1 rounded-full">Taste</div>
              </div>

              <div className="my-4">
                <p>
                  Yaaay 🥳🎉 I just crossed 4,000 subscribers on my YouTube
                  Channel! For some, it may not sound like a lot. To me, it's
                  huge 🙏 If you haven't checked out the channel yet, I think
                  you should take a look. It may be something for you as well 🤩
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-4/12 p-6">
          <h2 className="text-2xl font-semibold mb-4">Call</h2>
          <span itemprop="telephone">
            <a href="tel:+919513746310" className="text-brand text-lg">
              +919513746310
            </a>
          </span>
          <h2 className="text-2xl font-semibold mb-4">Direction</h2>
          <div className="w-full h-80">
            <MapContainer
              center={[12.973435, 77.584304]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "18rem" }}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[12.973435, 77.584304]}>
                <Popup>
                  800, Near ICICI Bank, 7th Cross, 15th Main, 2nd Stage, BTM,
                  Bangalore.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <h3 className="mt--2">
            800, Near ICICI Bank, 7th Cross, 15th Main, 2nd Stage, BTM,
            Bangalore
          </h3>
          <button className="mt-4 mr-4 bg-white shadow-md text-gray-700 font-normal py-2 px-4 rounded inline-flex items-center border border-gray-600 hover:font-bold hover:border hover:border-brand ">
            <span>
              <i className="far fa-copy mr-2 text-brand" />
              Copy
            </span>
          </button>
          <button className="mt-4 bg-white shadow-md text-gray-700 font-normal py-2 px-4 rounded inline-flex items-center border border-gray-600 hover:font-bold hover:border hover:border-brand ">
            <span>
              <i className="fas fa-directions mr-2 text-brand" />
              Direction
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default OverviewRestaurant;
