import React, { useState } from "react";
import { Project } from "@/types/portfolio";
import Link from "next/link";

interface ProjectsProps {
	projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
	const [hoveredProject, setHoveredProject] = useState<number | null>(null);
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	const openProjectModal = (index: number) => {
		setSelectedProject(index);
	};

	const closeProjectModal = () => {
		setSelectedProject(null);
	};

	return (
		<section
			id="projects"
			className="py-16 sm:py-24 bg-linear-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Featured Projects
					</h2>
					<p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 px-2 animate-fade-in-up">
						Showcasing my best work and technical expertise
					</p>
					<div className="w-12 sm:w-16 h-1 bg-linear-to-r from-emerald-500 to-amber-600 mx-auto rounded-full mt-4 sm:mt-6"></div>
				</div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
					{projects.map((project, index) => (
						<div
							key={index}
							onMouseEnter={() => setHoveredProject(index)}
							onMouseLeave={() => setHoveredProject(null)}
							onClick={() => openProjectModal(index)}
							className="group relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-scale-up cursor-pointer"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							{/* Background image or gradient */}
							<div className="absolute inset-0 bg-linear-to-br from-emerald-500 via-teal-500 to-amber-600 opacity-40"></div>
							<div className="absolute inset-0 bg-slate-900/80"></div>{" "}
							{/* Content */}
							<div className="relative h-full flex flex-col justify-between p-4 sm:p-8 z-10">
								<div>
									<h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">
										{project.title}
									</h3>
									<div className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3">
										{project.description}
									</div>
								</div>

								{/* Technologies */}
								<div>
									<div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
										{project.technologies.map((tech, idx) => (
											<span
												key={idx}
												className="px-2 sm:px-3 py-1 bg-blue-500/30 border border-blue-400/50 text-blue-200 rounded-full text-xs font-semibold"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Links */}
									<div
										className={`flex gap-2 sm:gap-3 transition-all duration-300 ${
											hoveredProject === index
												? "translate-y-0 opacity-100"
												: "translate-y-4 opacity-0"
										}`}
									>
										{project.link && (
											<Link
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-center text-xs sm:text-sm"
											>
												Code
											</Link>
										)}
										{project.liveDemo && (
											<Link
												href={project.liveDemo}
												target="_blank"
												rel="noopener noreferrer"
												className="flex-1 px-3 sm:px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-center text-xs sm:text-sm"
											>
												Live Demo
											</Link>
										)}
									</div>
								</div>
							</div>
							{/* Hover overlay */}
							<div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
						</div>
					))}
				</div>
			</div>

			{/* Modal for expanded project view */}
			{selectedProject !== null && (
				<>
					{/* Backdrop */}
					<div
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
						onClick={closeProjectModal}
					/>

					{/* Modal */}
					<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
						<div className="bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-96 flex flex-col border border-slate-700">
							{/* Modal Header */}
							<div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700 bg-linear-to-r from-emerald-900/20 to-amber-900/20">
								<h3 className="text-lg sm:text-2xl font-bold text-white">
									{projects[selectedProject].title}
								</h3>
								<button
									onClick={closeProjectModal}
									className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
									aria-label="Close"
								>
									✕
								</button>
							</div>

							{/* Modal Content - Scrollable */}
							<div className="flex-1 overflow-y-auto p-4 sm:p-6">
								{/* Description */}
								<div className="mb-6">
									<h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-2">
										Description
									</h4>
									<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
										{projects[selectedProject].description}
									</p>
								</div>

								{/* Technologies */}
								<div>
									<h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-3">
										Technologies
									</h4>
									<div className="flex flex-wrap gap-2">
										{projects[selectedProject].technologies.map((tech, idx) => (
											<span
												key={idx}
												className="px-3 py-1 bg-blue-500/30 border border-blue-400/50 text-blue-200 rounded-full text-xs sm:text-sm font-semibold"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Modal Footer - Links */}
							<div className="border-t border-slate-700 p-4 sm:p-6 bg-slate-950/50 flex gap-3">
								{projects[selectedProject].link && (
									<Link
										href={projects[selectedProject].link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-center text-sm"
									>
										View Code
									</Link>
								)}
								{projects[selectedProject].liveDemo && (
									<Link
										href={projects[selectedProject].liveDemo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors text-center text-sm"
									>
										Live Demo
									</Link>
								)}
								<button
									onClick={closeProjectModal}
									className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors text-sm"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</section>
	);
}
