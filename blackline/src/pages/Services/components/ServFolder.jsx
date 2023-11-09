import React from "react";
import { comarray, resarray } from "../../../data/allservices";
import ComServicesSlider from "../components/ComServicesSlider";
import ResServicesSlider from "../components/ResServicesSlider";
import { commercialservices } from "../../../data/allservices";
import SliderItem from "./SliderItem";

import { useKeenSlider } from "keen-slider/react";
function ServFolder({ category, listItems }) {
	return (
		<>
			<h2 className="text-3xl font-bold underline mb-0 px-4 py-4 lg:py-6 bg-white w-fit border-2 rounded-t-2xl dark:bg-[#22262F] dark:text-white ">{category}</h2>
			<div className="lg:  lg:p- border-2 border-b-0 border-black dark:border-white dark:border-2 dark:border-b-0">
				<ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 pl-6 py-4 bg-white dark:bg-[#22262F] lg:p-8 dark:text-white">{listItems}</ul>
			</div>
		</>
	);
}

export default ServFolder;
