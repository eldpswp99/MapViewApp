import React from "react";
import {HashRouter,Route,Switch} from "react-router-dom";

import Floor from "./Floor";
import Category from "./Category";
import PopUp from "./PopUp";

import "./App.css";

function App(){	
	
	return (
			<HashRouter>
					<Route path = {"/storedetail/:popup"} component = {PopUp} />
					<Route path = {"/storedetail"} component = {PopUp} />
				<Switch>
					<Route path = {"/floor/:floor/:category"} component = {Floor}/>
					<Route path = {"/floor/:floor"} component = {Floor}/>
					<Route path = {"/floor/"} component = {Floor}/>
					<Route path = {"/category/:category"} component = {Category} />
					<Route path = {"/category"} component = {Category} />
					<Route path = {"/"} component = {Floor}/>
				</Switch>
			</HashRouter>
	);
}

export default App;