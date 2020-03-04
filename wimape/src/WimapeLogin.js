import React from "react"
import "./WimapeLogin.css"

class WimapeLogin extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            user: "",
            password: "",
            erroMsg: "Esqueci a senha"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }
    
    handleSubmit(event) {
        
        
        if(0){ //boolean login test
            this.setState({erroMsg: "Usuário e/ou Senha incorreto(s)"});
            document.getElementsByClassName("error")[0].style.color="red"
        }
        event.preventDefault(); 
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>            
        <div className="content">     

            <input
            required
            onChange={this.handleChange}
            value={this.state.user}
            name="user"
            className="input-style"
            type="text"
            placeholder="Nome de Usuario"
            autoComplete="off"/>

            <input
            required
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            className="input-style"
            type="password"
            placeholder="Senha"
            autoComplete="off"/>  

            <div className="content-button-holder">
                <button className="content-button" type="submit">Entrar</button>
                <button className="content-button" type="submit">Cadastrar</button>
            </div>            
        </div>
        <a className="error" href="">{this.state.erroMsg}</a>
        </form>
    )}
}
export default WimapeLogin