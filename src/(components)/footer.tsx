import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 w-full">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* About Section */}
					<div>
						<h3 className="text-lg font-semibold text-aurora-green mb-4">
							Jonathan Redemption
						</h3>
						<p className="text-star">
							{`	Crafting innovative solutions in web and mobile development. Let's
							build something amazing together.`}
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-lg font-semibold text-aurora-green mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#portfolio"
									className="text-star hover:text-aurora-green transition-colors"
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="text-star hover:text-aurora-green transition-colors"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-star hover:text-aurora-green transition-colors"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Connect */}
					<div>
						<h3 className="text-lg font-semibold text-aurora-green mb-4">
							Connect
						</h3>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-star hover:text-aurora-green transition-colors"
							>
								<FaDiscord size={24} />
							</a>
							<a
								href="#"
								className="text-star hover:text-aurora-green transition-colors"
							>
								<FaGithub size={24} />
							</a>
							<a
								href="#"
								className="text-star hover:text-aurora-green transition-colors"
							>
								<FaLinkedin size={24} />
							</a>
							<a
								href="#"
								className="text-star hover:text-aurora-green transition-colors"
							>
								<FaTwitter size={24} />
							</a>
						</div>
					</div>

					{/* Newsletter */}
					<div className="w-full">
						<h3 className="text-lg font-semibold text-aurora-green mb-4">
							Stay Updated
						</h3>
						<form className="flex flex-col sm:flex-row">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-1/2 bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-teal-400"
							/>
							<button
								type="submit"
								className="bg-teal-500 text-blue-900 px-4 py-2 rounded-r hover:bg-teal-600 transition-colors mt-2 sm:mt-0"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="mt-8 pt-8 border-t border-gray-700 text-center">
					<p className="text-gray-400">
						&copy; 2024 Jonathan Redemption. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
