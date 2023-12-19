import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
import "../ui1.css"

const Home = () => {
    return (
        <>
            <div className='main-box'>
                <Header />
                <div className='description'>
                        <span className='greetings'>Hello everyone!</span>
                        <span className='text-description'>It's a number guessing game. Let me give you some description before you start the game. When you press the start button, a new page will be opened. A two-digit random number will be generated and it will bw hidden (Of course!). You will be given 7 chances to guess the number correctly. We will give a hint everytime you guess a number in case it's wrong (if it's higher or lower). If you correctly guess the number,you win or else you'll lose.</span>
                    
                    <Link className='new-game'
                    to="/main">Start Game</Link>
                    


                </div>
            </div>
        </>

        // const Home = ({ switchComponent }) => {
        //     return (
        //       <div>
        //         <h2>Home Component</h2>
        //         <button onClick={() => switchComponent('main')}>Switch to Main</button>
        //       </div>
        //     );
        //   };

    )
}
export default Home