import React from "react";
import { Education as EducationType } from "@/types/portfolio";

interface EducationProps {
	education: EducationType[];
}

export default function Education({ education }: EducationProps) {
	return (
		<section id="education" className="py-16 sm:py-24 bg-education">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Education
					</h2>
					<div className="w-12 sm:w-16 h-1 bg-linear-to-r from-emerald-500 to-amber-600 mx-auto rounded-full"></div>
				</div>

				<div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
					{education.map((edu, index) => (
						<div
							key={index}
							className="relative group animate-fade-in-up"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-amber-500/20 rounded-xl blur group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
							<div className="relative bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-4 sm:p-8 shadow-lg group-hover:shadow-xl transition-all">
								<div className="flex items-start justify-between mb-4 gap-3 sm:gap-4">
									<div className="flex-1 min-w-0">
										<h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 wrap-break-words">
											{edu.degree}
										</h3>
										<p className="text-base sm:text-lg text-emerald-600 dark:text-emerald-400 font-semibold wrap-break-word">
											{edu.field}
										</p>
									</div>
									<div className="text-2xl sm:text-3xl flex shrink-0 animate-float">
										🎓
									</div>
								</div>

								<div className="space-y-2 sm:space-y-3 my-4 sm:my-6 text-sm sm:text-base">
									<p className="text-gray-700 dark:text-gray-300 wrap-break-words">
										<span className="font-semibold">Institution:</span>{" "}
										{edu.institution}
									</p>
									<p className="text-gray-700 dark:text-gray-300">
										<span className="font-semibold">Year:</span> {edu.year}
									</p>
									{edu.gpa && (
										<p className="text-gray-700 dark:text-gray-300">
											<span className="font-semibold">GPA:</span> {edu.gpa}
										</p>
									)}
								</div>

								{edu.highlights && edu.highlights.length > 0 && (
									<div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-slate-600">
										<p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2 sm:mb-3">
											Highlights:
										</p>
										<ul className="space-y-1 sm:space-y-2">
											{edu.highlights.map((highlight, idx) => (
												<li
													key={idx}
													className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300"
												>
													<span className="w-2 h-2 rounded-full bg-emerald-500 flex shrink-0 mt-1.5"></span>
													<span>{highlight}</span>
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
