import React, { useState } from "react";
import { Switch } from "@headlessui/react";

import { FoodItem, FoodList } from "../../Components/Restaurant/FoodList";
import Menu from "../../Components/Restaurant/menu";

const OrderOnlineRestaurant = () => {
  const [enabled, setEnabled] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <>
      <main className="flex flex-col md:flex-row w-full h-screen gap-4 relative">
        <aside class="hidden md:block w-80 lg:w-96 h-screen bg-white pt-8 border-r border-gray-300">
          <Menu
            name="Recommended"
            id="recommended"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          <Menu
            name="Masala Dosa"
            id="masala-dosa"
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </aside>
        <section className="w-full h-screen overflow-y-scroll	">
          <h1 className="text-2xl font-semibold my-6">Order Online</h1>
          <span className="border-r border-gray-600 pr-3">
            <i className="fas fa-street-view mr-2 text-gray-600 " />
            Live tracking not available
          </span>
          <span className="ml-2 text-gray-600 ">
            <i className="far fa-clock mr-2" />
            Clock
          </span>

          <div className="my-6">
            <Switch.Group>
              <div className="flex items-center gap-2">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={`${
                    enabled ? "bg-green-600" : "bg-gray-400"
                  } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                >
                  <span
                    className={`${
                      enabled ? "translate-x-6" : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                  />
                </Switch>
                <Switch.Label className="mr-4">Veg Only</Switch.Label>
              </div>
            </Switch.Group>
          </div>
          <div className="relative">
            <FoodList name="Recommended" id="recommended">
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
            </FoodList>
            <FoodList name="Masala Dosa" id="masala-dosa">
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
            </FoodList>
            <FoodList name="Sada Dosa" id="soda-dosa">
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
              <FoodItem
                name="Masala Dosa Celebration Pack (3 Pcs)"
                isVeg
                isBestSeller
                isMustTry
                price={260}
                description="Cheese Masala Dosa + Schezwan Paneer Masla Dosa + Mushroom Masala Dosa"
                rating={4}
                totalVotes="20"
                image="https://b.zmtcdn.com/data/dish_photos/5d0/b6b3030088e471720843b9ac2c7055d0.jpg?fit=around|130:130&crop=130:130;*,*"
              />
            </FoodList>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderOnlineRestaurant;
