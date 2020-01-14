import React from "react";

class CategoryNav extends React.Component{
	render(){
		const {category,action} =  this.props;
		
		return (
			<div className = "categorynavelem" onClick = {() => (
					action(category)
				)}>
				{category}
			</div>
		);
	}
}

export default CategoryNav;