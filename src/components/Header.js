import React from "react";
import HeaderNav from "./HeaderNav";
import "./Header.css";
import {Link} from "react-router-dom";

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
				<div className = "title" onClick ={() => {
						this.setSelected("Floor")
					}}>
					<Link to ="/">
						<h2>알파돔타워</h2>
					</Link>
				</div>
				<HeaderNav action = {this.setSelected} selected = {this.state.selected}/>
			</header>	
		);
	}
}

export default Header;