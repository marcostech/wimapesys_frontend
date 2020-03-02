import React from "react"
import {Switch,Route} from "react-router-dom"
import WimapeLogin from "./WimapeLogin"
import SamplePath from "./SamplePath"
import SamplePath2 from "./SamplePath2"

function Main() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={WimapeLogin}></Route>
                <Route exact path='/samplepath' component={SamplePath}></Route>
                <Route exact path='/samplepath2' component={SamplePath2}></Route>
            </Switch>
        </div>
    )
}
export default Main