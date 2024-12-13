import React from 'react';
import './css/style.css';
import Nav from './Nav';
import Main from './Main';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Details from './Details';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Main />
      <Specials />
      <Testimonials />
      <Details />
      <Footer />
    </div>
  );
}

export default App;