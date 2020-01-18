import React from "react";
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom"; 

import stores from "../data/stores";

import "./PopUp.css";

class PopUp extends React.Component{

	render(){	

		const {popup} = this.props.match.params;
		
		const store = stores.find(store => 
			store._id === popup
		);
		
		if(store === undefined)	return (<Redirect to = "floor/1F/All"/>);
		
		
		const {_id,storeImg,name,keyWord,openHour,callNumber} = store;			
		const {history} = this.props;
		
		return (
				<div className = "popupwrapper">
					<div className = "store-popup">
						<div className = "btndiv">
							<button className = "popup-remove-btn" onClick = {history.goBack} >X</button>
							</div>

						<div className = "popup-content">

							<h2>{_id}</h2>
							<img className = "popupimg" src = {storeImg} alt = {name}></img>

							<table className = "popupinfo">
								<tbody>
									<tr>
										<th>매장종류</th>
										<td>{keyWord}</td>
									</tr>
									<tr>
										<th>오픈시간</th>
										<td>{openHour}</td>
									</tr>
									<tr>
										<th>전화번호</th>
										<td>{callNumber}</td>
									</tr>
								</tbody>
							</table>
							</div>

					</div>
				</div>

		 : "")
	}
}
export default PopUp;
