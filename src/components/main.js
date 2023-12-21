import React from 'react'
import Header from './header'
import ".././ui1.css"

const Main = () => {
  return (
    <div className='App'>
    <Header />
        <div className='game-content'>
          <h2 className='number'>The number is ...</h2>
          <div className='guess-area'>
            <p className='instruction'>Enter your area:</p>
            <input type="text" id="guess" name="guess" /><br />
            <p className='guessednum-title'>Guessed numbers:</p>
            <div className='guessednums'></div>


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