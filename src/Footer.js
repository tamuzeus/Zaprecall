export default function Footer() {
    return (
        <footer>
            <p className="concludezone">
            <div className="endmenssage">
                    <p className="principalendmsg">Ok!</p>
                    <p className="endtext">Fim do jogo!</p>
                </div>
                <p className="concludes">0/4 CONCLUÍDOS</p>
                <div className="footerbuttons">
                    <p className="footerpoints"> <ion-icon name="checkmark-circle" class="playimg check"></ion-icon> </p>
                    <p className="footerpoints"> <ion-icon name="close-circle" class="playimg nope"></ion-icon> </p>
                    <p className="footerpoints"> <ion-icon name="help-circle" class="playimg doubt"></ion-icon> </p>
                    <p className="footerpoints"> <ion-icon name="help-circle" class="playimg doubt"></ion-icon> </p>
                </div>
            </p>
        </footer>
    )
}