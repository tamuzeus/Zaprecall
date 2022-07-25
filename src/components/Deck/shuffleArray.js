export const questionarrays = [{
    question: "O que é um pato?",
    asnwer: "É uma ave!",
    open: false,
    flip: false,
    icon: "play-outline",
    risck: "questionnumber",
    color: "playimg",
    button: false
}, {
    question: "O que é um cachorro?",
    asnwer: "É um doguinho!",
    open: false,
    flip: false,
    icon: "play-outline",
    risck: "questionnumber",
    color: "playimg",
    button: false
}, {
    question: "O que é um gato?",
    asnwer: "É um gatinho!",
    open: false,
    flip: false,
    icon: "play-outline",
    risck: "questionnumber",
    color: "playimg",
    button: false
}, {
    question: "O que é um mafagafo?",
    asnwer: "É um mafagafinho!",
    open: false,
    flip: false,
    icon: "play-outline",
    risck: "questionnumber",
    color: "playimg",
    button: false
}, {
    question: "O que é um rato?",
    asnwer: "É um ratinho!",
    open: false,
    flip: false,
    icon: "play-outline",
    risck: "questionnumber",
    color: "playimg",
    button: false
}, {
    question: "O que é um avestruz?",
    asnwer: "É um avestruzinho!",
    open: false,
    flip: false,
    icon: "play-outline",
    risck: "questionnumber",
    color: "playimg",
    button: false
}, {
    question: "O que é um anão?",
    asnwer: "É um anão!",
    open: false,
    flip: false,
    icon: "play-outline",
    risck: "questionnumber",
    color: "playimg",
    button: false
}, {
    question: "O que é presidente ruim?",
    asnwer: "Você sabe muito bem...",
    open: false,
    flip: false,
    icon: "play-outline",
    risck: "questionnumber",
    color: "playimg",
    button: false
}]

export default function shuffleArray (value){
    let shuffledDeck = questionarrays
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    shuffledDeck = shuffledDeck.slice(4);

    return shuffledDeck
}