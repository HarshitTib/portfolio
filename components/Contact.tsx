import React from "react";
import Link from "next/link";
import { Personal, SocialLink } from "@/types/portfolio";

interface ContactProps {
	personal: Personal;
	socialLinks: SocialLink[];
}

const getSocialIcon = (platform: string) => {
	const iconProps = "w-5 h-5";

	switch (platform) {
		case "LinkedIn":
			return (
				<svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
				</svg>
			);
		case "GitHub":
			return (
				<svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
				</svg>
			);
		case "Leetcode":
			return (
				<svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
					<path d="M16.102 17.93h.139a.749.749 0 00.531-.219l7.637-7.635a.75.75 0 10-1.061-1.061L17.862 16.561v-4.379a.75.75 0 10-1.5 0v5.75z" />
					<path d="M20.75 11c0-5.385-4.365-9.75-9.75-9.75S1.25 5.615 1.25 11c0 5.368 4.365 9.75 9.75 9.75s9.75-4.382 9.75-9.75zm-1.5 0c0 4.56-3.69 8.25-8.25 8.25s-8.25-3.69-8.25-8.25 3.69-8.25 8.25-8.25 8.25 3.69 8.25 8.25z" />
				</svg>
			);
		case "Email":
			return (
				<svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
					<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
				</svg>
			);
		default:
			return (
				<svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
					<circle cx="12" cy="12" r="10" />
				</svg>
			);
	}
};

export default function Contact({ personal, socialLinks }: ContactProps) {
	return (
		<section
			id="contact"
			className="py-16 sm:py-24 bg-contact relative overflow-hidden"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -top-40 -left-40"></div>
				<div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -bottom-40 -right-40"></div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Let&apos;s Connect
					</h2>
					<p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-2">
						I&apos;m always open to new opportunities and interesting projects
					</p>
					<div className="w-12 sm:w-16 h-1 bg-linear-to-r from-emerald-500 to-amber-600 mx-auto rounded-full mt-4 sm:mt-6"></div>
				</div>

				{/* Contact Info Cards */}
				<div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
					{[
						{
							icon: "📧",
							label: "Email",
							value: personal.email,
							href: `mailto:${personal.email}`,
						},
						{
							icon: "📱",
							label: "Phone",
							value: personal.phone,
							href: `tel:${personal.phone}`,
						},
						{
							icon: "📍",
							label: "Location",
							value: personal.location,
							href: "#",
							noHref: true,
						},
					].map((contact, index) => (
						<a
							key={index}
							href={contact.noHref ? "#" : contact.href}
							target={contact.noHref ? undefined : "_blank"}
							rel={contact.noHref ? undefined : "noopener noreferrer"}
							className={`p-6 sm:p-8 bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg hover:shadow-xl transition-all ${
								!contact.noHref
									? "hover:-translate-y-2 cursor-pointer"
									: "cursor-default pointer-events-none"
							} block`}
						>
							<div className="text-3xl sm:text-4xl mb-4">{contact.icon}</div>
							<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-2">
								{contact.label}
							</p>
							<p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white break-all">
								{contact.value}
							</p>
						</a>
					))}
				</div>

				{/* Social Links */}
				<div className="bg-linear-to-r from-emerald-500/10 to-amber-500/10 rounded-2xl p-6 sm:p-12 border border-emerald-200/50 dark:border-amber-400/50">
					<h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 text-center">
						Follow Me On Social Media
					</h3>

					<div className="flex flex-wrap justify-center gap-3 sm:gap-4">
						{socialLinks.map((social, index) => (
							<Link
								key={index}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-110 duration-300 text-sm sm:text-base"
							>
								<span className="text-emerald-600 dark:text-emerald-400 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
									{getSocialIcon(social.platform)}
								</span>
								<span className="font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors hidden sm:inline">
									{social.platform}
								</span>
							</Link>
						))}
					</div>
				</div>

				{/* CTA Button */}
				<div className="text-center mt-8 sm:mt-12">
					<Link
						href={`mailto:${personal.email}?subject=Let's%20talk!`}
						className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-emerald-600 to-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
					>
						Send Me an Email
					</Link>
				</div>
			</div>
		</section>
	);
}
