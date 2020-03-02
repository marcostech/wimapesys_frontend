import React from "react"
import "./WimapeLogin.css"

function WimapeLogin() {
    return (
        <div className="content">
            <input className="input-style" type="text" id="loginUsername" placeholder="Nome de Usuario"/>
            <input className="input-style" type="password" id="loginPassword" placeholder="Senha"/>            
            <button className="content-button">Entrar</button>
        </div>
    )
}
export default WimapeLogin