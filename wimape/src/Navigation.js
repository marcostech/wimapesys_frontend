import React from "react"
import {NavLink} from "react-router-dom"
import "./Navigation.css"

function SamplePath() {    
    return (
        <div className="Navbar">
            <nav>
                <ul className="Navbar-links-container">
                    <li><NavLink exact className="Navbar-links" to='/'>Dash Board</NavLink></li>
                    <li><NavLink exact className="Navbar-links" to='/samplepath'>Pesquisa</NavLink></li>
                    <li><NavLink exact className="Navbar-links" to='/samplepath2'>Cadastro</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default SamplePath