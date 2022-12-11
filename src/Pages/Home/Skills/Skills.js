import React from 'react';
import { DiHtml5, DiCss3, DiJavascript, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import express_logo from '../../../assets/express.png'


const Skills = () => {
    return (
        <div id='skills' className='container mx-auto'>
            <div>
                <p style={{ textShadow: "0 3px 3px #b36417" }} className='text-xl sm:text-3xl md:text-5xl text-white font-semibold text-center'>Technology Stacks</p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10 mt-16'>
                <div className='hover:scale-110 ease-in-out duration-300'>
                    <DiHtml5 className='text-orange-900 bg-gray-800/[0.4] hover:bg-brown-700 hover:bg-opacity-50 hover:shadow-md duration-300 hover:shadow-brown-600 w-32 h-32 mx-auto border p-2 rounded-xl' />
                </div>
                <div className='hover:scale-110 ease-in-out duration-300'>
                    <DiCss3 className='text-blue-700 bg-gray-800/[0.4] hover:bg-brown-700 hover:bg-opacity-50 hover:shadow-md duration-300 hover:shadow-brown-600 w-32 h-32 mx-auto border p-2 rounded-xl' />
                </div>
                <div className='hover:scale-110 ease-in-out duration-300'>
                    <SiTailwindcss className='text-light-blue-300 bg-gray-800/[0.4] hover:bg-brown-700 hover:bg-opacity-50 hover:shadow-md duration-300 hover:shadow-brown-600 w-32 h-32 mx-auto border p-2 rounded-xl' />
                </div>
                <div className='hover:scale-110 ease-in-out duration-300'>
                    <DiJavascript className='text-yellow-600 bg-gray-800/[0.4] hover:bg-brown-700 hover:bg-opacity-50 hover:shadow-md duration-300 hover:shadow-brown-600 w-32 h-32 mx-auto border p-2 rounded-xl' />
                </div>
                <div className='hover:scale-110 ease-in-out duration-300'>
                    <DiReact className='text-light-blue-800 bg-gray-800/[0.4] hover:bg-brown-700 hover:bg-opacity-50 hover:shadow-md duration-300 hover:shadow-brown-600 w-32 h-32 mx-auto border p-2 rounded-xl' />
                </div>
                <div className='hover:scale-110 ease-in-out duration-300'>
                    <DiNodejsSmall className='text-green-600 bg-gray-800/[0.4] hover:bg-brown-700 hover:bg-opacity-50 hover:shadow-md duration-300 hover:shadow-brown-600 border rounded-xl w-32 h-32 mx-auto' />
                </div>
                <div className='hover:scale-110 ease-in-out duration-300'>
                    <img className='mx-auto h-32 w-32 border  bg-gray-800/[0.4] hover:bg-brown-700 hover:bg-opacity-50 hover:shadow-md duration-300 hover:shadow-brown-600 rounded-xl p-7' src={express_logo} alt="" />
                </div>
                <div className='hover:scale-110 ease-in-out duration-300'>
                    <DiMongodb className='text-green-900 bg-gray-800/[0.4] hover:bg-brown-700 hover:bg-opacity-50 hover:shadow-md duration-300 hover:shadow-brown-600 w-32 h-32 mx-auto border p-2 rounded-xl' />
                </div>
            </div>
        </div>
    );
};

export default Skills;