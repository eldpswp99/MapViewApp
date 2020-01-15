import stores from "../data/stores";

const floors = [
	{
		id : "1F",
		mapImg : "./images/1F.png",
		imgWidth : 572,
		linkMap : {
			name : "map_1F",
			areas : stores.filter(store => 
				store.location === "1F"
			)
		}
	},
	{
		id : "2F",
		mapImg : "./images/2F.png",
		imgWidth : 572,
		linkMap : {
			name : "map_1F",
			areas : stores.filter(store => 
				store.location === "1F"
			)
		}
	},
	{
		id : "3F",
		mapImg : "./images/3F.png",
		imgWidth : 572,
		linkMap : {
			name : "map_1F",
			areas : stores.filter(store => 
				store.location === "1F"
			)
		}
	}
];

export default floors;