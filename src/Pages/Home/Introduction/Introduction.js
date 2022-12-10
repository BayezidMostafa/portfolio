import React from 'react';

const Introduction = () => {
    return (
        <section className="min-h-[80vh]">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <p className='text-white sm:text-3xl'>Hi there!</p>
                    <p className='text-white sm:text-3xl'>My name is <span className='text-4xl'>Bayezid Mostafa</span></p>
                    <p className='text-white sm:text-2xl mt-2'>I'm a MERN Stack Developer</p>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.ibb.co/khFksT5/face.png" alt="" className="object-contain max-h-[50vh]" />
                </div>
            </div>
        </section>
    );
};

export default Introduction;