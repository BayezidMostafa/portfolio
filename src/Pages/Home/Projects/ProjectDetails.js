import { Button } from '@material-tailwind/react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
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
                    <p style={{ textShadow: "0 2px 5px brown" }} className='text-white text-xl sm:text-2xl md:text-3xl font-bold'>Project Name: <span>{name}</span></p>
                    <p style={{ textShadow: "0 2px 5px brown" }} className='text-white text-base font-semibold'>Build Duration: {time} Days</p>
                    <div className='mt-3'>
                        <div className='w-full sm:w-2/3 md:w-2/5 mt-2'>
                            <a href={live} target="_blank" className="" rel="noreferrer">
                                <Button variant='gradient' color='brown' fullWidth>Live Link</Button>
                            </a>
                        </div>
                        <div className='w-full sm:w-2/3 md:w-2/5 mt-2'>
                            <a href={client} target="_blank" className="" rel="noreferrer">
                                <Button variant='gradient' color='brown' fullWidth>Server Side Code</Button>
                            </a>
                        </div>
                        <div className='w-full sm:w-2/3 md:w-2/5 mt-2'>
                            <a href={server} target="_blank" className="" rel="noreferrer">
                                <Button variant='gradient' color='brown' fullWidth>Client Side Code</Button>
                            </a>
                        </div>
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