import Link from "next/link";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-transparent w-full">
            <div className="max-w-fit mx-auto flex flex-col items-center pt-8">
                <div className="flex items-center px-8 text-6xl" style={{ fontFamily: 'Heroeau' }}>
                    JessiCa Bundy
                </div>
                <div className="w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-row p-8 mt-0 space-x-8">
                        <li>
                            <Link
                                href="/"
                                className="block py-2 px-3 text-white hover:text-pink-cstm glow-pink"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="block py-2 px-3 text-white hover:text-cyan-cstm glow-cyan"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="block py-2 px-3 text-white hover:text-pink-cstm glow-pink"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="block py-2 px-3 text-white hover:text-cyan-cstm glow-cyan"
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
