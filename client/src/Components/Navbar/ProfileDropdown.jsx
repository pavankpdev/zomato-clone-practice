/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex justify-center gap-2 items-center focus:outline-none">
              <div className="block border w-11 h-11 rounded-full border-brand">
                <img
                  src="https://images.unsplash.com/photo-1620285327296-f71539979743?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=377&q=80"
                  alt="avatar"
                  className="w-full h-full rounded-full"
                />
              </div>
              <span className="hidden lg:flex items-center gap-2">
                <h4>Pavan</h4>
                {open ? (
                  <i className="fas fa-chevron-down transform rotate-180" />
                ) : (
                  <i className="fas fa-chevron-up transform rotate-180" />
                )}
              </span>
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
              className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/user/ad"
                      className={classnames("block px-4 py-2 text-md", {
                        "bg-gray-100 text-gray-900": active,
                        "text-gray-700": !active,
                      })}
                    >
                      Profile
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classnames("block px-4 py-2 text-md", {
                        "bg-gray-100 text-gray-900": active,
                        "text-gray-700": !active,
                      })}
                    >
                      Bookmark
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classnames("block px-4 py-2 text-md", {
                        "bg-gray-100 text-gray-900": active,
                        "text-gray-700": !active,
                      })}
                    >
                      Reviews
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classnames("block px-4 py-2 text-md", {
                        "bg-gray-100 text-gray-900": active,
                        "text-gray-700": !active,
                      })}
                    >
                      Orders
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classnames("block px-4 py-2 text-md", {
                        "bg-gray-100 text-gray-900": active,
                        "text-gray-700": !active,
                      })}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classnames(
                        "block w-full text-left px-4 py-2 text-md",
                        {
                          "bg-gray-100 text-gray-900": active,
                          "text-gray-700": !active,
                        }
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
