import React from "react";
import {Link} from "react-router-dom";

import "./Header.css";


class Header extends React.Component{
	render(){		
		return (
			<header>
				<div className = "title">
					<Link to ="/floor/1F/All">
						<img className = "logo" src = "./images/logo.png" alt = "logo"></img>
					</Link>
				</div>
			</header>	
		);
	}
}

export default Header;