import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import RedDots from './components/RedDots';
import AboutMe from './components/AboutMe';
import Education from './components/Education';

function App() {
    return (
        <div className="app">
            <RedDots count={30} />
            <Header />
            <Home />
            <AboutMe />
            <Education />
        </div>
    );
}
  
export default App;
