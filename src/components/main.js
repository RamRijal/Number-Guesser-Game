import React, { useEffect, useState } from 'react'
import Header from './header'
import ".././ui1.css"

const answer = Math.floor(Math.random() * 100)
console.log(answer);

const Main = () => 
{
  let [guess, setGuess] = useState('') //for every new guess storage
  let [guessedNumbers, setGuessedNumbers] = useState([]) //guessednumbers are stored and updated

  let handleGuess = (e) => {
    e.preventDefault();

    if (Number(guess) === answer) {
      window.alert(`Congratulations! You guessed ${guess} which is the right number.`);
      
    }
    else {
      if (Number(guess) < answer) {
        window.alert(`The number is higher than ${guess}`);
      } else {
        window.alert(`The number is lower than ${guess}`);
      }
    }
    setGuessedNumbers([])
    let ges = (guessedNumbers === null) ? setGuessedNumbers([`${guess}`])
      : setGuessedNumbers([...guessedNumbers, `${guess}\n`])
    console.log(ges);

  }
  useEffect(() => {

  }, []
  )

  return (
    <div className='App'>
      <Header />
      <div className='game-content'>
        <h2 className='number'>The number is ...</h2>

        <div className='guess-area'>
          <p className='instruction'>Enter your area:</p>
          <input
            type="number"
            id="guess"
            name="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)} />

          <button onClick={handleGuess}>Submit</button>

          <br />

          <p className='guessednum-title'>Guessed numbers:</p>
          <div className='guessednums'>
            {Array.isArray(guessedNumbers) &&
              // // map through the array of guessed numbers and display them in a list
              guessedNumbers.map((item, i) => {
                return (<div key={i} className='guessednum'>{item}</div>)
              })
            }
          </div>


        </div>

      </div>
    </div>


  )
}
export default Main