// import statements
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // data that we will access
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
  
  //set variables
  const responseLength = responses.length
  const randomizedResponse = Math.floor(Math.round(Math.random() * responseLength))

  // set use state
  const [responseData, setResponseData] = useState(null)

  // set use effect
  useEffect(() => {
    setResponseData(randomizedResponse)
  }, [responseData, responses]) // this runs on mount and also if whatever is in the brackets have changes since the last render

  function getNewAnswer() {
    setResponseData(randomizedResponse)
  }
  return (
    <>
      <div onClick={() => setResponseData(!responseData)}>
        <h1>Ask a question and know your future</h1>
        <h2>{ responses[responseData]}</h2>
        <button onClick={getNewAnswer}>Get your answer</button>
      </div>
    </>
  )
}
export default App
