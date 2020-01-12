import React from "react";
import {HashRouter,Route} from "react-router-dom";
import Navigator from "./Navigator";
import Map from "../routes/Map"

function App(){	
	
	return (
		<HashRouter>
			<Navigator />
			<Route path = {"/"} exact = {true} component = {Map}/>
			<Route path = {"/:id"} component = {Map}/>
			
		</HashRouter>
	)
}

export default App;