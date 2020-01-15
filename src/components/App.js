import React from "react";
import {HashRouter,Route} from "react-router-dom";
import Floor from "./Floor";
import Category from "./Category";
import Header from "./Header";
import "./App.css";

function App(){	
	
	return (
		<div className = "container">
			
			<HashRouter>
				<Header />
				<Route path = {"/"} exact = {true} component = {Floor}/>
				<Route path = {"/floor/:id"} component = {Floor}/>
				<Route path = {"/category"} component = {Category} />
			</HashRouter>
		</div>
	);
}

export default App;