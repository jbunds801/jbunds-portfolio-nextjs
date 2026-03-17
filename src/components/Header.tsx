// src/components/ui/Header.tsx
import React from "react";

type HeaderProps = {
    //title: string
    children: React.ReactNode;
    className?: string;
};

const Header = ({ children, className = "" }: HeaderProps) => {
    return (
        <h1 className={`shimmer-text text-center text-3xl mt-3 pb-16 ${className}`} style={{ fontFamily: 'Trajan' }}>
            {children}
        </h1>
    );
};

export default Header;
