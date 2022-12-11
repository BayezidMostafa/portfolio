import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Project from './Project';

const Projects = () => {

    const { data: projects = [], isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await axios.get('https://portfolio-server-ten.vercel.app/projects')
            return res.data
        }
    })

    return (
        <div id='projects' className='container mx-auto'>
            <p style={{ textShadow: "0 3px 3px #b36417" }} className='md:text-5xl font-semibold text-white text-center my-20'>Project Showcase</p>
            <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    projects.map((project, index) => <Project key={index} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;