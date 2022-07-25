import React from "react"
import Header from "../Header/Header"
import Article from "../Article/Article"
import Footer from "../Footer/Footer"
import "./Game.css"

export default function Game() {
    return (
        <>
            <div className="gamepage">
                <Header />
                <Article />
                <div className="clear"></div>
                <Footer />
            </div>
        </>
    )
}