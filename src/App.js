import React from 'react'
import logo from './logo.svg';
import './App.css';

import heroes from './data.js'

import Card from './components/card'

function App() {
  const [selCard, setSelCard] = React.useState(false)

  const selectedCard = (a) => {
    if (selCard === false) {
      setSelCard(a)
    }
  }

  const cardData = heroes.map((item) => <section className="c" key={item.id}><Card name={item.localized_name} image={item.image} item={item}  select={selectedCard}/></section>)

  return (
    <div className="App">
      <div className="playing-cards">
        {cardData}
      </div>
      <hr />
      <div className="selected">
        {selCard ? (<Card name={selCard.localized_name} image={selCard.image} />) : (<p>select your card</p>)}
      </div>
    </div>
  );
}

export default App;
