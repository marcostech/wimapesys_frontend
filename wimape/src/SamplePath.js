import React from "react"
import api from "./services/api"

function SamplePath() {    
        async function dbtest() { //comunicação funcionando
        return await api.get(`/search`,{params:{num_serie_teste:"1"}})//.then(resp=>{return resp.data})
        } 


    //const responseData = dbtest().then( response => {return response.data}).catch(response => {return console.log(response)})
    const cod = dbtest()
    console.log(cod)
    return (        
        <div>
            <p></p>
        </div>
    )
}
export default SamplePath