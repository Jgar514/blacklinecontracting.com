import { virginia, maryland, blankdc } from "../assets";

export default [
	{
		index: 3,
		state: "Washington D.C.",
		counties: [""],
		imgUrl: blankdc,
	},
	{
		index: 1,
		state: "Maryland",
		counties: ["Allegany", "Anne Arundel", "Baltimore", "Calvert", "Caroline", "Carroll", "Cecil", "Charles", "Dorchester", "Frederick", "Garrett", "Harford", "Howard", "Kent", "Montgomery", "PG", "Queen Anne's", "Somerset", "St. Mary's", "Talbot", "Washington", "Wicomico", "Worcester"],

		imgUrl: maryland,
	},
	{
		index: 2,
		state: "Virginia",
		counties: ["Arlington", "Fairfax", "Loudoun", "Prince William", "Alexandria ", "Falls Church ", "Manassas ", "F-burg "],

		imgUrl: virginia,
	},
];
