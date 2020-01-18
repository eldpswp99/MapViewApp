import React from "react";
import {Link} from "react-router-dom";

import "./CategoryNav.css";


class CategoryNav extends React.Component{
	
	render(){
		
		const {prev,category,selected} =  this.props;
		
		return (
			<div className = {category === selected ? "selected" :"categorynavelem"}>
				<Link to = {`/${prev}/${category}`} >
					<div >
						{category}
					</div>
				</Link>
			</div>
		);
	}
}

export default CategoryNav;