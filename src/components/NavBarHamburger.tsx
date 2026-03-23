"use client";

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const NavBarHamburger: React.FC = () => {
    const [expanded, setExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setExpanded(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside)
    })

    return (
        <>
            <div className='relative' ref={navRef}>
                <button
                    onClick={() => setExpanded(!expanded)}
                    className='flex p-2'
                    aria-label='Toggle Menu'
                >
                    {expanded ? <X size={28} /> : <Menu size={28} />}
                </button>

                {expanded && (
                    <div>
                        <ul className="absolute right-0 text-end pt-1 pb-4 text-sm bg-(--site-bg)/50 rounded-md">
                            <Link href="/"
                                className="block py-2 px-3 hover:text-pink-cstm glow-pink" onClick={() => setExpanded(false)}>Home</Link>
                            <Link href="/projects"
                                className="block py-2 px-3 hover:text-cyan-cstm glow-cyan" onClick={() => setExpanded(false)}>Projects</Link>
                            <Link href="/about"
                                className="block py-2 px-3 hover:text-pink-cstm glow-pink" onClick={() => setExpanded(false)}>About</Link>
                            <Link href="/contact"
                                className="block py-2 px-3 hover:text-cyan-cstm glow-cyan" onClick={() => setExpanded(false)}>Contact</Link>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default NavBarHamburger;


/* 
return (
    <>
        <div>
            <Navbar fixed='top'
                expand="sm"
                data-bs-theme="dark"
                className="nav-bar p-3 mb-4"
                expanded={expanded}
                onToggle={(isOpen) => setExpanded(!!isOpen)}
            >
                <div className="container-fluid mx-3">
                    <Navbar.Brand className='nav-brand pb-3' href="/">Ecomm Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-menu" />
                    <Navbar.Collapse id="navbar-menu">
                        <Nav defaultActiveKey="/home">
                            <Nav.Link className='nav-link' as={Link} to="/" onClick={() => setExpanded(false)}>
                                Home
                            </Nav.Link>
                            <Nav.Link className='nav-link' as={Link} to="/products" onClick={() => setExpanded(false)}>
                                Products
                            </Nav.Link>
                            <Nav.Link className='nav-link' as={Link} to="/about" onClick={() => setExpanded(false)}>
                                About
                            </Nav.Link>
                            <Nav.Link className='nav-link' as={Link} to="/cart" onClick={() => setExpanded(false)}>
                                Cart
                                {cartItems.length > 0 && (
                                    <>
                                        <Badge pill bg="none" text='info'
                                            className={`ms-1${isPulsing ? ' pulse' : ''}`}
                                            onAnimationEnd={() => setIsPulsing(false)}
                                        >{itemCount}</Badge>
                                        <span className="visually-hidden">cart count</span>
                                    </>
                                )}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    </>
);
};

export default NavBar; */

