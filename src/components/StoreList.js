import React from "react";
import ListInfo from "./ListInfo";
import { goToTop } from 'react-scrollable-anchor';
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
								goToTop();
								action(store._id,true);
							}}>					
					<ListInfo store = {store} />
					</li>) : ""}
				)}
			</ul>);
	}
	
}

export default StoreList;