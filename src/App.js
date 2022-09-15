import WelcomeScreen from "./components/WelcomeScreen";
import './App.css';
import { useState } from "react";
import { targetPhraseContext, guessedLettersContext } from "./components/Context";
import GameScreen from "./components/GameScreen";

function App() {
  const [gameInProgress, setGameInProgress] = useState(false);
  const [targetPhrase, setTargetPhrase] = useState("SCRABBLE");
  const [guessedLetters, setGuessedLetters] = useState([]);

  return (
    <targetPhraseContext.Provider value={{ targetPhrase, setTargetPhrase }}>
      <guessedLettersContext.Provider value={{ guessedLetters, setGuessedLetters }}>
    <div className="App">
      <header className="App-header">
        <h1>Hangman</h1>
        <h2>New Game</h2>
        <h2>Help</h2>
      </header>
      {!gameInProgress ? <WelcomeScreen setGameInProgress={setGameInProgress}></WelcomeScreen> :
      <GameScreen/>}

    </div>
    </guessedLettersContext.Provider>
    </targetPhraseContext.Provider>
  );
}

export default App;
