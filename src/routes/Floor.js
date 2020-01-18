import React from "react";
import { Redirect } from "react-router-dom"; 
import ImageMapper from 'react-image-mapper';

import floors from "../data/floors";
import categories from "../data/categories";

import Header from "../components/Header";
import FloorNav from "../components/FloorNav";
import StoreList from "../components/StoreList";
import CategoryNav from "../components/CategoryNav";

import "./Floor.css";

class Floor extends React.Component{
	
	render(){		
		
		const {floor,category} = this.props.match.params;		
		
		if(floor && !category) return (<Redirect to = {`floor/${floor}/All`} />);
		else if(!floor && !floor)	return (<Redirect to = "floor/1F/All" />);
		const {mapImg,imgWidth,linkMap} = floors.find(elem => elem.floor === floor);
		
		return (	
			<div className = "container">
				<Header selected = {"floor"}/>
				<div className = "floor">
					<FloorNav selected = {floor}/>	
				<div className = "categorynav">
					{categories.map(elem => 
						(<CategoryNav category = {elem} key = {elem} selected = {category} prev = {`floor/${floor}`}/>)
					)}
				</div>

				<div className = "map">
					<ImageMapper className = "mapimg" src = {mapImg} map ={linkMap}
						width = {window.innerWidth*0.9}
						imgWidth = {imgWidth}
					/>
				</div>

					<div className = "floorstorelist">
						<StoreList floor = {floor} stores = {linkMap.areas} category = {category} />
					</div>			
				</div>
			</div>
			);		
	}
}

export default Floor;