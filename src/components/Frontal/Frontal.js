import React from "react"
import "./Frontal.css"

export default function Frontal() {
    const [setFrontalpage, setRemoveFrontalpage] = React.useState("frontalpage backfrontalpage")
    return (
        <div className={setFrontalpage} onClick={() => { if (setFrontalpage === "frontalpage backfrontalpage") { setRemoveFrontalpage("frontalpage") } }}>
            <div className="frontallogoarea">
                <img src="img/logo.png" className="frontallogo" />
            </div>
            <div className="frontaltittlearea"><h1>ZapRecall</h1></div>
            <div className="frontalbottom"><p className="beginrecall">Iniciar Recall!</p></div>
        </div>
    )
}