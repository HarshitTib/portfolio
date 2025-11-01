export interface Personal {
	name: string;
	title: string;
	email: string;
	phone: string;
	location: string;
	summary: string;
	tagline: string;
	profileImage?: string;
	resume?: string;
}

export interface SocialLink {
	platform: string;
	url: string;
	icon: string;
}

export interface Technology {
	name: string;
	logo?: string;
}

export interface Skill {
	category: string;
	technologies: Technology[];
}

export interface Experience {
	role: string;
	company: string;
	companyWebsite?: string;
	duration: string;
	startDate: string;
	endDate: string;
	description: string;
	achievements?: string[];
	skillsUsed?: string[];
}

export interface Project {
	title: string;
	description: string;
	technologies: string[];
	link: string;
	liveDemo: string;
	image?: string;
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
	year: string;
	gpa?: string;
	highlights?: string[];
}

export interface Achievement {
	title: string;
	issuer: string;
	date: string;
	description: string;
}

export interface PortfolioData {
	personal: Personal;
	socialLinks: SocialLink[];
	skills: Skill[];
	experience: Experience[];
	projects: Project[];
	education: Education[];
	achievements: Achievement[];
}
