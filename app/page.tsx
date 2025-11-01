"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { PortfolioData } from "@/types/portfolio";

export default function Home() {
	const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(
		null
	);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPortfolioData = async () => {
			try {
				const response = await fetch("/data/portfolio.json");
				const data = await response.json();
				console.log("Fetched portfolio data:", data);
				setPortfolioData(data);
			} catch (error) {
				console.error("Error loading portfolio data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPortfolioData();
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	// Show loading only while fetching data
	if (isLoading || !portfolioData) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-slate-900">
				<div className="text-center">
					<div className="inline-block">
						<div className="w-16 h-16 border-4 border-blue-400 border-t-purple-600 rounded-full animate-spin"></div>
					</div>
					<p className="text-white mt-4 text-lg">Loading portfolio...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white dark:bg-black">
			<Header
				scrollToSection={scrollToSection}
				personal={portfolioData.personal}
			/>
			<Hero personal={portfolioData.personal} />
			<About personal={portfolioData.personal} />
			<Skills skills={portfolioData.skills} />
			<Experience experience={portfolioData.experience} />
			<Projects projects={portfolioData.projects} />
			<Education education={portfolioData.education} />
			<Achievements achievements={portfolioData.achievements} />
			<Contact
				personal={portfolioData.personal}
				socialLinks={portfolioData.socialLinks}
			/>
			<Footer personal={portfolioData.personal} />
		</div>
	);
}
