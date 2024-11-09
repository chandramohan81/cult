import './App.css';
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Fitness from './components/Fitness';
import Sports from './components/Sports';
import Contact from './components/Contact';

function App() {
  return (
   
     <Router>
        <div>
          <Header />
          <Routes>
            
              <Route exact path='/' element={<Home />} />
              <Route path='/sports' element={<Sports />} />
              <Route path='/fitness' element={<Fitness />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/blog' element={<Blog />} />
           
            
          </Routes>
          <Footer />
        </div>
      </Router>
    
  );
}

export default App;


