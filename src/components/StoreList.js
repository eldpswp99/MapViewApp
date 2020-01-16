import React from "react";
import StoreInfo from "./StoreInfo";
import "./StoreList.css";

class StoreList extends React.Component{
	render(){
		
		const {floor,search,action,stores, category} = this.props;
		
		return (
			<ul className = "storelist">
		{stores.map(store => 
					{
					return ((!floor || store.location === floor) 
									&& (category === store.category || category === "All")
								 &&(!search || store._id.includes(search))) ?
					(<li className = "store" key = {store._id} onClick = {() => {
								action(store._id,true);
							}}>
					<img className = "listoreimg" src = {store.storeImg} alt = {store.name} ></img> 
					<StoreInfo store = {store} />
					</li>) : ""}
				)}
			</ul>);
	}
	
}

export default StoreList;