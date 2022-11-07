import React from 'react';
import "./App.css";
import "./components/Card.css"
import Card from './components/Card';


const cardList = [
  {
    header: "Yummy Cupcakes",
    description: "Chocolate and Hazelnuts",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    header: "Red Velvet",
    description: "Raspberries and Cream",
    image:
      "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    header: "Vanilla Heaven",
    description: "Plain with Sprinkles",
    image:
      "https://images.unsplash.com/photo-1599785209796-786432b228bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];


function App() {
  return (
    <div className='App'>
      {cardList.map((card)=><Card {...card} />)}
    </div>
  );
}

export default App;
