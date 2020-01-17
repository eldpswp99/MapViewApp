import React from "react";
import "./CategoryNav.css";


class CategoryNav extends React.Component{
	
	render(){
		const {category,action,selected} =  this.props;
		
		return (
			<div className = {category === selected ? "selected" :"categorynavelem"} onClick = {() => 
					{
						action(category);
					}
				}>
				{category}
			</div>
		);
	}
}

export default CategoryNav;