import React from "react";
import {Link} from "react-router-dom";

import categories from "../data/categories";

import "./CategoryNav.css";


class CategoryNav extends React.Component{
	
	render(){
		
		const {prev,category,selected,isLast} =  this.props;
		
		return (
			<div className = {category === selected ? "selected" :"categorynavelem"}>
				<Link to = {`/${prev}/${category}`} >
					<div className = {isLast(category,categories) ? "lastcontent" : "linkcontent"}>
						{category}
					</div>
				</Link>
			</div>
		);
	}
}

export default CategoryNav;