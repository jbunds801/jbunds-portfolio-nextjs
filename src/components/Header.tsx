// src/components/ui/Header.tsx
import React from "react";

type HeaderProps = {
    //title: string
    children: React.ReactNode;
    className?: string;
};

const Header = ({ children, className = "" }: HeaderProps) => {
    return (
        <h1 className={`text-4xl font-bold mb-4 ${className}`}>
            {children}
        </h1>
    );
};

export default Header;
