import React from "react";
import PropTypes from 'prop-types';
import "./PopUp.css";

class PopUp extends React.Component{

	render(){
		const {_id,storeImg,name,keyWord,openHour,callNumber} = this.props.store;
		
		return (
			<div className = "popupwrapper">
				<div className = "store-popup">
					<div className = "btndiv">
						<button className = "popup-remove-btn" onClick={() => this.props.action(_id,false)} >X</button>
						</div>

					<div className = "popup-content">

						<h2>{_id}</h2>
						<img className = "popupimg" src = {storeImg} alt = {name}></img>

						<table className = "popupinfo">
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
						</table>
						</div>

				</div>
			</div>
		)
	}
}


export default PopUp;
