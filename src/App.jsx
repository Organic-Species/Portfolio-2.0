import React from 'react';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Experince from './components/exp/exp';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/portfolio';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experince />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
