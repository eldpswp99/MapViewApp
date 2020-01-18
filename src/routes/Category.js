import React from "react";
import { Redirect } from "react-router-dom"; 

import categories from "../data/categories";
import stores from "../data/stores";

import Header from "../components/Header";
import CategoryNav from "../components/CategoryNav";
import StoreList from "../components/StoreList";
import SearchForm from "../components/SearchForm"

import "./Category.css";

class Category extends React.Component{
	constructor(props){			
		super(props);
		
		this.state = {
			search : undefined
		};

		this.setSearch = this.setSearch.bind(this);
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
			<div className = "container">
				<Header selected = {"category"}/>
				<div className = "categoryheadnav">
						{categories.map(elem => 
						(<CategoryNav category = {elem} key = {elem} selected = {category} prev = {`category`}/>)
					)}
				</div>

				<SearchForm action = {this.setSearch}/>	

				<div className = "categorystorelist">
					<StoreList search = {search} category = {category} stores = {stores} />
				</div>

			</div>
		)
	}
}

export default Category;