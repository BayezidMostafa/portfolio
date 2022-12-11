import React from 'react';
import About from '../About/About';
import { ContactUs } from '../Contact/Contact';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Introduction />
            <Skills />
            <Projects />
            <About/>
            <ContactUs />
        </div>
    );
};

export default Home;