import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setTimeout(() => setTime(() => Math.floor(Math.random()*3 + 1), 3000));
    setTimeout(() => setTime(() => 0), 3000);

    return () => {
      return clearTimeout(interval);
    };
  }, [time]);

  return (
    <>
      <div className="container">
        <div className={`spinner-${time}`}></div>
        
        {/* <div className={time===2 && "spinner-2"}></div>
        <div className={time===3 && "spinner-3"}></div> */}
        
      </div>
    </>
  );
}

export default App;
