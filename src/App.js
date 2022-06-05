import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Links from './components/Links/Links';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="app">
      <Header/>
      <Links/>  
      <Hero />
      <Products/>
    </div>
  );
}

export default App;
