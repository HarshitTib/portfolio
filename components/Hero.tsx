import React from "react";
import Link from "next/link";
import { Personal } from "@/types/portfolio";

interface HeroProps {
	personal: Personal;
}

export default function Hero({ personal }: HeroProps) {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pt-20"
		>
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse top-1/4 left-1/4"></div>
				<div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse top-1/3 right-1/4 animation-delay-2000"></div>
				<div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse bottom-1/4 left-1/3 animation-delay-4000"></div>
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="mb-6 sm:mb-8 animate-fade-in-down">
					<div className="inline-block px-3 sm:px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full mb-6">
						<span className="text-blue-300 text-xs sm:text-sm font-semibold">
							Welcome to my portfolio
						</span>
					</div>
				</div>

				<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 animate-fade-in-up tracking-tighter">
					Hi, I&apos;m{" "}
					<span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
						{personal.name}
					</span>
				</h1>

				<p className="text-lg sm:text-2xl md:text-3xl text-purple-200 mb-3 sm:mb-4 font-light animate-fade-in-up animation-delay-100">
					{personal.title}
				</p>

				<p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in-up animation-delay-200 leading-relaxed px-2">
					{personal.summary}
				</p>

				<p className="text-lg sm:text-xl italic text-gray-400 mb-8 sm:mb-12 animate-fade-in-up animation-delay-300 px-2">
					{personal.tagline}
				</p>

				<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-400 px-2">
					<Link
						href="#projects"
						className="px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 text-center"
					>
						View My Work
					</Link>
					<Link
						href="#contact"
						className="px-8 py-3 border-2 border-purple-400 text-purple-300 font-semibold rounded-lg hover:bg-purple-400/10 transition-all text-center"
					>
						Get in Touch
					</Link>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<svg
					className="w-6 h-6 text-purple-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 14l-7 7m0 0l-7-7m7 7V3"
					/>
				</svg>
			</div>
		</section>
	);
}
