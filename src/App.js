import WelcomeScreen from "./components/WelcomeScreen";
import './App.css';
import { useState } from "react";

function App() {
  const [gameInProgress, setGameInProgress] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hangman</h1>
        <h2>New Game</h2>
        <h2>Help</h2>
      </header>
      {!gameInProgress ? <WelcomeScreen setGameInProgress={setGameInProgress}></WelcomeScreen> :
      <p>game</p>}

    </div>
  );
}

export default App;
