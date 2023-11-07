import React from "react";
import ThemeSwitcher from "../components/global/themeswitcher";

function Test() {
	return (
		<div className="bg-blue-100 mt-10 w-screen h-screen">
			<div className="w-1/3 h-1/2 bg-slate-200 rounded-lg shadow-md flex justify-center items-center">
				<div className="flex justify-center items-center bg-yellow-100 w-1/2 h-1/2">
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
}

export default Test;
