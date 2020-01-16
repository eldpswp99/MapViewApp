import React from "react";
import {Link} from "react-router-dom";
import floors from "../data/floors";
import "./FloorNav.css";

class FloorNav extends React.Component{
	state = {
		selected : floors[0].id
	}
	
	render(){
		const {selected} = this.state;
		
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
											linkMap
										}
									}}>
										<div className = "linkcontent" onClick = {() => {
											this.setState({
												selected : id
											})
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