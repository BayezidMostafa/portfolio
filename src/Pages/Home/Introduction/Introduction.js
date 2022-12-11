import React from 'react';
import Typewriter from 'typewriter-effect';


const Introduction = () => {

    return (
        <section className="min-h-[80vh]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-6">
                <div className="flex items-center justify-center my-10 md:my-0 col-span-3">
                    <img src="https://i.ibb.co/khFksT5/face.png" alt="" />
                </div>
                <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="flex flex-col justify-center md:ml-10 mb-20 md:my-0 col-span-3">
                    <p className='text-brown-400 font-semibold text-xl sm:text-3xl text-center md:text-left lg:mb-[-16px]'>Hi there,</p>
                    <p className='text-white text-2xl sm:text-4xl text-center md:text-left'>My name is <span style={{ textShadow: "0 3px 3px #b36417" }} className='lg:text-6xl tracking-widest'>Bayezid</span></p>
                    <p className='text-white text-xl sm:text-2xl text-center md:text-left mt-2'>
                        I'm experienced in,
                        <Typewriter
                            options={{
                                strings: ['Front-End Development', 'React JS Development', 'MERN Stack Development'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
