import React from "react";
import { Skill } from "@/types/portfolio";
import Image from "next/image";

interface SkillsProps {
	skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
	const skillColors: { [key: string]: string } = {
		Frontend: "from-blue-500 to-cyan-500",
		Backend: "from-purple-500 to-pink-500",
		"Tools & Platforms": "from-green-500 to-teal-500",
	};

	return (
		<section
			id="skills"
			className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Tech Stack & Skills
					</h2>
					<div className="w-12 sm:w-16 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="group h-full transform hover:scale-105 transition-transform duration-300 animate-scale-in"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="bg-white dark:bg-slate-700 rounded-xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-shadow">
								<div
									className={`w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-linear-to-br ${
										skillColors[skill.category] || "from-gray-500 to-gray-600"
									} mb-6 flex items-center justify-center`}
								>
									<span className="text-xl sm:text-2xl">
										{skill.category === "Frontend" && "🎨"}
										{skill.category === "Backend" && "⚙️"}
										{skill.category === "Tools & Platforms" && "🛠️"}
									</span>
								</div>
								<h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
									{skill.category}
								</h3>
								<div className="space-y-2 sm:space-y-3">
									{skill.technologies.map((tech, techIndex) => {
										const techName =
											typeof tech === "string" ? tech : tech.name;
										const logoUrl =
											typeof tech === "object" && tech.logo
												? tech.logo
												: undefined;

										return (
											<div
												key={techIndex}
												className="flex items-center gap-3 group/item"
											>
												{logoUrl ? (
													<div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center relative">
														<Image
															src={logoUrl}
															alt={techName}
															width={24}
															height={24}
															className="w-full h-full object-contain filter dark:invert"
															onError={() => {
																// Fallback to dot if image fails
															}}
														/>
													</div>
												) : (
													<div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 group-hover/item:scale-150 transition-transform shrink-0"></div>
												)}
												<span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">
													{techName}
												</span>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Skill Bars Visualization */}
				<div className="mt-12 sm:mt-20 animate-fade-in-up">
					<h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
						Proficiency Levels
					</h3>
					<div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
						{[
							{ name: "React & Next.js", level: 90 },
							{ name: "TypeScript", level: 85 },
							{ name: "Node.js & Express", level: 85 },
							{ name: "Database Design", level: 80 },
							{ name: "UI/UX Implementation", level: 85 },
							{ name: "DevOps & Deployment", level: 50 },
						].map((skill, index) => (
							<div
								key={index}
								className="animate-fade-in-up"
								style={{ animationDelay: `${(index + skills.length) * 100}ms` }}
							>
								<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1 sm:gap-0">
									<span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold truncate">
										{skill.name}
									</span>
									<span className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base">
										{skill.level}%
									</span>
								</div>
								<div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2 overflow-hidden">
									<div
										className="bg-linear-to-r from-blue-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
										style={{ width: `${skill.level}%` }}
									></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
