import React from 'react'
import MailToButton from '../../src/components/MailToButton';
import Header from '../../src/components/Header';

const Contact = () => {
    return (
        <section>
            <Header>Contact Me</Header>

            <div className='text-center'>
                <div className='mb-8'>
                    <p className='text-xl'>Want to work on something together, or have any questions about my work?</p>
                    <p>Contact me using one of the ways below!</p>
                </div>

                <div className='space-y-2'>
                    <p className='text-2xl'>Email: <MailToButton
                        email='jbunds@proton.me'
                        label='jbunds@proton.me'
                        subject='Portfolio Inquiry'
                        className='inline-block text-2xl p-2 text-pink-cstm glow-pink' />
                    </p>

                    <div>
                        <a href="https://www.linkedin.com/in/jessica-bundy-46a753a9/"
                            className='text-2xl text-cyan-cstm glow-cyan'>LinkedIn</a>
                    </div>

                    <div>
                        <a href="https://github.com/jbunds801"
                            className='text-2xl text-pink-cstm glow-pink'>GitHub</a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
