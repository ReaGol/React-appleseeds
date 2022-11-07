

function App() {
      const data = ['hello', 'world'];

    const getArrayAsWord = (arrOfStr) => {
        return arrOfStr.map((word) => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(' ');
    };
    return <div className="App">{getArrayAsWord(data)}</div>;
};

export default App;
