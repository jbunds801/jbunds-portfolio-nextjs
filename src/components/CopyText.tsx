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
            {copied ? <><span>Copied!</span><div>Head over to Discord now!</div></> : text}
    </span>
  );
};

export default CopyText;
