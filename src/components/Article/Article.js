import React from "react"
import "./Article.css"
import {questionarrays} from "../Deck/shuffleArray"
import shuffleArray from "../Deck/shuffleArray"

function Questions(props) {

    const {number, question, asnwer, open, flip, icon, risck, color, button } = props;

    const [isopen, setOpen] = React.useState(open)
    const [isflip, setFlip] = React.useState(flip)
    const [isicon, setIcon] = React.useState(icon)
    const [isrisck, setRisck] = React.useState(risck)
    const [iscolor, setColor] = React.useState(color)
    const [isbutton, setButton] = React.useState(button)

    function Deflip() {
        setOpen(false)
        setFlip(false)
    }

    function DontR() {
        setIcon("close-circle")
        setRisck("questionnumber risck nope")
        setColor("playimg nope")
    }

    function Almost() {
        setIcon("help-circle")
        setRisck("questionnumber risck doubt")
        setColor("playimg doubt")
    }

    function Zap() {
        setIcon("checkmark-circle")
        setRisck("questionnumber risck check")
        setColor("playimg check")
    }


    return (
        <div className={isopen ? ("questionarea open") : ("questionarea close")}>
            <div className="questionbegin">
                <p className={isrisck}>Pergunta {number}</p>
                <button className="questionplay" disabled={isbutton} onClick={() => { setButton(true); setOpen(true) }}> <ion-icon name={isicon} class={iscolor}></ion-icon> </button>
            </div>

            <div className="card">
                <div className={isflip ? ("front-face face on") : ("front-face face")}>
                    <p className="questiontext">{question}</p>
                    <div className="flipicon"><img src="img/setinha.png" class="arrow" onClick={() => setFlip(true)} /></div>
                </div>

                <div className={isflip ? ("back-face face off") : ("back-face face")}>
                    <div className="textasnwer">
                        <p>{asnwer}</p>
                    </div>
                    <div className="questionbuttonszone">
                        <div className="questionbutton dontremeber" onClick={() => { Deflip(); DontR() }}><p className="buttontext">Não lembrei</p></div>
                        <div className="questionbutton almost" onClick={() => { Deflip(); Almost() }}><p className="buttontext">Quase não lembrei</p></div>
                        <div className="questionbutton zap" onClick={() => { Deflip(); Zap() }}><p className="buttontext">Zap!</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function Article() {


    return (
        <article className="article">
            {shuffleArray(questionarrays).map((value, index) => <Questions
                key={index}
                number={index + 1}
                question={value.question}
                asnwer={value.asnwer}
                value={value.open}
                flip={value.flip}
                icon={value.icon}
                risck={value.risck}
                color={value.color}
                button={value.button}
            />)}
        </article>
    )
}