import React from "react";
import Link from "next/link";
import { Personal, SocialLink } from "@/types/portfolio";

interface ContactProps {
	personal: Personal;
	socialLinks: SocialLink[];
}

const socialIcons: { [key: string]: string } = {
	LinkedIn: "💼",
	GitHub: "🔗",
	Email: "📧",
	Facebook: "👤",
	Instagram: "📸",
};

export default function Contact({ personal, socialLinks }: ContactProps) {
	return (
		<section
			id="contact"
			className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative overflow-hidden"
		>
			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -top-40 -left-40"></div>
				<div className="absolute w-64 sm:w-96 h-64 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -bottom-40 -right-40"></div>
			</div>

			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
						Let&apos;s Connect
					</h2>
					<p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 px-2">
						I&apos;m always open to new opportunities and interesting projects
					</p>
					<div className="w-12 sm:w-16 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4 sm:mt-6"></div>
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
				<div className="bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 sm:p-12 border border-blue-200/50 dark:border-purple-400/50">
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
								<span className="text-xl sm:text-2xl">
									{socialIcons[social.platform] || "🔗"}
								</span>
								<span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors hidden sm:inline">
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
						className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
					>
						Send Me an Email
					</Link>
				</div>
			</div>
		</section>
	);
}
