import React from "react";
import floors from "../data/floors";
import { Redirect } from "react-router-dom"; 
import PopUp from "./PopUp"
import ImageMapper from 'react-image-mapper';
import FloorNav from "./FloorNav";
import StoreList from "./StoreList";
import CategoryNav from "./CategoryNav";
import categories from "../data/categories";
import "./Floor.css";

class Floor extends React.Component{
	constructor(props){
		super(props);
				
		this.state = {
			popUp : undefined,
			category : "All",
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
			category : arg,
		});
	}
		
	render(){		
		const {location : {state}} = this.props;
		if(!state){
			const {id,mapImg,linkMap,imgWidth} = floors[0];			
		
			return (<Redirect to = {{
				pathname : `/floor/${id}`,
				state : {
					id,
					mapImg,
					imgWidth,
					linkMap
				}
			}}/>);	
	}
		
	const {linkMap : {areas}} = state;
	const {popUp,category,selectedCategory} = this.state;
	return (
		<div className = "floor">
			
		<FloorNav />	
		<div className = "categorynav">
			{categories.map(categoryelem => 
				(<CategoryNav category = {categoryelem} action = {this.setCategory} key = {categoryelem} selected = {category} />)
			)}
		</div>
			<div className = "map">
				<ImageMapper className = "mapimg" src = {state.mapImg} map ={state.linkMap}
					onClick = {area => {this.setIsPopUp(area._id,true)}}
					width = {window.innerWidth*0.9}
					imgWidth = {state.imgWidth}
				/>
			</div>
						
		
			
			<div className = "floorstorelist">
				<StoreList floor = {state.id} stores = {areas} category = {category} action = {this.setIsPopUp}></StoreList>
			</div>
			
			{areas.map(store => {
				return popUp === store._id ? <PopUp action ={this.setIsPopUp} store = {store} key = {store._id}/> : "";
			})}
			
		</div>
		);		
	}
}

export default Floor;