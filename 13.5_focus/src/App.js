import React, { useEffect, useRef } from 'react';
import "./App.css"
function App() {
   const inputReference = useRef(null);

       useEffect(() => {
        inputReference.current.focus();
    }, []);
  return (
    <div className='container'>
      <form>
        <input type='text' ref={inputReference} placeholder='This has focus' />
        <input type='text' placeholder='No focus when we render' />
      </form>
    </div>
  );
}

export default App;
