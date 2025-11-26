"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PersonalData {
	name: string;
	title: string;
	email: string;
	phone: string;
	location: string;
	resume: string;
}

export default function ResumePage() {
	const [personalData, setPersonalData] = useState<PersonalData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/data/portfolio.json");
				const data = await response.json();
				setPersonalData(data.personal);
			} catch (error) {
				console.error("Error fetching portfolio data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<main className="min-h-screen bg-resume">
			{/* Header Navigation */}
			<header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-700">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
					<Link href="/" className="flex items-center gap-2">
						<button className="text-xl sm:text-2xl font-bold bg-linear-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent hover:from-emerald-700 hover:to-amber-700 transition-all">
							Portfolio
						</button>
					</Link>
					<nav className="flex gap-4 sm:gap-6 items-center">
						<Link
							href="/#projects"
							className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm lg:text-base"
						>
							Projects
						</Link>
						<Link
							href="/#experience"
							className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm lg:text-base"
						>
							Experience
						</Link>
						<Link
							href="/#contact"
							className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium text-sm lg:text-base"
						>
							Contact
						</Link>
					</nav>
				</div>
			</header>

			{/* Main Content */}
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
				{loading ? (
					<div className="flex items-center justify-center min-h-[600px]">
						<div className="animate-spin">
							<div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full"></div>
						</div>
					</div>
				) : personalData ? (
					<>
						{/* Resume Header */}
						<div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
							<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
								My Resume
							</h1>
							<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6">
								{personalData.name} • {personalData.title}
							</p>
							<div className="w-12 sm:w-20 h-1 bg-linear-to-r from-emerald-500 to-amber-600 mx-auto rounded-full mb-8"></div>
						</div>

						{/* Resume Preview Section */}
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
							{/* Left Column - Info */}
							<div className="lg:col-span-1 animate-fade-in-left">
								<div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
									{/* Contact Info */}
									<div>
										<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
											Contact Information
										</h3>
										<div className="space-y-3">
											<div className="flex items-center gap-3">
												<span className="text-2xl">📧</span>
												<div>
													<p className="text-xs text-gray-600 dark:text-gray-400">
														Email
													</p>
													<a
														href={`mailto:${personalData.email}`}
														className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline break-all"
													>
														{personalData.email}
													</a>
												</div>
											</div>
											<div className="flex items-center gap-3">
												<span className="text-2xl">📱</span>
												<div>
													<p className="text-xs text-gray-600 dark:text-gray-400">
														Phone
													</p>
													<a
														href={`tel:${personalData.phone}`}
														className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
													>
														{personalData.phone}
													</a>
												</div>
											</div>
											<div className="flex items-center gap-3">
												<span className="text-2xl">📍</span>
												<div>
													<p className="text-xs text-gray-600 dark:text-gray-400">
														Location
													</p>
													<p className="text-gray-900 dark:text-white font-semibold">
														{personalData.location}
													</p>
												</div>
											</div>
										</div>
									</div>

									{/* Quick Links */}
									<div className="border-t border-gray-200 dark:border-slate-700 pt-6">
										<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
											Quick Links
										</h3>
										<div className="space-y-2">
											<Link
												href="/"
												className="block w-full px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-lg font-semibold transition-colors text-center"
											>
												← Back to Portfolio
											</Link>
											<a
												href={`/#contact`}
												className="block w-full px-4 py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-lg font-semibold transition-colors text-center"
											>
												Contact Me
											</a>
										</div>
									</div>
								</div>
							</div>

							{/* Right Column - Resume Preview & Download */}
							<div className="lg:col-span-2 animate-fade-in-right">
								{/* Resume Preview */}
								<div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
									<h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
										Resume Preview
									</h3>
									<p className="text-gray-600 dark:text-gray-400 mb-6">
										View and download your complete resume. This document
										contains your professional experience, education, skills,
										and achievements.
									</p>

									{/* PDF Preview Placeholder */}
									<div className="bg-linear-to-br from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-8 sm:p-12 mb-6 text-center border-2 border-dashed border-gray-300 dark:border-slate-500">
										<div className="text-6xl mb-4">📄</div>
										<h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
											Resume Document
										</h4>
										<p className="text-gray-600 dark:text-gray-400 mb-6">
											Click the button below to view or download your complete
											resume
										</p>
									</div>

									{/* Download Button */}
									<div className="flex flex-col sm:flex-row gap-4">
										{personalData.resume && (
											<>
												<a
													href={personalData.resume}
													target="_blank"
													rel="noopener noreferrer"
													className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-emerald-600 to-amber-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all transform hover:scale-105 text-center"
												>
													<svg
														className="w-5 h-5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
														/>
													</svg>
													Download Resume
												</a>
												<a
													href={
														"https://drive.google.com/file/d/17wwbxqNgiKG1LKvaJhBpUe8tMA4XvJP7/view?usp=drive_link"
													}
													target="_blank"
													rel="noopener noreferrer"
													className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 font-bold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all text-center"
												>
													<svg
														className="w-5 h-5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
														/>
													</svg>
													Open in New Tab
												</a>
											</>
										)}
									</div>
								</div>

								{/* Additional Info */}
								<div className="bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-200 dark:border-emerald-700 rounded-2xl p-6 sm:p-8">
									<h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-3">
										💡 Pro Tip
									</h3>
									<p className="text-emerald-800 dark:text-emerald-200">
										You can download this resume to save it locally, or open it
										in a new tab to view it in full screen. It&apos;s formatted
										to print beautifully and is ATS-friendly for job
										applications.
									</p>
								</div>
							</div>
						</div>

						{/* Call to Action */}
						<div className="text-center mt-16 animate-fade-in-up">
							<div className="bg-linear-to-r from-emerald-500/10 to-amber-500/10 dark:from-emerald-500/20 dark:to-amber-500/20 rounded-2xl p-8 sm:p-12 border border-emerald-200 dark:border-emerald-700">
								<h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
									Interested in working together?
								</h3>
								<p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
									Feel free to reach out! I&apos;m always open to discussing new
									projects, opportunities, or collaborations.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<a
										href="mailto:harshittibrewal11@gmail.com"
										className="inline-block px-8 py-3 bg-linear-to-r from-emerald-600 to-amber-600 text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
									>
										Send Me an Email
									</a>
									<Link
										href="/#contact"
										className="inline-block px-8 py-3 border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 dark:border-emerald-400 font-bold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all"
									>
										Get in Touch
									</Link>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className="text-center py-12">
						<p className="text-gray-600 dark:text-gray-400 text-lg">
							Error loading resume. Please try again later.
						</p>
					</div>
				)}
			</div>
		</main>
	);
}
