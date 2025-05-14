import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves] = useState({blue :0 , red:0, yellow:0, green:0}); 

    let updateBlue = () => {
        setMoves((prev) => ({...prev, blue: prev.blue + 1}));
    }

    let updateRed = () => {
        setMoves((prev) => ({...prev, red: prev.red + 1}));
    }
    let updateYellow = () => {
        setMoves((prev) => ({...prev, yellow: prev.yellow + 1}));
    }
    return <div>
        <p>Game Begins!!</p>
        <button onClick={updateBlue}>Blue: {moves.blue}</button>
        <button onClick={updateRed}>Red: {moves.red}</button>
        <button onClick={updateYellow}>Yellow: {moves.yellow}</button>
        
    </div>
}