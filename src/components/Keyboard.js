import { useContext } from "react";
import { guessedLettersContext } from "./Context";

const Keyboard = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = alphabet.split("");
    const {guessedLetters, setGuessedLetters} = useContext(guessedLettersContext)

    return (
        <ul>
            {letters.map(letter => {
                return <button key={letter} onClick={() => {
                    setGuessedLetters(guessedLetters.concat([letter]));
                    console.log(guessedLetters)
                }}>{letter}</button>
            })}
        </ul>
    )
}

export default Keyboard;