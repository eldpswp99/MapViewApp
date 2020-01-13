import React from "react";
import floors from "../data/floors";
import stores from "../data/stores";
import { Redirect } from "react-router-dom"; 
import PopUp from "../components/PopUp"
import ImageMapper from 'react-image-mapper';

class Map extends React.Component{
	constructor(props){
		super(props);
		
		let temp = {};
		
		Object.keys(stores).map(k => {
			return stores[k];
		}).map(storeF => {
			storeF.map(store => {
				temp[store._id] = false;
		})});
		
		this.state = temp;

		this.mapClicked = this.mapClicked.bind(this);
		this.popUpRemoveBtnClick = this.popUpRemoveBtnClick.bind(this);
	}
	
	popUpRemoveBtnClick(arg){
		this.setState({
			...this.state,
			[arg] : false
		})
	};
	
	mapClicked(area) {
		
		this.setState({
			...this.state,
			 [area._id] : true
		});
	}
	
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
		
	return (
		<div className = "Map">
			<h1>{state.id}</h1>}
			<ImageMapper src = {state.mapImg} map ={state.linkMap}
				onClick = {area => {this.mapClicked(area)}}
			/>
			{state.linkMap.areas.map(store => {
				return this.state[store._id] ? <PopUp action ={this.popUpRemoveBtnClick} store = {store} key = {store._id}/> : "";
			})}
		</div>
		);		
	}
}

export default Map;