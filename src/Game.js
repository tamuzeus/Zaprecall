import React from "react"
import Header from "./Header"
import Article from "./Article"
import Footer from "./Footer"

export default function Game() {
    return (
        <React.Fragment>
            <div className="gamepage">
                <Header />
                <Article />
                <Footer />
            </div>
        </React.Fragment>
    )
}