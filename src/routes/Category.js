import React from "react";
import { Redirect } from "react-router-dom"; 
import {HashRouter,Route} from "react-router-dom";

import categories from "../data/categories";
import stores from "../data/stores";

import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import StoreList from "../components/StoreList";
import HeaderNav from "../components/HeaderNav";
import SearchForm from "../components/SearchForm";

import PopUp from "./PopUp";

import "./Category.css";

class Category extends React.Component{
	constructor(props){			
		super(props);
		
		this.state = {
			search : undefined
		};

		this.setSearch = this.setSearch.bind(this);
		this.isLast = this.isLast.bind(this);
	}
	
	isLast(elem,arr){
		const last = arr[arr.length-1];
				
		return (elem === last || (last._id && elem === last._id)
						|| (last.floor && elem === last.floor));
	}
	
	setSearch(arg){
		this.setState({
			...this.state,
			search : arg
		})
	}
	
	render(){
		const {search} = this.state;
		const {category} = this.props.match.params;
		
		if(!category) return <Redirect to = "category/All" />
		
		
		return (
			<div className = "category">
				<Header/>
				<div className = "container">
					<HeaderNav selected = {"category"} isLast = {this.isLast}/>
					<div className = "categoryheadnav">
							{categories.map(elem => 
							(<CategoryNav category = {elem} key = {elem} selected = {category} prev = {`category`} isLast = {this.isLast}/>)
						)}
					</div>

					<SearchForm action = {this.setSearch}/>	

					<HashRouter>
						<div className = "categorystorelist">
							<StoreList prev = {`/category/${category}`} search = {search} category = {category} stores = {stores} />
						</div>

						<Route path = {"/category/:category/storedetail/:popup"} component = {PopUp} />
					</HashRouter>

				</div>
			</div>
		)
	}
}

export default Category;