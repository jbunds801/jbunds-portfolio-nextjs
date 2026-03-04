import React from 'react';
import Icons from './Icons';

interface IconsGroupProps {
    className?: string;
}

const IconsGroup = ({ className }: IconsGroupProps) => {
    return (
        <div className={`flex flex-wrap justify-start max-w-xl gap-8 ${className}`}>
            <Icons name="react" />
            <Icons name="nextjs" />
            <Icons name="react-router" />
            <Icons name="javascript" />
            <Icons name="typescript" />
            <Icons name="redux" />
            <Icons name="html5" />
            <Icons name="css3" />
            <Icons name="tailwind" />
            <Icons name="bootstrap" />
            <Icons name="firebase" />
            <Icons name="github" />
            <Icons name="figma" />
            <Icons name="postman" />
            <Icons name="git" />
            <Icons name="python" />
            <Icons name="flask" />
            <Icons name="sqlalchemy" />
            <Icons name="mysql" />
        </div>
    );
};

export default IconsGroup;