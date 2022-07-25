import React from "react"
import "./Footer.css"
import { questionarrays } from "../Deck/shuffleArray"
import shuffleArray from "../Deck/shuffleArray"

function EndMenssage({ icons }) {

    let principal, text

    if (icons.length === 4) {
        if (icons.includes("close-circle")) {
            principal = "😥 Putz..."
            text = "Ainda faltam alguns... mas não desanime!"
        } else if (icons.includes("help-circle")) {
            principal = "🥳 Parabéns!"
            text = "Você não esqueceu de nenhum flashcard!"
        }
    }

    //se pelo menos um close-circle existir, mensagem de tristeza
    //se pelo menos um help-circle existir, mensagem de parabens
    //se todos forem checkmark-circle, mensagem de zap!

    return (
        <div className="endmenssage">
            <p className="principalendmsg">{principal}</p>
            <p className="endtext">{text}</p>
        </div>
    )
}

export default function Footer({ icons }) {

    function FooterPoints({ value }) {

        let condition;
        if (value === "checkmark-circle") {
            condition = "playimg check"
        } else if (value === "help-circle") {
            condition = "playimg doubt"
        } else if (value === "close-circle") {
            condition = "playimg nope"
        }
        return (
            <p className="footerpoints"> <ion-icon name={value} class={condition}></ion-icon> </p>
        )
    }


    return (
        <footer className="footer">
            <div className="concludezone">
                <div className="endmenssage">

                    < EndMenssage
                        icons={icons}
                    />

                </div>

                <p className="concludes">{icons.length}/{shuffleArray(questionarrays).length} CONCLUÍDOS</p>

                <div className="footerbuttons">

                    {icons.map((value, index) => <FooterPoints
                        value={value}
                        key={index} />)}

                </div>
            </div>
        </footer>
    )
}