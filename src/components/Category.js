import React from "react";
import categories from "../data/categories";
import CategoryNav from "./CategoryNav";
import stores from "../data/stores";

class Category extends React.Component{
	constructor(props){
		super(props);
			
		this.state = {
			category : "All"
		};

		this.setCategory = this.setCategory.bind(this);
	}
	
	setCategory(arg){
		this.setState({
			category : arg
		});
	}
		

	render(){
		return (<div className = "categorycontainer">
			<div className = "categoryheadnav">
					{categories.map(category => 
					(<CategoryNav category = {category} action = {this.setCategory} key = {category}/>)
				)}
			</div>
		</div>)
	}
}

export default Category;