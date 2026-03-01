import React from 'react'
import MailToButton from '../../src/components/MailToButton';

const Contact = () => {
    return (
        <div className='max-w-7xl mx-auto p-8'>

            <p className='text-center text-3xl m-3' style={{ fontFamily: 'Trajan' }}>Contact Me</p>

            <div className='p-8 text-center'>
                <p className='text-2xl p-2'>Email</p>
                {/* <p className='text-xl p-2'>jbunds@proton.me</p> */}
                <MailToButton
                    email='jbunds@proton.me'
                    label='jbunds@proton.me'
                    subject='Portfolio Inquiry'
                    className='inline-block text-2xl p-2 text-pink-cstm glow-pink'
                />
            </div>

        </div>
    );
};

export default Contact;
