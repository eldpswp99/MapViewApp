import React from "react";
import PropTypes from 'prop-types';

class PopUp extends React.Component{

	
	render(){
		const {_id,storeImg,name,openHour,callNumber,kind} = this.props.store;
		
		return (
			<div className = "store-popup">
				<button className = "popup-remove-btn" onClick={() => this.props.action(_id)} arg = {_id}>X</button>
				<img src = {storeImg} alt = {name}></img>
				<h3 className = "store-name">{name}</h3>
				<h3 className = "store-kind">{kind}</h3>
				<h5 className = "store-openhour">{openHour}</h5>
				<h5 className = "store-callnumber">{callNumber}</h5>
			</div>
		)
	}
}

PopUp.propTypes = {
	action : PropTypes.func,
	store : PropTypes.shape({
		_id : PropTypes.string.isRequired,
		storeImg : PropTypes.string.isRequired,
		name : PropTypes.string.isRequired,
		openHour : PropTypes.string.isRequired,
		callNumber : PropTypes.string.isRequired,
		kind : PropTypes.string.isRequired
	})
}

export default PopUp;
