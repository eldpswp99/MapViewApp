import React from "react";
import HeaderNav from "./HeaderNav";
import "./Header.css";

class Header extends React.Component{
	render(){
		return (
			<header>
				<h2 className = "title">알파돔타워</h2>
				<HeaderNav />
			</header>	
		);
	}
}

export default Header;