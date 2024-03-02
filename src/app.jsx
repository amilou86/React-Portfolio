import React from "react";
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}


export default App;