import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Projects from'./components/Projects';


function App() {
  return (
    <div>
      <Navigation/>
      <Header />
      <Stack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
