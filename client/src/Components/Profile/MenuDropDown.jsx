import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { AuthContext } from "../../content/auth";

export const MenuList = ({ name, children }) => {
  return (
    <>
      <h2 className="text-md font-normal tracking-widest uppercase text-gray-400 pl-3 py-2">
        {name}
      </h2>
      <div className="py-1">{children}</div>
    </>
  );
};

export const MenuItem = ({ route, name }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Menu.Item>
        {({ active }) => (
          <Link
            to={`/user/${user.id}/${route}`}
            className={classnames("block px-4 py-2 text-md", {
              "bg-gray-100 text-gray-900": active,
              "text-gray-700": !active,
            })}
          >
            {name}
          </Link>
        )}
      </Menu.Item>
    </>
  );
};

export function MenuDropDown({ children }) {
  return (
    <Menu as="div" className="relative inline-block text-left mt-4 md:hidden">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex items-center gap-2 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              Options
              <i className="fas fa-chevron-down" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="z-50 origin-top-right absolute right-0 mt-2 w-full rounded-md divide-y divide-gray-100 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
