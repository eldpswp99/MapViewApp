import React from "react";
import {Link} from "react-router-dom";
import floors from "../data/floors";

class Navigator extends React.Component{
	render(){
		return (
			<nav className = "floor">
				<ul>
					{
						floors.map(({id,mapImg,linkMap}) => (
							<li key = {id}>
								<Link to = {{
										pathname : `/${id}`,
										state : {
											id,
											mapImg,
											linkMap
										}
									}}>{id}</Link>
							</li>
						))
					}
				</ul>	
			</nav>
		);
	}
}

export default Navigator;