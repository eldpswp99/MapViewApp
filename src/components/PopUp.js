import React from "react";
import stores from "../data/stores";

class PopUp(){

	state : {
		showImg : true
	}

	render(){
		const {showImg} = this.props;
		
		showImg ? return <showPopUp /> : return "";
	}
	
	showPopUp(){
		{storeImg,name,openHour,callNumber,kind} = this.props;
	
		return (
			<div className = "store-popup">
				<button type = "button" onClick = {buttonClick}>X</button>
				<img src = {storeImg} alt = {name}></img>
				<h3 className = "store-name">{name}</h3>
				<h3 className = "store-kind">{kind}</h3>
				<h5 className = "store-openhour">{openHour}</h5>
				<h5 className = "store-callnumber">{callNumber}</h5>
			</div>
		);
	}
		
	buttonClick(){
		this.setState({showImg : false})
	}
}

export default PopUp;
