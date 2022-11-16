import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const baseURL = "https://6374aa1608104a9c5f856b46.mockapi.io/Tweets";

export default function App() {
  const [tweets, setTweets] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}/`).then((response) => {
      setTweets(response.data);
    });
  }, []);

  async function createTweet() {
    const { data } = await axios.post(baseURL, { tweet: inputValue });

    setTweets((prev) => [...prev, data]); 
  }

  function updateTweet(id) {
    axios
      .put(`${baseURL}/${id}`, {
        tweets: tweets,
      })
      .then((response) => {
        setTweets(response.data);
      });
  }

  async function deleteTweet(id) {
    await axios.delete(`${baseURL}/${id}`);
    setTweets(tweets.filter((t) => t.id !== id));
  }

  if (!tweets) return "no tweet";
  /*console.log(tweets.map(tweet => 
  tweet.id
))*/
  //console.log(inputValue);
  //tweets.filter(t => typeof t.tweet != 'string').forEach(t => console.log('COCO:'+t.id+'->'+t.tweet))
  return (
    <div>
      {tweets.map((tweet, photo) => (
        <div>
          <h1>{tweet.Username}</h1>

          <div key={tweet.id}>
            <p>{tweet.tweet}</p> <br />
            <img src={tweet.photo} alt={photo} />
            <button onClick={() => updateTweet(tweet.id)}>Edit Tweet</button>
            <button
              onClick={() => {
                deleteTweet(tweet.id);
              }}
            >
              Delete Tweet
            </button>
          </div>
        </div>
      ))}

      <br />
      <input
        value={inputValue}
        placeholder='Tweet'
        onChange={({ target: { value } }) => setInputValue(value)}
      />
      <button onClick={createTweet}>New Tweet</button>
    </div>
  );
}
