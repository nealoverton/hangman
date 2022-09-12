const WelcomeScreen = ({setGameInProgress}) => {
    return (
        <div>
            <h1>Wlcome to Hangman!</h1>
            <p>You will be given a word or phrase with the letters missing.<br/>Click on the letters you think might be needed to fill in the word or phrase, but be careful:<br/>make ten incorrect guesses and you're done for!</p>
            <button onClick={() => setGameInProgress(true)}>Start</button>
        </div>
    )
}

export default WelcomeScreen;