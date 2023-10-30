import { hero, fullhouse, building, misc, maryland } from "../assets";

const business = {
	name: "Blackline Contracting",
	about: "Blackline Contracting came together in 2020 when a ect ect",
	hours: "",
	badge: "",
	address: "",
	icons: "",
	phone: "443453419xx",
};

const types = [
	{
		index: 1,
		name: "Commercial",
		img: building,
		link: "/services",
		scroll: "topOfServices",
	},
	{
		index: 2,
		name: "Residential",
		img: fullhouse,
		link: "/services",
		scroll: "middleOfServices",
	},
	{
		index: 3,
		name: "Custom",
		img: misc,
		link: "/services",
	},
];

export { business, types };
