import React from "react";
import categories from "../data/categories";
import CategoryNav from "./CategoryNav";
import StoreList from "./StoreList";
import stores from "../data/stores";
import SearchForm from "./SearchForm"
import PopUp from "./PopUp";

class Category extends React.Component{
	constructor(props){
		super(props);
			
		this.state = {
			popUp : undefined,
			category : "All",
			search : undefined
		};

		this.setIsPopUp = this.setIsPopUp.bind(this);
		this.setSearch = this.setSearch.bind(this);
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
	
	setSearch(arg){
		this.setState({
			...this.state,
			search : arg
		})
	}
	
	render(){
		const {search,popUp,category} = this.state;
		
		return (<div className = "categorycontainer">
			<div className = "categoryheadnav">
					{categories.map(category => 
					(<CategoryNav category = {category} action = {this.setCategory} key = {category}/>)
				)}
			</div>
				
			<SearchForm action = {this.setSearch}/>	
				
			<div className = "categorystorelist">
				<StoreList search = {search} category = {category} stores = {stores} action = {this.setIsPopUp}></StoreList>
			</div>
				
			{stores.map(store => {
				return popUp === store._id ? <PopUp action ={this.setIsPopUp} store = {store} key = {store._id}/> : "";
			})}
		</div>)
	}
}

export default Category;