import React, { useState } from "react";
import { Personal } from "@/types/portfolio";

interface HeaderProps {
	scrollToSection: (sectionId: string) => void;
	personal?: Personal;
}

export default function Header({ scrollToSection, personal }: HeaderProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navItems = [
		{ label: "About", id: "about" },
		{ label: "Skills", id: "skills" },
		{ label: "Experience", id: "experience" },
		{ label: "Projects", id: "projects" },
		{ label: "Education", id: "education" },
		{ label: "Achievements", id: "achievements" },
		{ label: "Contact", id: "contact" },
	];

	const handleNavClick = (sectionId: string) => {
		scrollToSection(sectionId);
		setMobileMenuOpen(false);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-black/80 border-b border-gray-200 dark:border-gray-800">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<button
						onClick={() => handleNavClick("home")}
						className="text-xl sm:text-2xl font-bold bg-linear-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent hover:from-emerald-700 hover:to-amber-700 transition-all"
					>
						Portfolio
					</button>{" "}
					{/* Desktop Navigation */}
					<div className="hidden md:flex gap-2 lg:gap-8 items-center">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => handleNavClick(item.id)}
								className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm lg:text-base"
							>
								{item.label}
							</button>
						))}
						{personal?.resume && (
							<a
								href={personal.resume}
								download
								className="ml-4 px-4 py-2 bg-linear-to-r from-emerald-600 to-amber-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-amber-700 transition-all transform hover:scale-105 flex items-center gap-2 text-sm animate-fade-in-up"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
									/>
								</svg>
								Resume
							</a>
						)}
					</div>
					{/* Mobile Menu Button */}
					<button
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
						aria-label="Toggle menu"
					>
						<svg
							className="w-6 h-6 text-gray-700 dark:text-gray-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{mobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Navigation Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden absolute left-0 right-0 top-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
						<div className="px-4 py-2 space-y-1">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => handleNavClick(item.id)}
									className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium rounded-lg"
								>
									{item.label}
								</button>
							))}
							{personal?.resume && (
								<a
									href={personal.resume}
									download
									className="w-full text-left px-4 py-2 text-emerald-600 dark:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-medium rounded-lg flex items-center gap-2"
								>
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
										/>
									</svg>
									Resume
								</a>
							)}
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
