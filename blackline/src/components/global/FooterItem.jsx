import React from "react";

function FooterItem({ name, about, hours, badge, address, icons, phone }) {
	return (
		<div className="flex flex-col text-white gap-4 px-4 pb-6 mb-6">
			<div className="w-full flex flex-col items-center gap-2">
				<h1 className="text-2xl">{name}</h1>
				<p className="text-lg">{phone}</p>
				<div>
					<p>{about}</p>
				</div>
			</div>

			<p>
				{hours.map((item) => (
					<span className="flex flex-col">{item}</span>
				))}
			</p>
			<p>{address}</p>
		</div>
	);
}

export default FooterItem;
