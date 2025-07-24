import { Rocket } from "lucide-react";
import React from "react";

const ComingSoon = () => {
	return (
		<div className="bg-gradient-to-r my-10 from-purple-600 to-indigo-600 min-h-screen flex items-center justify-center px-4">
			<div className="max-w-4xl mx-auto text-center">
				<Rocket className="text-white text-6xl mb-8 mx-auto" />
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
					Exciting Features Coming Soon!
				</h1>
				<p className="text-xl md:text-2xl text-purple-200 mb-8">
					{`	I'm working on some amazing updates to enhance your experience. Stay
					tuned for:`}
				</p>

				{/* <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-purple-100 transition duration-300">
					Notify Me
				</button> */}
			</div>
		</div>
	);
};

export default ComingSoon;
