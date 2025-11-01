import React from "react";
import { Personal } from "@/types/portfolio";

interface FooterProps {
	personal: Personal;
}

export default function Footer({ personal }: FooterProps) {
	// Use a fixed year or calculate it without causing hydration issues
	const currentYear = 2025;

	return (
		<footer className="bg-slate-900 dark:bg-black text-gray-300 border-t border-slate-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
					{/* About */}
					<div>
						<h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
							{personal.name}
						</h3>
						<p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
							{personal.title} with a passion for creating beautiful and
							functional web experiences.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2 text-xs sm:text-sm">
							{["About", "Skills", "Projects", "Experience", "Contact"].map(
								(link) => (
									<li key={link}>
										<a
											href={`#${link.toLowerCase()}`}
											className="text-gray-400 hover:text-blue-400 transition-colors"
										>
											{link}
										</a>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Call to Action */}
					<div className="sm:col-span-2 md:col-span-1">
						<h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
							Let&apos;s Work Together
						</h3>
						<p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
							I&apos;m interested in freelance and full-time opportunities.
						</p>
						<a
							href={`mailto:${personal.email}`}
							className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded transition-colors"
						>
							Get In Touch
						</a>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-slate-800 pt-6 sm:pt-8">
					<div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
						<p className="text-gray-400 text-xs sm:text-sm">
							© {currentYear} {personal.name}. All rights reserved.
						</p>
						<p className="text-gray-400 text-xs sm:text-sm">
							Crafted with ❤️ using Next.js & Tailwind CSS
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
