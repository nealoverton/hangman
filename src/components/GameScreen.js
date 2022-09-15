import Keyboard from "./Keyboard";
import PhraseDisplay from "./TargetPhraseDisplay";

const GameScreen = () => {
    const phrase = "scrabble";
    return (
        <div>
            <PhraseDisplay phrase={phrase}/>
            <Keyboard/>
        </div>
    )
}

export default GameScreen;