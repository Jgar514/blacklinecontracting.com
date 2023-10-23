import { maryland, virginia, dc, blankdc, county1, county2 } from "../assets";
import React from "react";

function Maryland() {
	return (
		<>
			<div className="flex flex-col gap-4 w-full">
				<div className="flex flex-row w-full">
					<div className="flex flex-col w-1/2 items-center">
						<h1>Maryland</h1>
						<img className="object-contain h-48 w-48" src={county1} />
					</div>
					<div className="flex flex-row w-1/2  gap-x-4">
						<div className="flex flex-col">
							{" "}
							<h1>County1</h1>
							<p>County1</p>
							<p>County2</p>
							<p>County3</p>
						</div>
						<div>
							{" "}
							<h1>County1</h1>
							<p>County1</p>
							<p>County2</p>
							<p>County3</p>
						</div>
					</div>
				</div>
				<div className="flex flex-row w-full">
					<div className="flex flex-col w-1/2 items-center">
						<h1>Virginia</h1>
						<img className="object-contain h-48 w-48" src={county2} />
					</div>
					<div className="flex flex-row w-1/2  gap-x-4">
						<div className="flex flex-col">
							{" "}
							<h1>County1</h1>
							<p>County1</p>
							<p>County2</p>
							<p>County3</p>
						</div>
						<div>
							{" "}
							<h1>County1</h1>
							<p>County1</p>
							<p>County2</p>
							<p>County3</p>
						</div>
					</div>
				</div>
				<div className="flex flex-row w-full">
					<div className="flex flex-col w-1/2 items-center">
						<h1>Maryland</h1>
						<img className="object-contain h-48 w-48" src={blankdc} />
					</div>
					<div className="flex flex-row w-1/2  gap-x-4">
						<div className="flex flex-col">
							{" "}
							<h1>County1</h1>
							<p>County1</p>
							<p>County2</p>
							<p>County3</p>
						</div>
						<div>
							{" "}
							<h1>County1</h1>
							<p>County1</p>
							<p>County2</p>
							<p>County3</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Maryland;
