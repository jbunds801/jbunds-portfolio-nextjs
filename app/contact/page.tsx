import React from 'react'
import MailToButton from '../../src/components/MailToButton';
import Header from '../../src/components/Header';
import ContactForm from '../../src/components/ContactForm';

const Contact = () => {
    return (
        <section>
            <Header>Contact Me</Header>

            <div className='text-center'>
                <div className='mb-8'>
                    <p className='text-l sm:text-xl'>Want to work on something together, or have any questions about my work?</p>
                    <p>Contact me using one of the ways below!</p>
                </div>

                <div className='flex flex-col md:flex-row justify-center p-8 gap-10 mx-auto items-center md:items-start'>
                    <ContactForm />

                    <div className='space-y-2'>

                        <p className='text-l sm:text-xl'>Email: <MailToButton
                            email='jbunds@proton.me'
                            label='jbunds@proton.me'
                            subject='Portfolio Inquiry'
                            className='inline-block text-md sm:text-lg p-2 text-pink-cstm glow-pink' />
                        </p>

                        <div className='mt-2 md:mt-4 flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-center'>
                            <div>
                                <a href="https://www.linkedin.com/in/jessica-bundy-46a753a9/"
                                    className='text-md sm:text-l text-cyan-cstm glow-cyan'>LinkedIn</a>
                            </div>

                            <div>
                                <a href="https://github.com/jbunds801"
                                    className='text-md sm:text-l text-cyan-cstm glow-cyan'>GitHub</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
