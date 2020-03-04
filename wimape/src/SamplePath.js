import React from "react"
import api from "./services/api"

class SamplePath extends React.Component {   
constructor(props) {
    super(props)
    this.state = {
        teste: "teste"
    }    
    }

handleChange = () => {
    api.get(`/search`, {params:{num_serie_teste:"1"}}).then(response =>{
        this.setState({teste: response.data.cod })
    }).catch(err => {
         console.log(err)}
         )}

    //const responseData = dbtest().then( response => {return response.data}).catch(response => {return console.log(response)})
render() {
    return (
        <h1 onClick={this.handleChange}> {this.state.teste} </h1>
    )
   }     
}
export default SamplePath