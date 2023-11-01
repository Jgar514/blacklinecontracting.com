import React from "react";
import { FaFlagUsa } from "react-icons/fa";
import { BsBuildings, BsHouseDoor } from "react-icons/bs";
import FillerHeading from "../../components/ui/FillerHeading";
import Button from "../../components/global/Button";

function BelowHero() {
	return (
		<>
			<div className="bg-gray-100 p-4 flex justify-center items-center lg:hidden ">
				<div className="mt-0  lg:mt-14 bg-white py-8 px-2 rounded-xl flex justify-center flex-col w-full md:w-5/6 gap-2 items-center border-black border-2">
					<div className="container flex justify-center md:w-full">
						<FillerHeading heading="Licensed. Insured. Trusted" p="Doing work for families, companies, and our government." />
					</div>

					<div className="flex flex-col items-center py-0 w-full">
						<div className="h-14 font-xl flex flex-row justify-between px-4 w-full mb-10">
							<BsHouseDoor className="h-30 w-60 flex" style={{ width: "inherit", height: "inherit" }} />
							<BsBuildings className="h-30 w-60 flex" style={{ width: "inherit", height: "inherit" }} />
							<FaFlagUsa className="h-30 w-60 flex" style={{ width: "inherit", height: "inherit" }} />
						</div>

						<Button to="/contact">See Customers</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export default BelowHero;
