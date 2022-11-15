import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Avatar from "./components/Avatar";
function App() {
  const [avatarsArray, setAvatarsArray] = useState("");
  const [searchInput, setSearchInput] = useState("");
  

  useEffect(() => {
        async function getRandomAvatar() {
          try{
          const response = await axios.get(
            "https://randomuser.me/api/?results=10"
  
          );
          setAvatarsArray(() => {
           return response.data.results.map((person) => {
              return {
                name: `${person.name.title} ${person.name.first} ${person.name.last}`,
                picture: person.picture.large,
              };
            });
          });
        }catch(error) {
            console.log(error);
          }
        }
        getRandomAvatar();
      
      
  }, []);
 console.log(avatarsArray);
  return (
    <div className='App'>
      <div className='field'>
        <h1>Avatars</h1>
        
        {avatarsArray && <Avatar avatarsArray={avatarsArray}></Avatar>}
      </div>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default App;
