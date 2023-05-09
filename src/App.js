import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
