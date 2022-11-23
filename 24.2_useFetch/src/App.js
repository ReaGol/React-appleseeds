import React from 'react';
import useFetch from './Hooks/useFetch';


function App() {
const {data, loading, error} = useFetch('https://api.chucknorris.io/jokes/random')


  return (
    <div>
      {error && <div>{error.message}</div> }
      {loading && <div>Loading...</div>}
      {data && (
        <div>
            <div>{data.value}</div>
        </div>
      )}
    </div>
  );
}

export default App