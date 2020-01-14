import React from "react";

function StoreInfo({store}){
	
	const {_id,storeImg,name,openHour,callNumber,keyWord} = store;
	return (
		<div className = "store-info">
			<dl>
				<dt>매장종류</dt>
				<dd>{keyWord}</dd>
				<dt>오픈시간</dt>
				<dd>{openHour}</dd>
				<dt>전화번호</dt>
				<dd>{callNumber}</dd>
			</dl>
		</div>
	);
}

export default StoreInfo;