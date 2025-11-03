import React, { useState } from "react";
import Image from "next/image";
import { Personal } from "@/types/portfolio";

interface AboutProps {
	personal: Personal;
}

export default function About({ personal }: AboutProps) {
	const [imageError, setImageError] = useState(false);
	return (
		<section
			id="about"
			className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						About Me
					</h2>
					<div className="w-12 sm:w-16 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
					<div className="animate-fade-in-left order-2 md:order-1">
						<p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed animate-fade-in-up">
							{personal.summary}
						</p>
						<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
							With {personal.title.toLowerCase()} experience spanning over a
							year and a half, I&apos;ve had the opportunity to work on diverse
							projects that have sharpened my skills in both frontend and
							backend development.
						</p>

						<div className="space-y-3 sm:space-y-4">
							<div className="flex items-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-200">
								<div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
									<span className="text-xl sm:text-2xl">💡</span>
								</div>
								<div className="min-w-0">
									<h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
										Problem Solving
									</h3>
									<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
										Creative solutions to complex challenges
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-300">
								<div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
									<span className="text-xl sm:text-2xl">🚀</span>
								</div>
								<div className="min-w-0">
									<h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
										Quick Learner
									</h3>
									<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
										Adapting to new technologies rapidly
									</p>
								</div>
							</div>
							<div className="flex items-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-400">
								<div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
									<span className="text-xl sm:text-2xl">🤝</span>
								</div>
								<div className="min-w-0">
									<h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
										Team Player
									</h3>
									<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
										Collaborative approach to development
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative animate-fade-in-right order-1 md:order-2 flex justify-center items-center">
						<div className="w-full max-w-md sm:max-w-lg">
							{personal.profileImage ? (
								<div className="relative group">
									{/* Animated border glow */}
									<div className="absolute -inset-1 sm:-inset-2 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>

									{/* Outer frame - Premium look */}
									<div className="relative bg-white dark:bg-slate-800 rounded-3xl p-2 sm:p-3 shadow-2xl">
										{/* Image container with aspect ratio */}
										<div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center">
											{!imageError && (
												<Image
													src={personal.profileImage}
													alt={personal.name}
													fill
													className="object-cover object-top hover:scale-105 transition-transform duration-500"
													priority
													onError={() => setImageError(true)}
													sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 500px, 600px"
												/>
											)}
											{imageError && (
												<div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-600">
													<div className="text-center">
														<div className="text-6xl sm:text-7xl mb-4">👨‍💻</div>
														<p className="text-white text-sm sm:text-base font-semibold">
															Add your profile picture
														</p>
													</div>
												</div>
											)}
										</div>
									</div>
								</div>
							) : (
								<div className="relative group">
									{/* Fallback gradient box */}
									<div className="absolute -inset-1 sm:-inset-2 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>

									<div className="relative bg-white dark:bg-slate-800 rounded-3xl p-2 sm:p-3 shadow-2xl">
										<div className="relative w-full aspect-square bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
											<div className="text-center px-4">
												<div className="text-6xl sm:text-7xl mb-4 animate-float">
													👨‍💻
												</div>
												<p className="text-white text-sm sm:text-base font-semibold">
													Add your profile picture
												</p>
												<p className="text-blue-200 text-xs sm:text-sm mt-2">
													Update profileImage in portfolio.json
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
