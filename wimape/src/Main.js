import React from "react"
import {Switch,Route} from "react-router-dom"
import WimapeLogin from "./WimapeLogin"
import SamplePath from "./SamplePath"
import SignUp from "./SignUp"

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={WimapeLogin}></Route>
                <Route exact path='/cadastro' component={SignUp}></Route>
                <Route exact path='/acesso' component={SamplePath}></Route>
            </Switch>
        </div>
    )
}
export default Main