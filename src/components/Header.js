import React from "react";
import HeaderNav from "./HeaderNav";
import "./Header.css";

class Header extends React.Component{
	constructor(props){
		super(props);
		
		this.state = {
			selected : "Floor"
		}
		
		this.setSelected = this.setSelected.bind(this);
	}
	
	setSelected(arg){
		this.setState({
			selected : arg
		})
	}
	
	render(){
		return (
			<header>
				<h2 className = "title">알파돔타워</h2>
				<HeaderNav action = {this.setSelected} selected = {this.state.selected}/>
			</header>	
		);
	}
}

export default Header;