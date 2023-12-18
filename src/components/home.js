import React from 'react'

const Home = () => {
    return (
        <div className='main-box'>
            <div className='main-content'>
                <div className='main-heading'>
                    <h1 className='gametitle'>The Number Guesser</h1>
                </div>
                <div className='description'>
<p className='game-description'>
    <span className='greetings'>Hello everyone!</span>
    <span className='text-description'>It's a number guessing game. Let me give you some description before you start the game. When you press the start button, a new page will be opened. A two-digit random number will be generated and it will bw hidden (Of course!). You will be given 7 chances to guess the number correctly. We will give a hint everytime you guess a number in case it's wrong (if it's higher or lower). If you correctly guess the number,you win or else you'll lose.</span>
</p>
                    <button className='new-game' onClick={''}>
                       Start Game !
                    </button>


                </div>
            </div>
        </div>
    )
}

export default Home