import React from "react";

function FooterItem({ name, about, hours, badge, address, icons, phone }) {
	return (
		<div className="flex flex-col text-white gap-4 p-x-2 pb-6 mb-6">
			<h1>{name}</h1>
			<p>{phone}</p>
			<p>{about}</p>

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
