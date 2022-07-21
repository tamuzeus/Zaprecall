import ReactDOM from "react-dom"
import React from "react"
import Frontal from "./Frontal"
import Game from "./Game"

function App(){

    return(
        <React.Fragment>
            {/* <Frontal /> */}
            <Game />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'))

