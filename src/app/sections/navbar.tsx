"use client";
import CustomButton from "@/components/custom/button";
import { motion } from "framer-motion";
import animations from "../../lib/animations";
import config from "../../lib/config";

const MenuItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#",
  },
];

function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4 px-6 sm:px-12 sm:py-4">
        <a
          href="/"
          className="flex items-baseline space-x-3 rtl:space-x-reverse"
        >
          <motion.div
            {...animations.navbar.name}
            className="relative flex flex-col items-center justify-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              {config.navbar.firstName}
            </h2>
          </motion.div>
          <motion.div
            {...animations.navbar.mapleLeaf}
            className="relative flex flex-col items-center justify-center"
          >
            <img
              src="/img/maple-leaf.svg"
              alt="I'm based in Canada"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </motion.div>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <motion.div {...animations.navbar.button}>
            <CustomButton variant="outline" className="hidden sm:block">
              {config.navbar.button}
            </CustomButton>
          </motion.div>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {MenuItems.map((item, index) => (
              <motion.li
                key={item.name}
                {...animations.navbar.getMenuItem(index)}
              >
                <a
                  href={item.href}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
