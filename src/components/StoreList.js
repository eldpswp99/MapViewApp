import React from "react";
import {Link} from "react-router-dom";
import { goToTop } from 'react-scrollable-anchor';

import ListInfo from "./ListInfo";

import "./StoreList.css";

class StoreList extends React.Component{
	render(){
		
		const {floor,search,stores, category} = this.props;
		
		return (
			<ul className = "storelist">
		{stores.map(store => 
					{
					return ((!floor || store.location === floor) 
									&& (category === store.category || category === "All")
								 &&(!search || store._id.includes(search))) ?
						(<Link to = {{
								pathname : `/storedetail/${store._id}`,
							}}>
							<li className = "store" key = {store._id} onClick ={goToTop}>
							<ListInfo store = {store} />
						</li>
					</Link>) : ""}
				)}
			</ul>);
	}
	
}

export default StoreList;