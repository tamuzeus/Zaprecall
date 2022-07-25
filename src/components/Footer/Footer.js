import "./Footer.css"


function EndMenssage(props) {

    const { principal, text } = props

//lógica: se o button for true, add um contador e add a esfera do button no inferior

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

function Concludes(props) {

    const { quant, quantrs } = props

    return (
        <p className="concludes">{quant}/{quantrs} CONCLUÍDOS</p>
    )
}

function FooterPoints(props) {

    const { points, condition } = props

    // checkmark-circle
    // close-circle
    // help-circle

    //playimg check
    //playimg nope
    //playimg doubt

    return (
        <p className="footerpoints"> <ion-icon name={points} class={condition}></ion-icon> </p>
    )
}


export default function Footer() {




    return (
        <footer className="footer">
            <div className="concludezone">
                <div className="endmenssage">

                    < EndMenssage
                        principal="ok"
                        text="ok" />

                </div>

                <Concludes
                    quant="2"
                    quantrs="4" />

                <div className="footerbuttons">

                    <FooterPoints
                        points="checkmark-circle"
                        condition="playimg check" />

                </div>
            </div>
        </footer>
    )
}