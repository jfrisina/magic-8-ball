// imports
import React, { useState } from 'react';
import './App.css';

// data
const responses = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'Very doubtful',
];

// app code
const App = () => {
  // useState 
  const [responseData, setResponseData] = useState(null);
  // code to select randomly from the data
  const getNewAnswer = () => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    setResponseData(randomIndex);
  };
  // the code to display
  return (
    <div className="App">
      <h1>Ask a question and click the button to get an answer</h1>
      {responseData !== null ? (
        <>
          <h2>{responses[responseData]}</h2>
          <button onClick={getNewAnswer}>Get your answer</button>
        </>
      ) : (
        <button onClick={getNewAnswer}>Get your answer</button>
      )}
    </div>
  );
};

export default App;
