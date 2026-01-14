import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-transparent w-full">
            <div className="max-w-fit mx-auto flex flex-wrap items-center justify-between p-4">
                <div className="flex items-center px-8 text-black font-bold text-3xl">
                    Portfolio
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link
                                href="home"
                                className="block py-2 px-3 text-gray-900 rounded-sm md:bg-transparent md:text-gray-900 md:p-0 dark:text-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="about"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="projects"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="contact"
                                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 dark:text-white md:dark:hover:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
