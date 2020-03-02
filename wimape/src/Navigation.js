import React from "react"
import {NavLink} from "react-router-dom"
import "./Navigation.css"

function SamplePath() {    
    return (
        <div className="Navbar">
            <nav className="container">                
                    <NavLink exact className="links" to='/'>Dash</NavLink>
                    <NavLink exact className="links" to='/samplepath'>Pesquisa</NavLink>
                    <NavLink exact className="links" to='/samplepath2'>Cadastro</NavLink>                
            </nav>
        </div>
    )
}
export default SamplePath