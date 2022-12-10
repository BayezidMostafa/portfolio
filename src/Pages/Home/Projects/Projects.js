import React from 'react';
import Project from './Project';

const Projects = () => {

    const projects = [
        {
            image: "https://i.ibb.co/YRTHjTP/moto-dream.png",
            name: "MOTO DREAM",
            live: "https://moto-dream.web.app/",
            client: "https://github.com/BayezidMostafa/Moto_Dream_A_12_Client",
            server: "https://github.com/BayezidMostafa/Moto_Dream_A_12_Server",
            details: "Built by modern technologies like React JS, Tailwind CSS, node.js, express.js, MongoDB, Firebase, Stripe JS, Vercel, and many more. The most unique feature is the Dashboard."
        },
        {
            image: "https://i.ibb.co/JndC5y4/pro-s-guide.png",
            name: "PRO'S GUIDE",
            live: "https://pro-s-guid.web.app/",
            client: "https://github.com/BayezidMostafa/Pro-s_Guide_A_11_Client",
            server: "https://github.com/BayezidMostafa/-Pro-s_Guide_A_11_Server",
            details: "This website is based on a travel guider who provides a quality guide on traveling. Built by many technologies including, React JS, Tailwind CSS, node.js, express.js, MongoDB, Firebase, and many more."
        },
        {
            image: "https://i.ibb.co/TM9Cjp7/learning-pool.png",
            name: "LEARNING POOL",
            live: "https://learning-pool-3d1c8.web.app/",
            client: "https://github.com/BayezidMostafa/Learning_Pool_A_10_Client",
            server: "https://github.com/BayezidMostafa/Learning_Pool_A_10_Server",
            details: "An educational website with a lot of modern technologies including React JS, Tailwind CSS, node.js, express.js, firebase, etc. The most unique part of this website is the PDF downloader, Private route, etc."
        },
    ]

    return (
        <div className='container mx-auto'>
            <p style={{textShadow:"0 3px 3px #b36417"}} className='md:text-5xl font-semibold text-white text-center my-20'>Project Showcase</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map((project, index) => <Project key={index} project={project} />)
                }
            </div>
        </div>
    );
};

export default Projects;