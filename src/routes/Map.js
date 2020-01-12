import React from "react";
import floors from "../data/floors";
import stores from "../data/stores";
import { Redirect } from "react-router-dom"; 
import PopUp from "../components/Popup"

class Map extends React.Component{
			
	render(){		
		const {location : {state}} = this.props;
		
		if(!state){
			const {id,mapImg,linkMap} = floors[0];			
		
			return (<Redirect to = {{
				pathname : `/${id}`,
				state : {
					id,
					mapImg,
					linkMap
				}
			}}/>);	
	}
		
	const {storeImg,name,openHour,callNumber,kind} = stores[0];	
	
	return (
		<div className = "Map">
			<h1>{state.id}</h1>
			<img src = {state.mapImg} alt = {state.id}></img>
			<PopUp storeImg = {storeImg} name = {name} openHour = {openHour} callNumber ={callNumber} kind ={kind}></PopUp>
		</div>
		);		
	}
}

export default Map;