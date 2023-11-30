import React from "react"
import Info from "./Components/Info"
import About from "./Components/About"
import Interests from "./Components/Interests"
import Footer from "./Components/Footer"

const App = () => {
    return (
        <div className="app-container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
export default App