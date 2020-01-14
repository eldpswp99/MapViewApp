import React from "react";
import floors from "../data/floors";
import stores from "../data/stores";
import { Redirect } from "react-router-dom"; 
import PopUp from "./PopUp"
import ImageMapper from 'react-image-mapper';
import StoreInfo from "./StoreInfo";
import FloorNav from "./FloorNav";
import CategoryNav from "./CategoryNav";
import categories from "../data/categories";

class Floor extends React.Component{
	constructor(props){
		super(props);
				
		this.state = {
			popUp : undefined,
			category : "All"
		};

		this.setIsPopUp = this.setIsPopUp.bind(this);
		this.setCategory = this.setCategory.bind(this);
	}
	
	setIsPopUp(arg,isPopUp){
		this.setState({
			...this.state,
			popUp : isPopUp ? arg : undefined
		})
	}
	
	setCategory(arg){
		this.setState({
			...this.state,
			category : arg
		});
	}
		
	render(){		
		const {location : {state}} = this.props;
		if(!state){
			const {id,mapImg,linkMap} = floors[0];			
		
			return (<Redirect to = {{
				pathname : `/floor/${id}`,
				state : {
					id,
					mapImg,
					linkMap
				}
			}}/>);	
	}
		
	const {linkMap : {areas}} = state;
	const {popUp,category} = this.state;
	console.log(this.state);
	return (
		<div className = "floor">
		<FloorNav />
			
			
			<div className = "Map">
				<h1>{state.id}</h1>
				<ImageMapper src = {state.mapImg} map ={state.linkMap}
					onClick = {area => {this.setIsPopUp(area._id,true)}}
				/>
				{areas.map(store => {
					return popUp === store._id ? <PopUp action ={this.setIsPopUp} store = {store} key = {store._id}/> : "";
				})}
			</div>
			
			
			<div className = "categorynav">
				{categories.map(category => 
					(<CategoryNav category = {category} action = {this.setCategory} key = {category}/>)
				)}
			</div>
			
			
			<ul className = "storelist">
				{areas.map(store => 
					{console.log(store);					
					return (store.location === state.id && (category === store.category || this.state.category === "All")) ?
					(<li className = "storeelem" key = {store._id}>
					<img className = "listoreimg" src = {store.storeImg} alt = {store.name} ></img> 
					<StoreInfo store = {store} />
					</li>) : ""}
				)}
			</ul>
		</div>
		);		
	}
}

export default Floor;