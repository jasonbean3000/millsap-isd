import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Masterplan from './components/Masterplan/Masterplan';
import MillsapElementary from './components/Millsap Elementary/MillsapElementary';
import MillsapHighSchool from './components/MillsapHighSchool/MillsapHighSchool';
import MillsapMiddleSchool from './components/MillsapMiddleSchool/MillsapMiddleSchool';
import ScrollToTop from './utilities/ScrollToTop';

function App() {

  

  return (
    <Router>
      <div className='header'>
      <Header />
      </div>
      
        <main className='main'>
          <ScrollToTop>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/masterplan'>
              <Masterplan />
            </Route>
            <Route path='/millsapelementary'>
              <MillsapElementary />
            </Route>
            <Route path='/millsapmiddle'>
              <MillsapMiddleSchool />
            </Route>
            <Route path='/millsaphighschool'>
              <MillsapHighSchool />
            </Route>
          </ScrollToTop>
        </main>
      <div className='footer'>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
