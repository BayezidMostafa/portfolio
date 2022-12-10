import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Input, Textarea } from '@material-tailwind/react';
import { toast } from 'react-hot-toast';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4h4ufyi', 'template_7hk7v4r', form.current, 'HTs7vzUbkC-Gb_rYU')
            .then((result) => {
                console.log(result.text);
                toast.success('Email Send Successfully')
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='my-20 container mx-auto'>
            <p style={{textShadow:"0 3px 3px #b36417"}} className='text-5xl text-white text-center mb-16'>Contact Panel</p>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <form className='text-white' ref={form} onSubmit={sendEmail}>
                    <div className=''>
                        <Input type='text' name="user_name" color="brown" label="Your Name" />
                    </div>
                    <div className='mt-3'>
                        <Input type='email' name="user_email" color='brown' label='Email' />
                    </div>
                    <div className='mt-3'>
                        <Textarea label='Message' color='brown' name="message" />
                    </div>
                    <Button fullWidth color='brown' type='submit' size='lg' className='text-white mt-2'>Send</Button>
                </form>
                <div>

                </div>
            </div>
        </div>
    );
};