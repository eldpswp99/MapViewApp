import React from "react";
import {Link} from "react-router-dom";
import floors from "../data/floors";
import "./FloorNav.css";

class FloorNav extends React.Component{
	render(){
		return (
			<nav className = "floor">
				<div className = "floornav">
					{
						floors.map(({id,mapImg,linkMap,imgWidth}) => (
							<div key = {id} className = "floorlink">
								<Link to = {{
										pathname : `/floor/${id}`,
										state : {
											id,
											imgWidth,	
											mapImg,
											linkMap
										}
									}}>
										<div className = "linkcontent">
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