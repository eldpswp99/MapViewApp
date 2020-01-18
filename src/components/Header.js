import React from "react";
import {Link} from "react-router-dom";

import HeaderNav from "./HeaderNav";

import "./Header.css";


class Header extends React.Component{
	render(){
		const {selected} = this.props;
		
		return (
			<header>
				<div className = "title">
					<Link to ="/floor/1F/All">
						<h2>알파돔타워</h2>
					</Link>
				</div>
				<HeaderNav selected = {selected}/>
			</header>	
		);
	}
}

export default Header;