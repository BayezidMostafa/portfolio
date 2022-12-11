import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Slider from './Slider';

const ProjectDetails = () => {
    const details = useLoaderData();
    const { project_view, name, time, client, live, server, more_details } = details;
    console.log(details);
    return (
        <div className='container mx-auto mb-20'>
            <div className=''><Slider project_view={project_view} /></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-5'>
                <div>
                    <p style={{ textShadow: "0 2px 5px brown" }} className='text-white sm:text-2xl md:text-3xl font-bold'>Project Name: <span>{name}</span></p>
                    <p style={{ textShadow: "0 2px 5px brown" }} className='text-white text-xl font-semibold'>Build Duration: {time} Days</p>
                    <div className='mt-3'>
                        <a href={live} target="_blank" className="py-2 px-3 rounded bg-white hover:bg-brown-600 hover:text-white duration-200" rel="noreferrer">Live Link</a>
                        <a href={client} target="_blank" className="py-2 px-3 ml-2 rounded bg-white hover:bg-brown-600 hover:text-white duration-200" rel="noreferrer">Client Side Code</a>
                        <a href={server} target="_blank" className="py-2 px-3 ml-2 rounded bg-white hover:bg-brown-600 hover:text-white duration-200" rel="noreferrer">Server Side Code </a>
                    </div>
                    <p className='text-xl text-white mt-3'>Technology Used: <span className='animate-pulse'>Coming Soon...</span></p>
                </div>
                <div>
                    <p className='text-white text-lg'><span className='font-bold text-brown-500'>Project Details:</span> {more_details}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;