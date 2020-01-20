import React from "react";

import "./ListInfo.css";

function ListInfo({store}){
	
	const {location,keyWord,storeImg,_id} = store;
	return (
		<div className = "store-info">
				<img className = "listoreimg" src = {storeImg} alt = {store._id} ></img> 
			<div className = "listinfotext">
				<h1 className = "storename">{_id}</h1>
				<div className = "subinfo">
					<p className = "keyword">{keyWord}</p>
					<p id = "lastsub">{location}</p>
				</div>
			</div>
		</div>
	);
}

export default ListInfo;