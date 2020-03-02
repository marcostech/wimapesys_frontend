import React from "react"
import "./WimapeLogin.css"

function WimapeLogin() {
    return (
        <div className="content">
            <div className="loginInputs">
                <input type="text" id="loginUsername" placeholder="Nome de Usuario"/><br></br>
                <input type="password" id="loginPassword" placeholder="Senha"/>
            </div>
            <button className="content-button">Entrar</button>
        </div>
    )
}
export default WimapeLogin