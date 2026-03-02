import React from 'react'
import MailToButton from '../../src/components/MailToButton';
import Header from '../../src/components/Header';

const Contact = () => {
    return (
        <section>
            <Header>Contact Me</Header>

            <div className='text-center'>
                <p className='text-2xl'>Email</p>
                {/* <p className='text-xl p-2'>jbunds@proton.me</p> */}
                <MailToButton
                    email='jbunds@proton.me'
                    label='jbunds@proton.me'
                    subject='Portfolio Inquiry'
                    className='inline-block text-2xl p-2 text-pink-cstm glow-pink'
                />
            </div>

        </section>
    );
};

export default Contact;
