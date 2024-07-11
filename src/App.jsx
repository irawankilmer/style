import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./img/logo.png";

function App() {
    return (
        <>
            <header>
                <img src={logo} alt="" />
            </header>
            <main>
                <section>
                    <h2>Ini adalah form</h2>
                    <button className="btn">SEND</button>
                </section>
            </main>
        </>
    );
}

export default App;
