import React from "react";
import "../App.css";
import "./Card.css";
function Card(props) {
  return (
    <>
      {" "}
      <div className='main-container'>
        <div className='container'>
          <h2>{props.header}</h2>
          <h4>{props.description}</h4>
          <img alt='' src={props.image} />
          <div className='small-container'></div>
          <div className='links'>
            <button>Share</button>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
