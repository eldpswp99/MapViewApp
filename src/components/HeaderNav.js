import React from "react";
import {Link} from "react-router-dom";
import floors from "../data/floors";
import "./HeaderNav.css";


class HeaderNav extends React.Component{
	render(){
		const {id,mapImg,linkMap,imgWidth} = floors[0];
		
		return (
			<nav className = "headernav">
				<div className = "link">
					<Link to = {{
										pathname : `/floor/${id}`,
										state : {
											id,
											mapImg,
											imgWidth,
											linkMap
										}
					}}>
						<div className = "linkcontent">
						층별 안내
						</div>	
						</Link>
				</div>
				<div className = "link">
					<Link to = "/category">
						<div className = "linkcontent">
						카테고리별 안내
						</div>	
					</Link>
				</div>
			</nav>
		);
	}
}

export default HeaderNav;