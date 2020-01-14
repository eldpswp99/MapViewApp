import React from "react";
import {Link} from "react-router-dom";
import floors from "../data/floors";


class HeaderNav extends React.Component{
	render(){
		const {id,mapImg,linkMap} = floors[0];
		
		return (
			<nav className = "headernav">
				<div className = "link">
					<Link to = {{
										pathname : `/floor/${id}`,
										state : {
											id,
											mapImg,
											linkMap
										}
					}}>층별 안내</Link>
				</div>
				<div className = "link">
					<Link to = "/category">카테고리별 안내</Link>
				</div>
			</nav>
		);
	}
}

export default HeaderNav;