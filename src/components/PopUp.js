import React from "react";
import PropTypes from 'prop-types';
import PopUpInfo from "./PopUpInfo";

class PopUp extends React.Component{

	render(){
		const {_id,storeImg,name} = this.props.store;
		
		console.log(this.props.store);
		
		return (
			<div className = "store-popup">
				<div className = "popup-content">
					<button className = "popup-remove-btn" onClick={() => this.props.action(_id,false)} >X</button>
					<h2>{name}</h2>
					<img className = "popupimg" src = {storeImg} alt = {name}></img>
					<PopUpInfo store = {this.props.store} />
				</div>
			</div>
		)
	}
}


export default PopUp;
