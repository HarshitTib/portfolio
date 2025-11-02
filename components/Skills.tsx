import React from "react";
import { Skill } from "@/types/portfolio";
import Image from "next/image";

interface SkillsProps {
	skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
	const skillColors: { [key: string]: { gradient: string; icon: string } } = {
		Frontend: { gradient: "from-blue-400 to-cyan-500", icon: "🎨" },
		Backend: { gradient: "from-purple-400 to-pink-500", icon: "⚙️" },
		"Tools & Platforms": { gradient: "from-green-400 to-teal-500", icon: "🛠️" },
	};

	return (
		<section
			id="skills"
			className="py-16 sm:py-24 bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
		>
			{/* Animated background orbs */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl animate-float"></div>
				<div
					className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "2s" }}
				></div>
				<div
					className="absolute top-1/2 right-1/4 w-60 h-60 bg-teal-400/5 rounded-full blur-3xl animate-float"
					style={{ animationDelay: "4s" }}
				></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-16 sm:mb-20 animate-fade-in-down">
					<span className="inline-block px-4 py-2 mb-4 text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 uppercase tracking-wide">
						💡 Technology & Expertise
					</span>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						My Tech Stack
					</h2>
					<p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
						A curated collection of technologies I use to build beautiful, scalable, and performant applications
					</p>
					<div className="w-12 sm:w-20 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-6 rounded-full"></div>
				</div>

				{/* Tech Stack Cards */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="group animate-scale-in"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="relative h-full">
								{/* Gradient border effect on hover */}
								<div
									className={`absolute inset-0 rounded-2xl bg-linear-to-br ${
										skillColors[skill.category]?.gradient || "from-gray-400 to-gray-500"
									} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
								></div>

								{/* Card */}
								<div className="relative bg-white dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-600 group-hover:border-gray-200 dark:group-hover:border-slate-500">
									{/* Category Header */}
									<div className="flex items-start justify-between mb-6">
										<div className="flex-1">
											<div
												className={`w-12 h-12 rounded-xl bg-linear-to-br ${
													skillColors[skill.category]?.gradient || "from-gray-400 to-gray-500"
												} mb-4 flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
											>
												{skillColors[skill.category]?.icon || "🚀"}
											</div>
											<h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
												{skill.category}
											</h3>
										</div>
										<span className="text-xs sm:text-sm font-semibold text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-slate-600 px-3 py-1 rounded-full">
											{skill.technologies.length} tools
										</span>
									</div>

									{/* Technologies Grid */}
									<div className="space-y-3">
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
													className="group/tech flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-600/50 transition-colors duration-200"
												>
													{logoUrl ? (
														<div className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center">
															<Image
																src={logoUrl}
																alt={techName}
																width={24}
																height={24}
																className="w-full h-full object-contain filter dark:invert group-hover/tech:scale-110 transition-transform"
															/>
														</div>
													) : (
														<div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-purple-500 shrink-0"></div>
													)}
													<span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium group-hover/tech:text-transparent group-hover/tech:bg-clip-text group-hover/tech:bg-linear-to-r group-hover/tech:from-blue-600 group-hover/tech:to-purple-600 transition-all">
														{techName}
													</span>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Proficiency Levels - Circular */}
				<div className="animate-fade-in-up">
					<div className="mb-12">
						<h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
							Proficiency & Expertise
						</h3>
						<p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
							My skill level across key technologies and frameworks
						</p>
						<div className="w-12 h-1 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mt-4"></div>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
						{[
							{
								name: "React & Next.js",
								level: 90,
								color: "from-blue-500 to-cyan-500",
							},
							{
								name: "TypeScript",
								level: 85,
								color: "from-blue-600 to-blue-400",
							},
							{
								name: "Node.js & Express",
								level: 85,
								color: "from-green-500 to-emerald-500",
							},
							{
								name: "Database Design",
								level: 80,
								color: "from-purple-500 to-pink-500",
							},
							{
								name: "UI/UX Implementation",
								level: 85,
								color: "from-yellow-500 to-orange-500",
							},
							{
								name: "DevOps & Deployment",
								level: 50,
								color: "from-red-500 to-orange-500",
							},
						].map((skill, index) => (
							<div
								key={index}
								className="group animate-fade-in-up"
								style={{ animationDelay: `${(index + skills.length) * 100}ms` }}
							>
								<div className="flex flex-col items-center">
									{/* Circular Progress */}
									<div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4">
										{/* Background circle */}
										<svg
											className="w-full h-full transform -rotate-90"
											viewBox="0 0 120 120"
										>
											<circle
												cx="60"
												cy="60"
												r="54"
												fill="none"
												stroke="currentColor"
												strokeWidth="8"
												className="text-gray-200 dark:text-slate-600"
											/>
											{/* Progress circle */}
											<circle
												cx="60"
												cy="60"
												r="54"
												fill="none"
												stroke="url(#gradient)"
												strokeWidth="8"
												strokeDasharray={`${(skill.level / 100) * 2 * Math.PI * 54} ${2 * Math.PI * 54}`}
												strokeLinecap="round"
												className="transition-all duration-1000 ease-out group-hover:stroke-width-10"
											/>
											<defs>
												<linearGradient
													id="gradient"
													x1="0%"
													y1="0%"
													x2="100%"
													y2="100%"
												>
													<stop
														offset="0%"
														stopColor={
															skill.color.includes("blue")
																? "#3b82f6"
																: skill.color.includes("green")
																	? "#10b981"
																	: skill.color.includes("purple")
																		? "#a855f7"
																		: skill.color.includes("yellow")
																			? "#eab308"
																			: "#ef4444"
														}
													/>
													<stop
														offset="100%"
														stopColor={
															skill.color.includes("cyan")
																? "#06b6d4"
																: skill.color.includes("emerald")
																	? "#059669"
																	: skill.color.includes("pink")
																		? "#ec4899"
																		: skill.color.includes("orange")
																			? "#f97316"
																			: "#dc2626"
														}
													/>
												</linearGradient>
											</defs>
										</svg>

										{/* Center text */}
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="text-center">
												<span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
													{skill.level}%
												</span>
											</div>
										</div>
									</div>

									{/* Skill name */}
									<h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white text-center">
										{skill.name}
									</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
