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
            setor: "",
            admin: false,
            passwordCheck: "", //state do Check de password input
            erroMsg: "", //state para mensagens de erro
            
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
        if(this.state.password===this.state.passwordCheck){
            api.post(`/cadastro`, { //axios api para BD
                    user: this.state.user, // campo de usuario
                    password: this.state.password, //campo de senha
                    email: this.state.email, //campo de email
                    setor: this.state.setor, //campo de setor
                    admin: this.state.admin, //campo de admin
                
            }).then(response =>{ 
                alert(response.data.mensagem);   
                if(response.data.statusCreated===true){this.props.history.push('/')}  //redirecionador se user criado
            }).catch(err => { //pega os erros do Banco de dados
                this.setState({erroMsg:"check this -> "+err}); //troca state da msg de erro
                document.getElementsByClassName("error")[0].style.color="red"; //altera cor do texto de erro
                });
        }else{
            alert("Senhas diferem, tente novamente!");
            document.getElementsByName("passwordCheck")[0].style.color="red";
            document.getElementsByName("password")[0].style.color="red";
        };
        event.preventDefault();
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
            autoComplete="off"
            maxLength="10"
            pattern="[A-Za-z]{1,10}"
            title="Somente letras, máximo 10 Caracteres"/>

            <input
            required
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            className="input-style"
            type="password"
            placeholder="Senha"
            autoComplete="off"
            maxLength="10"/> 

            <input
            required
            onChange={this.handleChange}
            value={this.state.passwordCheck}
            name="passwordCheck"
            className="input-style"
            type="password"
            placeholder="Repetir Senha"
            autoComplete="off"
            maxLength="10"/>

            <input
            required
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            className="input-style"
            type="email"
            placeholder="Email"
            autoComplete="off"/>

            <input
            required
            onChange={this.handleChange}
            value={this.state.setor}
            name="setor"
            className="input-style"
            type="text"
            placeholder="Setor"
            autoComplete="off"
            maxLength="10"/>

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