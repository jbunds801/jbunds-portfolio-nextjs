import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-transparent w-full">
            <div className="max-w-fit mx-auto flex flex-wrap items-center justify-between p-4">
                <div className="flex items-center px-8 font-bold text-3xl" style={{ fontFamily: 'Trajan' }}>
                    Jessica Bundy
                </div>
                <div className="w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-row p-4 mt-0 space-x-8">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="block py-2 px-3 text-white"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="block py-2 px-3 text-white"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-2 px-3 text-white"
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
