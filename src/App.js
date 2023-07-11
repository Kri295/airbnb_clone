import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './data';

function App() {
  const card = cardData.map(data => {
    return (
    <Card 
      key = {data.id}
      data = {data}
    />
    )
  })
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className='cards-list'>
        {card}
      </section>
    </div>
  );
}

export default App;
