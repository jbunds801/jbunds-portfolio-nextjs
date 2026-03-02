import React from 'react'
import Header from '../../src/components/Header';

const About = () => {
    return (
        <section>
            <Header>About Me</Header>
            <p className='pb-4'>Jessica Bundy is a software engineer with a designer&apos;s
                eye and a builder&apos;s mindset. She creates responsive, user-centered
                web applications using React, TypeScript, and Python, blending
                thoughtful architecture with clean, intuitive interfaces. Her work
                reflects a balance of structure and creativity: scalable state
                management behind the scenes, and seamless user experiences on the
                surface.</p>

            <p className='pb-4'>With a background in photography and visual design, Jessica approaches
                development with strong attention to composition, clarity, and detail. 
                She believes great software should not only function reliably, but 
                also feel purposeful and engaging to use. Whether implementing 
                authentication flows, managing global state, or refining UI interactions, 
                she focuses on crafting products that are both technically sound and 
                visually cohesive.</p>

            <p className='pb-4'>Curious by nature and collaborative by instinct, Jessica thrives in 
                environments where design and engineering intersect. She is especially 
                energized by building meaningful, user-facing experiences that solve real 
                problems while maintaining polish and personality.</p>
        </section>

    );
};

export default About;