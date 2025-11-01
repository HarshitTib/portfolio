// This file contains TypeScript utilities and constants for the portfolio

export const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
};

export const sections = [
	{ label: "Home", id: "home" },
	{ label: "About", id: "about" },
	{ label: "Skills", id: "skills" },
	{ label: "Experience", id: "experience" },
	{ label: "Projects", id: "projects" },
	{ label: "Education", id: "education" },
	{ label: "Achievements", id: "achievements" },
	{ label: "Contact", id: "contact" },
];

export const socialIconMap: { [key: string]: string } = {
	LinkedIn: "💼",
	GitHub: "🔗",
	Twitter: "𝕏",
	Email: "📧",
	Facebook: "👤",
	Instagram: "📸",
	YouTube: "🎬",
	Portfolio: "🌐",
};

export const skillCategoryIcons: { [key: string]: string } = {
	Frontend: "🎨",
	Backend: "⚙️",
	"Tools & Platforms": "🛠️",
	Database: "🗄️",
	Mobile: "📱",
	DevOps: "🚀",
};

export const achievementIcons: { [key: string]: string } = {
	Award: "🏆",
	Hackathon: "🎯",
	Certification: "📜",
	Recognition: "⭐",
	Publication: "📚",
};

// Color gradients for cards
export const gradients = {
	primary: "from-blue-500 to-purple-600",
	secondary: "from-purple-500 to-pink-500",
	tertiary: "from-green-500 to-teal-500",
	quaternary: "from-orange-500 to-red-500",
};

// Animation variants
export const animationVariants = {
	fadeInUp: "animate-fade-in-up",
	fadeInDown: "animate-fade-in-down",
	slideInLeft: "slide-in-from-left",
	slideInRight: "slide-in-from-right",
};

// Export utility for formatting dates
export const formatDate = (dateString: string): string => {
	try {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	} catch {
		return dateString;
	}
};

// Export utility for truncating text
export const truncateText = (text: string, maxLength: number): string => {
	return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};
