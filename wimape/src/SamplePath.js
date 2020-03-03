import React from "react"
import api from "./services/api"

class SamplePath extends React.Component {   
constructor(props) {
    super(props)
    this.state = {
        teste: "teste"
    }
    }

async dbtest() { //comunicação funcionando
    await api.get(`/search`,
    {params:{num_serie_teste:"1"}})
    .then(resp=>{ this.setState( {teste: "deu"}) })
    .catch(err => { this.setState( {teste: err}) })
    } 
handleChange = (prop) => {
        this.setState({teste: prop})
};

    //const responseData = dbtest().then( response => {return response.data}).catch(response => {return console.log(response)})
render() { 
    return ( <h1 onClick={this.handleChange("deu")}>{this.state.teste}</h1>
    )
   }     
}
export default SamplePath