import React from 'react'
//import api from "./services/api"
import logo from "./images/logo.png"
import './App.css';
import Main from "./Main"



function App() {
  //async function dbtest() { //comunicação funcionando
  //  await api.get(`/monos`)
  // }
  //dbtest();
  return ( 
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo"  alt="logo" />
        <a
          className= "App-link"
          href= "https://github.com/marcostech"
          target= "_blank"
          rel= "noopener noreferrer"
        >
          Wimape System 0.0.1V
        </a>
        <p>
          Faça Login para começar.
        </p>              
        <Main />
      </div>
      
    </div>
  )
}

export default App
