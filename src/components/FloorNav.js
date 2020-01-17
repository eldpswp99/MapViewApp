import React from "react";
import {Link} from "react-router-dom";
import floors from "../data/floors";
import "./FloorNav.css";

class FloorNav extends React.Component{
		
	render(){
		const {selected,action} = this.props;
		
		return (
			<nav className = "floor">
				<div className = "floornav">
					{
						floors.map(({id,mapImg,linkMap,imgWidth}) => (
							<div key = {id} className = {selected === id ? "selected" : "floorlink"}>
								<Link to = {{
										pathname : `/floor/${id}`,
										state : {
											id,
											imgWidth,	
											mapImg,
											linkMap,
											redirected:false
										}
									}}>
										<div className = "linkcontent" onClick = {() => {
											action(id);
										}}>
										{id}
										</div>	
									</Link>
							</div>
						))
					}
				</div>	
			</nav>
		);
	}
}

export default FloorNav;