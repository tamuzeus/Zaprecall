export default function Article() {
    return (
        <article>
            <div className="questionarea not">
                <div className="questionbegin">
                    <p className="questionnumber">Pergunta 1</p>
                    <p className="questionplay"> <ion-icon name="play-outline" class="playimg"></ion-icon> </p>
                </div>

                <div className="card">
                    <div className="front-face face">
                        <p className="questiontext">O que é um pato?</p>
                        <div className="flipicon"><img src="img/setinha.png" class="arrow" /></div>
                    </div>

                    <div className="back-face face">
                        <div className="textasnwer">
                            <p>É uma Ave!</p>
                        </div>
                        <div className="questionbuttonszone">
                            <div className="questionbutton dontremeber"><p className="buttontext">Não lembrei</p></div>
                            <div className="questionbutton almost"><p className="buttontext">Quase não lembrei</p></div>
                            <div className="questionbutton zap"><p className="buttontext">Zap!</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="questionarea not">
                <div className="questionbegin">
                    <p className="questionnumber risck nope">Pergunta 2</p>
                    <p className="questionplay"> <ion-icon name="close-circle" class="playimg nope"></ion-icon> </p>
                </div>

                <div className="card">
                    <div className="front-face face">
                        <p className="questiontext">O que é um pato?</p>
                        <div className="flipicon"><img src="img/setinha.png" class="arrow" /></div>
                    </div>

                    <div className="back-face face">
                        <div className="textasnwer">
                            <p>É uma Ave!</p>
                        </div>
                        <div className="questionbuttonszone">
                            <div className="questionbutton dontremeber"><p className="buttontext">Não lembrei</p></div>
                            <div className="questionbutton almost"><p className="buttontext">Quase não lembrei</p></div>
                            <div className="questionbutton zap"><p className="buttontext">Zap!</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="questionarea not">
                <div className="questionbegin">
                    <p className="questionnumber risck check">Pergunta 3</p>
                    <p className="questionplay"> <ion-icon name="checkmark-circle" class="playimg check"></ion-icon> </p>
                </div>

                <div className="card">
                    <div className="front-face face">
                        <p className="questiontext">O que é um pato?</p>
                        <div className="flipicon"><img src="img/setinha.png" class="arrow" /></div>
                    </div>

                    <div className="back-face face">
                        <div className="textasnwer">
                            <p>É uma Ave!</p>
                        </div>
                        <div className="questionbuttonszone">
                            <div className="questionbutton dontremeber"><p className="buttontext">Não lembrei</p></div>
                            <div className="questionbutton almost"><p className="buttontext">Quase não lembrei</p></div>
                            <div className="questionbutton zap"><p className="buttontext">Zap!</p></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="questionarea not">
                <div className="questionbegin">
                    <p className="questionnumber risck doubt">Pergunta 4</p>
                    <p className="questionplay"> <ion-icon name="help-circle" class="playimg doubt"></ion-icon> </p>
                </div>

                <div className="card">
                    <div className="front-face face">
                        <p className="questiontext">O que é um pato?</p>
                        <div className="flipicon"><img src="img/setinha.png" class="arrow" /></div>
                    </div>

                    <div className="back-face face">
                        <div className="textasnwer">
                            <p>É uma Ave!</p>
                        </div>
                        <div className="questionbuttonszone">
                            <div className="questionbutton dontremeber"><p className="buttontext">Não lembrei</p></div>
                            <div className="questionbutton almost"><p className="buttontext">Quase não lembrei</p></div>
                            <div className="questionbutton zap"><p className="buttontext">Zap!</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}