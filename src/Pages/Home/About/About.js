import React from 'react';
import Logo from '../../../assets/about.png'

const About = () => {
    return (
        <div id='about' className='my-10 container mx-auto'>
            <p style={{ textShadow: "0 3px 3px #b36417" }} className='text-5xl text-center font-bold text-white'>About Me</p>
            <div className='md:flex justify-center items-center'>
                <div className='w-full'>
                    <img className='w-2/4 mx-auto my-10' src={Logo} alt="" />
                </div>
                <div className='w-4/5 sm:w-full my-10'>
                    <p className='text-xl text-white'>
                        Hey there! My name is Bayezid Mostafa. Over the past year, I have been improving my web development skills. Even a year ago, I was completely ignorant of web development. But by adhering to the right principles, I improved my Web Development skills.
                    </p>
                    <p className='text-xl text-white mt-3'>
                        Currently, I'm working in MERN Stack development. Also, I have extensive knowledge of HTML, CSS, CSS3, Tailwind CSS, and JavaScript. By having reasonable patience I can be able to overcome any sort of problem in web development following my tech stack. I am very strongly in the statement "Until the objective is satisfied, I work hard for it."
                    </p>
                    <p className='text-xl text-white mt-3'>
                        My major goal at this point is to learn more about the MERN Stack and upcoming web development technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;