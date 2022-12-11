import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Input, Textarea } from '@material-tailwind/react';
import { toast } from 'react-hot-toast';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

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
        <div id='contact' className='my-20 container mx-auto'>
            <p style={{textShadow:"0 3px 3px #b36417"}} className='text-5xl font-bold text-white text-center mb-16'>Contact Panel</p>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16'>
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
                    <Button variant='gradient' fullWidth color='brown' type='submit' size='lg' className='text-white mt-2'>Send</Button>
                </form>
                <div className='mt-5 md:mt-0'>
                    <p style={{textShadow:"0 3px 3px #b36417"}} className='mb-3 text-2xl md:text-3xl lg:text-5xl font-bold text-white'>Social Media Information</p>
                    <div className='flex gap-2'>
                        <a className='text-white hover:text-brown-200 duration-300 hover:translate-y-1 hover:translate-x-1 ease-in-out shadow' href="https://github.com/BayezidMostafa"><FaGithubSquare className='w-20 h-20 shadow-brown-500 shadow-md rounded'/></a>
                        <a className='text-white hover:text-brown-200 duration-300 hover:translate-y-1 hover:translate-x-1 ease-in-out shadow' href="https://www.facebook.com/dev.bayezid"><FaFacebookSquare className='w-20 h-20 shadow-brown-500 shadow-md rounded'/></a>
                        <a className='text-white hover:text-brown-200 duration-300 hover:translate-y-1 hover:translate-x-1 ease-in-out shadow' href="https://www.linkedin.com/in/bayezid-mostafa/"><FaLinkedin className='w-20 h-20 shadow-brown-500 shadow-md rounded'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};