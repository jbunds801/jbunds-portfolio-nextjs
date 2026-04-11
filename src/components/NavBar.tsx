import Link from "next/link";
import React from "react";
import NavBarHamburger from "./NavBarHamburger";

const NavBar: React.FC = () => {

    return (
        <nav className="bg-transparent w-full">
            <div className="mx-auto flex sm:flex-col justify-between items-center px-10 pt-8">
                <Link href="/" className="flex text-5xl md:text-6xl" style={{ fontFamily: 'Heroeau' }}>
                    JessiCa BUndy
                </Link>
                <div className="sm:hidden">
                    <NavBarHamburger />
                </div>
                <div className="hidden sm:block" id="navbar-default">
                    <ul className="text-xs sm:text-base font-medium flex flex-row p-8 mt-0 space-x-8">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 hover:text-pink-cstm glow-pink"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="block py-2 px-3 hover:text-cyan-cstm glow-cyan"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="block py-2 px-3 hover:text-pink-cstm glow-pink"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-2 px-3 hover:text-cyan-cstm glow-cyan"
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
