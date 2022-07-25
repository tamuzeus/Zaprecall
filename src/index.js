import ReactDOM from "react-dom"
import React from "react"
import Frontal from "./components/Frontal/Frontal"
import Game from "./components/Game/Game"
import "./reset.css"
import "./index.css"

function App(){
    
    return(
        <>
            <Frontal />
            <Game />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))

