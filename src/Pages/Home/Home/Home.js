import React from 'react';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Introduction/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;