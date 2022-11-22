import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const giftContext = createContext();

function App() {
  const [gifts, setGifts] = useState([]);

  return (
    <>
      <giftContext.Provider value={{ gifts, setGifts }}>
        <Grandfather />
      </giftContext.Provider>
    </>
  );
}

export default App;

function Grandfather() {
  return (
    <div>
      <Father />
    </div>
  );
}

function Father() {
  const { gifts, setGifts } = useContext(giftContext);
  const giftArray = ["watergun", "basketball", "cash"];
  useEffect(() => {
    setGifts(giftArray);
  }, []);

  return (
    <div>
      <Son />
    </div>
  );
}

function Son() {
  const { gifts, setGifts } = useContext(giftContext);
  return (
    <div>
      <Grandson />
      {gifts.map((e, i) => {
        return <div key={i}>{e}</div>;
      })}
    </div>
  );
}

function Grandson() {
  return <div></div>;
}
