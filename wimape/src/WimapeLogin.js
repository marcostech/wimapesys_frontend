import React from "react"
import "./WimapeLogin.css"
import api from "./services/api"

class WimapeLogin extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            user: "", //state do user input
            password: "", //state do password input
            erroMsg: "Esqueceu a senha?", //state para mensagens de erro
            status: false //state de login status check
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this); //binds para usar a this nas funções
    }

    handleChange(event) { //atualizadores de state dos inputs
        const name = event.target.name;
        this.setState( {[name]: event.target.value} ); 
    }
    
    handleSubmit(event) { //função para processar o submit do form de login
        //checa id do form
        api.get(`/search`, { //axios api para BD
            params: {
                user: this.state.user //procura apenas o usuario e retorna todos os campos do documento
            }
        }).then(response =>{ //nested if para verificar se usuario existe, se senha esta correta ou não
            if(response.data.user === undefined){
                this.setState({erroMsg:"Usuario não encontrado!"}); //troca state da msg de erro
                this.setState({status: false}); //altera state do check login
                document.getElementsByClassName("error")[0].style.color="red"; //altera cor do texto de erro
            }else {
                if(response.data.password === this.state.password) {
                    this.setState({erroMsg: "Esqueci a senha"}); //troca state da msg de erro
                    this.setState({status: true}); //altera state do check login
                    document.getElementsByClassName("error")[0].style.color="lightblue"; //altera cor do texto de erro
                }else{
                    this.setState({erroMsg:"Senha incorreta!"}); //troca state da msg de erro
                    this.setState({status: false}); //altera state do check login
                    document.getElementsByClassName("error")[0].style.color="red"; //altera cor do texto de erro
                }
            }
            
        }).catch(err => { //pega os erros do Banco de dados
            this.setState({erroMsg:"check this -> "+err}); //troca state da msg de erro
            this.setState({status: false}) //altera state do check login
            document.getElementsByClassName("error")[0].style.color="red"; //altera cor do texto de erro
            });

        event.preventDefault();
    }

    handleSignUp(){ 
        this.props.history.push('/cadastro'); //força o caminho para o history
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
                <button className="content-button" type="submit" >Entrar</button>
                <button className="content-button" type="button" onClick={this.handleSignUp}>Cadastrar</button>

            </div>            
        </div>
        <a href="/" className="error">{this.state.erroMsg}</a>
        </form>
    )}
}
export default WimapeLogin