import React from "react";
import { Experience as ExperienceType } from "@/types/portfolio";

interface ExperienceProps {
	experience: ExperienceType[];
}

// Calculate duration in years and months
const calculateDuration = (startDate: string, endDate: string): string => {
	if (!startDate || !endDate) return "";

	const start = new Date(startDate);
	const end = new Date(endDate);

	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() - start.getMonth();

	if (months < 0) {
		years--;
		months += 12;
	}

	const parts = [];
	if (years > 0) parts.push(`${years} year${years > 1 ? "s" : ""}`);
	if (months > 0) parts.push(`${months} month${months > 1 ? "s" : ""}`);

	return parts.length > 0 ? `(${parts.join(", ")})` : "";
};

export default function Experience({ experience }: ExperienceProps) {
	return (
		<section id="experience" className="py-16 sm:py-24 bg-experience">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Professional Experience
					</h2>
					<div className="w-12 sm:w-16 h-1 bg-linear-to-r from-emerald-500 to-amber-600 mx-auto rounded-full"></div>
				</div>

				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-emerald-500 via-teal-500 to-amber-600 md:transform md:-translate-x-1/2"></div>

					{/* Timeline items */}
					<div className="space-y-8 sm:space-y-12">
						{experience.map((exp, index) => (
							<div
								key={index}
								className={`relative pl-16 sm:pl-24 md:pl-0 md:flex ${
									index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
								} animate-fade-in-up`}
								style={{ animationDelay: `${index * 150}ms` }}
							>
								{/* Timeline dot */}
								<div className="absolute left-0 sm:left-2 md:left-1/2 top-0 md:transform md:-translate-x-1/2 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-linear-to-br from-emerald-500 to-amber-600 flex items-center justify-center border-4 border-white dark:border-slate-900 animate-bounce-in">
									<span className="text-lg sm:text-xl">💼</span>
								</div>

								{/* Content */}
								<div
									className={`md:w-1/2 ${
										index % 2 === 0 ? "md:pr-12" : "md:pl-12"
									}`}
								>
									<div className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
										<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-4">
											<div className="flex-1 min-w-0">
												<h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white wrap-break-word">
													{exp.role}
												</h3>
												<div className="flex flex-col gap-1 mt-1">
													{exp.companyWebsite ? (
														<a
															href={exp.companyWebsite}
															target="_blank"
															rel="noopener noreferrer"
															className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 w-fit"
														>
															{exp.company}
															<span className="text-xs">↗</span>
														</a>
													) : (
														<p className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 font-semibold">
															{exp.company}
														</p>
													)}
													{exp.startDate && exp.endDate && (
														<p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic">
															{calculateDuration(exp.startDate, exp.endDate)}
														</p>
													)}
												</div>
											</div>
											<span className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 rounded-full mt-2 sm:mt-0 whitespace-nowrap">
												{exp.duration}
											</span>
										</div>

										<p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed">
											{exp.description}
										</p>

										{exp.skillsUsed && exp.skillsUsed.length > 0 && (
											<div className="mb-4 sm:mb-6">
												<p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
													Skills Used:
												</p>
												<div className="flex flex-wrap gap-2">
													{exp.skillsUsed.map((skill, idx) => (
														<span
															key={idx}
															className="inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg"
														>
															{skill}
														</span>
													))}
												</div>
											</div>
										)}

										{exp.achievements && exp.achievements.length > 0 && (
											<div className="space-y-2">
												<p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">
													Key Achievements:
												</p>
												<ul className="space-y-2">
													{exp.achievements.map((achievement, idx) => (
														<li
															key={idx}
															className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
														>
															<span className="text-emerald-500 font-bold mt-1 shrink-0">
																✓
															</span>
															<span>{achievement}</span>
														</li>
													))}
												</ul>
											</div>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
