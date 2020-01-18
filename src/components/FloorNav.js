import React from "react";
import {Link} from "react-router-dom";

import floors from "../data/floors";

import "./FloorNav.css";

class FloorNav extends React.Component{
		
	render(){
		const {selected} = this.props;
		
		return (
			<nav className = "floor">
				<div className = "floornav">
					{
						floors.map(({floor}) => (
							<div key = {floor} className = {selected === floor ? "selected" : "floorlink"}>
								<Link to = {`/floor/${floor}/All`}>
										<div className = "linkcontent">
										{floor}
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