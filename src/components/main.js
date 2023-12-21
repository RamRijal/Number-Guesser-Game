import React, { useState } from 'react'
import Header from './header'
import ".././ui1.css"

const Main = () => {

  let [guess, setGuess] = useState('') //for every new guess storage
  let [guessedNumbers, setGuessedNumbers] = useState('') //guessednumbers are stored and updated
  const answer=Math.floor(Math.random()*100)
  console.log(answer);
  
  let handleSubmit = () => {//checks the given guess for multiple conditions
    const correctAnswer = (guess === answer) ? alert("Congratulations! You guessed the number correctly.")//Right answer
      : guess < answer ? alert("The number is higher than your guessed number")//Lower answer
        : guess > answer ? alert("The number is lower than your guessed number")//Higher answer
          : null
    return correctAnswer
    
    setGuessedNumbers((prevGuessedNumbers) => [...prevGuessedNumbers, guess]);
  }
  return (
    <div className='App'>
      <Header />
      <div className='game-content'>
        <h2 className='number'>The number is ...</h2>
        <div className='guess-area'>
          <p className='instruction'>Enter your area:</p>
          <input
            type="text"
            id="guess"
            name="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)} />
          <button onClick={handleSubmit}>Submit</button>

          <br />

          <p className='guessednum-title'>Guessed numbers:</p>
          <div className='guessednums'>
            {Array.isArray(guessedNumbers) &&
              // // map through the array of guessed numbers and display them in a list
              guessedNumbers.map((item, i) => {
                return (<li key={i} className='guessednum'>{item}</li>)
              })

            }
          </div>


        </div>

      </div>
    </div>


  )
}


// const Main = ({ switchComponent }) => {
//   return (
//     <div>
//       <h2>Main Component</h2>
//       <button onClick={() => switchComponent('home')}>Switch to Home</button>
//     </div>
//   );
// };
export default Main