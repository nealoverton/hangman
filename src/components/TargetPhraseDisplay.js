import { useContext } from "react";
import { targetPhraseContext, guessedLettersContext } from "./Context";

const TargetPhraseDisplay = () => {
    const {targetPhrase} = useContext(targetPhraseContext);
    const {guessedLetters} = useContext(guessedLettersContext)
    const letters = targetPhrase.split("");

    return (
        <ul>
            {letters.map((letter, index) => {
                return guessedLetters.includes(letter) ? <p key={index}> {letter} </p> : <p> _ </p>
            })}
        </ul>
    )
}

export default TargetPhraseDisplay;