import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Home", href: "card", current: true },
  { name: "Login", href: "/", current: false },
  { name: "Register", href: "/register", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { baskets } = useSelector((store) => store.basket);
  const { favorites } = useSelector((store) => store.fav);
  let navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div> */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                  className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Log out
                </button>

                <h1 style={{ color: "white" }}>
                  {JSON.parse(localStorage.getItem("LoginUser"))}
                </h1>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    color: "white",
                    fontSize: "25px",
                    position: "relative",
                  }}
                >
                  <SlBasket
                    onClick={() => {
                      navigate("basket");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "45px",
                      top: "-10px",
                      backgroundColor: "red",
                      fontSize: "20px",
                      width: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "25px",
                      borderRadius: "5px",
                    }}
                  >
                    {baskets.length}
                  </div>

                  <MdFavoriteBorder
                    onClick={() => {
                      navigate("fav");
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "-10px",
                      top: "-10px",
                      backgroundColor: "red",
                      fontSize: "20px",
                      width: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "25px",
                      borderRadius: "5px",
                    }}
                  >
                    {favorites.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
