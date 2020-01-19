import React from "react";
import {Link} from "react-router-dom";

import mainmenu from "../data/mainmenu";

import "./HeaderNav.css";



class HeaderNav extends React.Component{
	render(){
		const {selected} = this.props;
		
		return (
			<nav className = "headernav">
				{mainmenu.map(menu => (
				<div className = {selected === menu.menu ? "selected" : "link"} key = {menu.menu}>
					<Link to = {`/${menu.menu}`}>
						<div className = "linkcontent">
							{menu.guide}
						</div>	
					</Link>
				</div>
				))}
			</nav>
		);
	}
}

export default HeaderNav;