import React from "react";
import {Link} from "react-router-dom";
import floors from "../data";

class Navigator extends React.Component{
	render(){
		return (
			<nav>
				<ul>
					{
						floors.map(({id,mapImg,linkMap}) => (
							<li key = {id}>
								<Link to = {{
										pathname : '/${id}'
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