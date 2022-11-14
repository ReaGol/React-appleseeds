import { useState, useEffect } from "react";
import "./App.css";



function App() {
 
    const [favoriteColor, setFavoriteColor] = useState("blue");
  

  useEffect(() => {
    setTimeout(() => setFavoriteColor("red"), 1000);
  }, [favoriteColor]);
  return (
    <div>
      <h1>My favorite color is {favoriteColor}</h1>
      <div></div>
    </div>
  );
}

export default App;
