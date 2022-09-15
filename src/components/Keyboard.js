const Keyboard = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const letters = alphabet.split("");

    return (
        <ul>
            {letters.map(letter => {
                return <button>{letter}</button>
            })}
        </ul>
    )
}

export default Keyboard;