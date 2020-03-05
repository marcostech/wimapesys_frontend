import React from "react"
import "./WimapeLogin.css"
import api from "./services/api"

class WimapeLogin extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            user: "", //state do user input
            password: "", //state do password input
            email: "", //state do password input
            passwordCheck: "", //state do Check de password input
            erroMsg: "", //state para mensagens de erro
            status: false //state de login status check
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); //binds para usar a this nas funções
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleChange(event) { //atualizadores de state dos inputs
        const name = event.target.name;
        this.setState( {[name]: event.target.value} ); 
    }
    
    handleSubmit(event) { //função para processar o submit do form de cadastro
        api.post(`/monos`, { //axios api para BD
            params: {
                user: this.state.user, // campo de usuario
                password: this.state.password, //campo de senha
                email: this.state.email //campo de email
            }
        }).then(response =>{ 
            console.log(response.data)           
        }).catch(err => { //pega os erros do Banco de dados
            this.setState({erroMsg:"check this -> "+err}); //troca state da msg de erro
            this.setState({status: false}) //altera state do check cadastro
            document.getElementsByClassName("error")[0].style.color="red"; //altera cor do texto de erro
            });
        event.preventDefault();


        alert("cadastro efetuado");
        this.props.history.push('/');
    }
    handleGoBack(){ 
        this.props.history.push('/'); //força o caminho para o history
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

            <input
            required
            onChange={this.handleChange}
            value={this.state.passwordCheck}
            name="passwordCheck"
            className="input-style"
            type="password"
            placeholder="Repetir Senha"
            autoComplete="off"/>

            <input
            required
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            className="input-style"
            type="email"
            placeholder="Email"
            autoComplete="off"/>

            <div className="content-button-holder">                
                <button className="content-button" type="submit">Cadastrar</button>                
            </div>            
            <button className="content-button" type="button" onClick={this.handleGoBack}>Voltar</button>
        </div>
        <a className="error" href="/">{this.state.erroMsg}</a>
        </form>
    )}
}
export default WimapeLogin