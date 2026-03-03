import React from 'react';
import Icons from './Icons';

interface IconsGroupProps {
    className?: string;
}

const IconsGroup = ({ className }: IconsGroupProps) => {
    return (
        <div className={`flex p-8 gap-4 ${className}`}>
            <Icons name="react" />
            <Icons name="bootstrap" />
            <Icons name="react-router" />
            <Icons name="redux" />
            <Icons name="firebase" />
            <Icons name="figma" />
            <Icons name="javascript" />
            <Icons name="typescript" />
            <Icons name="python" />
            <Icons name="flask" />


        </div>
    );
};

export default IconsGroup;