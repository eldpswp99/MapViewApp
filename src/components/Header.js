import React from "react";
import HeaderNav from "./HeaderNav";

class Header extends React.Component{
	render(){
		return (
			<header>
				<h2 className = "title">판교 알파돔타워</h2>
				<HeaderNav />
			</header>	
		);
	}
}

export default Header;