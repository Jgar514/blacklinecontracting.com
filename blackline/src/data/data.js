import { hero, fullhouse, building, misc, maryland } from "../assets";

const business = {
	name: "Blackline Contracting",
	about: "Blackline Contracting is here to help with any of your general contracting needs. Whether you’re a homeowner or a business owner, Blackline Contracting is your trusted partner to get your job done.",
	tagline: "Welcome to Blackline Contracting. We turn your visions into reality with precision and professionalism. Let's build together!",
	shorttag: "Build Your Vision",
	CTA: "Free Quote",
	hours: ["Mon-Fri: ", "Sat:", "Sun:"],
	badge: "",
	address: "600 Three St. 21409",
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
