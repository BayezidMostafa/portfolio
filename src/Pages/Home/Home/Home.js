import React from 'react';
import { ContactUs } from '../Contact/Contact';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Introduction/>
            <Skills/>
            <Projects/>
            <ContactUs/>
        </div>
    );
};

export default Home;