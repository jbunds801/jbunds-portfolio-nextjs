"use client"

import { useState } from 'react';

const CopyText = ({ text, className }: { text: string; className?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <span onClick={handleClick} className={`cursor-pointer ${className ?? ''}`}>
            {copied ? <><span>Copied!</span><span className="block">Head over to Discord now!</span></> : text}
        </span>
    );
};

export default CopyText;
