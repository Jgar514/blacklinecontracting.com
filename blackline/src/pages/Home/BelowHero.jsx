import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import { BsBuildings, BsHouseDoor } from "react-icons/bs";
import FillerHeading from "../../components/ui/FillerHeading";
import Button from "../../components/ui/Button";

function BelowHero() {
	return (
		<>
			<div className="mt-0 md:mt-14 lg:mt-14 bg-white py-8">
				<div className="container mx-auto">
					<FillerHeading heading="Licensed. Insured. Trusted" p="Doing work for families, companies, and our government." />
				</div>
			

			<div className="flex flex-col items-center py-0">
				<div className="h-14 font-xl flex flex-row justify-between px-4 w-full mb-10">
					<BsHouseDoor className="h-30 w-60 flex" style={{ width: "inherit", height: "inherit" }} />
					<BsBuildings className="h-30 w-60 flex" style={{ width: "inherit", height: "inherit" }} />
					<FaFlagUsa className="h-30 w-60 flex" style={{ width: "inherit", height: "inherit" }} />
				</div>

				<Button to="/contact">See Customers</Button>
			</div>
			</div>
		</>
	);
}

export default BelowHero;
