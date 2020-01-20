import React from "react";
import { Redirect } from "react-router-dom"; 
import {HashRouter,Route} from "react-router-dom";
import ImageMapper from 'react-image-mapper';

import floors from "../data/floors";
import categories from "../data/categories";

import HeaderNav from "../components/HeaderNav";
import Header from "../components/Header";
import FloorNav from "../components/FloorNav";
import StoreList from "../components/StoreList";
import CategoryNav from "../components/CategoryNav";

import PopUp from "./PopUp";

import "./Floor.css";

class Floor extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			mapPopup : undefined	
		}
		
		this.isLast = this.isLast.bind(this);
	}
	
	isLast(elem,arr){
		const last = arr[arr.length-1];
				
		return (elem === last || (last._id && elem === last._id)
						|| (last.floor && elem === last.floor));
	}
	
	render(){		
		const {popup,floor,category} = this.props.match.params;		
				
		if(floor && !category) return (<Redirect to = {`/floor/${floor}/All`} />);
		else if(!floor && !floor)	return (<Redirect to = "/floor/1F/All" />);
		const {mapImg,imgWidth,linkMap} = floors.find(elem => elem.floor === floor);
			
		if(window.innerWidth >= 768 && this.state.mapPopup && !popup){
			return <Redirect to = {`/floor/${floor}/${category}/storedetail/${this.state.mapPopup}`} />
		}
		return (	
			<div className = "floor">
				<Header/>
					<div className = "container">
						<HeaderNav selected = {"floor"} isLast = {this.isLast}/>
						<div className = "floornav">
							<FloorNav selected = {floor} isLast = {this.isLast}/>	
						</div>
						<div className = "categorynav">
							{categories.map(elem => 
								(<CategoryNav category = {elem} key = {elem} selected = {category} prev = {`floor/${floor}`} isLast = {this.isLast}/>)
							)}
						</div>

						<div className = "map">
							<ImageMapper className = "mapimg" src = {mapImg} map ={linkMap}
								width = {Math.min(window.innerWidth,980)*0.9}
								imgWidth = {imgWidth}
								onClick = {area => {this.setState({mapPopup : area._id})}}
							/>
						</div>

						<HashRouter>
							<div className = "floorstorelist">
								<StoreList prev = {`/floor/${floor}/${category}`} floor = {floor} stores = {linkMap.areas} category = {category} />
							</div>		

							<Route path = {"/floor/:floor/:category/storedetail/:popup"} component = {PopUp} />
						</HashRouter>
						</div>
			</div>
			);		
	}
}

export default Floor;