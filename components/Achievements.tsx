import React from "react";
import { Achievement } from "@/types/portfolio";

interface AchievementsProps {
	achievements: Achievement[];
}

export default function Achievements({ achievements }: AchievementsProps) {
	const achievementIcons: { [key: string]: string } = {
		Award: "🏆",
		Hackathon: "🎯",
		Certification: "📜",
	};

	return (
		<section id="achievements" className="py-16 sm:py-24 bg-achievements">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Achievements & Certifications
					</h2>
					<div className="w-12 sm:w-16 h-1 bg-linear-to-r from-emerald-500 to-amber-600 mx-auto rounded-full"></div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{achievements.map((achievement, index) => (
						<div
							key={index}
							className="group relative p-6 sm:p-8 bg-white dark:bg-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-rotate-in"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							{/* Background gradient on hover */}
							<div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-amber-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

							<div className="relative z-10">
								<div className="flex items-start justify-between mb-4">
									<div className="text-3xl sm:text-4xl animate-float">
										{achievementIcons[achievement.title.split(" ")[0]] || "⭐"}
									</div>
									<span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">
										{achievement.date}
									</span>
								</div>

								<h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
									{achievement.title}
								</h3>

								<p className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
									{achievement.issuer}
								</p>

								<p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
									{achievement.description}
								</p>

								{/* Decorative border */}
								<div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-amber-500 to-transparent rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
							</div>
						</div>
					))}
				</div>

				{/* Stats section */}
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-20">
					{[
						{ label: "Years of Experience", value: "1.5+" },
						{ label: "Projects Completed", value: "5+" },
						{ label: "Technologies Mastered", value: "10+" },
					].map((stat, index) => (
						<div
							key={index}
							className="text-center p-4 sm:p-6 bg-linear-to-br from-emerald-500/20 to-amber-500/20 rounded-xl border border-emerald-200/50 dark:border-amber-400/50 animate-scale-in"
							style={{ animationDelay: `${index * 150}ms` }}
						>
							<div className="text-2xl sm:text-4xl font-bold bg-linear-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent mb-2">
								{stat.value}
							</div>
							<p className="text-xs sm:text-base text-gray-700 dark:text-gray-300 font-semibold">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
