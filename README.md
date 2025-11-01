# 🚀 Harshit Tibrewal - Full Stack Developer Portfolio

A modern, feature-rich portfolio website showcasing my professional experience, projects, skills, and achievements. Built with Next.js 16, React, TypeScript, and Tailwind CSS.

## ✨ Features

### 📱 Responsive Design

- **Mobile-First Approach**: Fully responsive layout that adapts beautifully to all screen sizes
- **Adaptive Navigation**: Smart header that adjusts based on viewport
- **Mobile-Optimized Components**: All sections scale perfectly from mobile (375px) to desktop (1920px+)

### 🎯 Interactive Experience Section

- **Company Website Links**: Direct links to company websites with hover effects
- **Skills Showcase**: Display of technologies and skills used at each company
- **Automatic Duration Calculation**: Smart date calculation showing years and months worked
  - Automatically calculates from `startDate` and `endDate`
  - Example: "June 2024 - November 2024" displays "(5 months)"
- **Timeline Design**: Beautiful visual timeline with animated dots and connecting line
- **Achievement Highlights**: Key accomplishments for each role

### 🎨 Interactive Project Cards

- **Expandable Cards**: Click on entire project card to expand and view full details
- **Scrollable Modal**: Modal window with smooth scrolling for detailed project information
- **Live Demo Links**: Direct access to live project demonstrations
- **GitHub Repositories**: Links to source code on GitHub
- **Technology Stack**: Visual display of technologies used in each project
- **Mobile-Friendly Modal**: Optimized modal experience for all screen sizes

### 🛠️ Skills Section

- **Categorized Skills**: Organized by Frontend, Backend, and Tools & Platforms
- **Technology Logos**: Visual icons for each technology from devicons
- **External API Integration**: Seamless integration with cdn.jsdelivr.net for logo CDN

### 📊 Additional Sections

- **About Me**: Professional summary with profile picture (high-quality image optimization)
- **Key Traits**: Problem Solving, Quick Learner, Team Player
- **Education**: Academic credentials with GPA information
- **Achievements**: Certifications and awards
- **Contact Section**: Easy ways to get in touch with social links
- **Dark Mode Support**: Full dark/light theme support

## 🏗️ Tech Stack

- **Framework**: [Next.js 16.0.1](https://nextjs.org) with Turbopack
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **State Management**: React Hooks (useState)
- **Animations**: Custom CSS animations
- **Data Format**: JSON (portfolio.json)
- **Image Optimization**: Next.js Image component

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout with dark mode support
│   └── page.tsx              # Main portfolio page
├── components/
│   ├── About.tsx             # About section with profile picture
│   ├── Achievements.tsx      # Achievements and awards section
│   ├── Contact.tsx           # Contact information and social links
│   ├── Education.tsx         # Education history section
│   ├── Experience.tsx        # Professional experience with timeline
│   ├── Footer.tsx            # Footer component
│   ├── Header.tsx            # Navigation header
│   ├── Hero.tsx              # Hero/landing section
│   ├── Projects.tsx          # Projects section with modal functionality
│   ├── Skills.tsx            # Skills showcase with logos
│   ├── ThemeProvider.tsx     # Dark/Light theme provider
├── lib/
│   └── utils.ts              # Utility functions
├── public/
│   ├── data/
│   │   └── portfolio.json    # Portfolio data configuration
│   ├── files/
│   │   └── Resume.pdf        # Resume/CV file
│   └── images/
│       └── Profile.jpg       # Profile picture
├── types/
│   └── portfolio.ts          # TypeScript type definitions
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🗂️ Data Structure

All portfolio content is managed through `public/data/portfolio.json` with the following structure:

```json
{
	"personal": {
		/* Personal information */
	},
	"socialLinks": [
		/* Social media links */
	],
	"skills": [
		/* Skills organized by category */
	],
	"experience": [
		{
			"role": "Job Title",
			"company": "Company Name",
			"companyWebsite": "https://company.com",
			"duration": "Month Year - Month Year",
			"startDate": "YYYY-MM-DD",
			"endDate": "YYYY-MM-DD",
			"description": "Job description",
			"skillsUsed": ["Tech1", "Tech2"],
			"achievements": ["Achievement 1", "Achievement 2"]
		}
	],
	"projects": [
		{
			"title": "Project Name",
			"description": "Project description",
			"technologies": ["Tech1", "Tech2"],
			"link": "https://github.com/...",
			"liveDemo": "https://demo.com"
		}
	],
	"education": [
		/* Education history */
	],
	"achievements": [
		/* Certifications and awards */
	]
}
```

## 🎨 Key Components

### Experience Component (`Experience.tsx`)

- **Duration Calculator**: Automatically calculates years and months from startDate and endDate
- **Company Links**: Clickable company names linking to company websites
- **Skills Display**: Shows all skills used in each role as styled tags
- **Timeline Layout**: Desktop alternating left-right layout, mobile single column
- **Achievements**: Bulleted list of key accomplishments

### Projects Component (`Projects.tsx`)

- **Expandable Cards**: Full-card click detection for expansion
- **Scrollable Modal**: Modal window with smooth scrolling
- **Responsive Modal**: Adapts to all screen sizes
- **Dynamic Content**: Pulls project data from portfolio.json
- **Links**: GitHub and live demo links for each project

### Skills Component (`Skills.tsx`)

- **Categorized Display**: Organized by Frontend, Backend, Tools
- **Logo Integration**: Technology logos from CDN
- **Responsive Grid**: Adapts from 2 columns (mobile) to multiple columns (desktop)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or newer
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HarshitTib/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Portfolio Data

Edit `public/data/portfolio.json` to update:

- Personal information (name, title, contact details)
- Professional experience (companies, roles, achievements)
- Projects and portfolio items
- Education and achievements
- Skills and technologies

### Add New Sections

1. Create component in `components/` directory
2. Import in `app/page.tsx`
3. Add to main page layout

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-level: Inline Tailwind classes with responsive prefixes

## 📱 Responsive Breakpoints

The portfolio is optimized for:

- **Mobile**: 375px - 640px (sm)
- **Tablet**: 641px - 1024px (md, lg)
- **Desktop**: 1025px+ (xl, 2xl)

## 🎯 Features Highlight

### ✅ What's Included

- ✅ Fully responsive design
- ✅ Interactive project modal with scrolling
- ✅ Expandable project cards
- ✅ Professional experience timeline
- ✅ Automatic duration calculation
- ✅ Company website links
- ✅ Skills per company display
- ✅ Dark/Light theme support
- ✅ Smooth animations and transitions
- ✅ Mobile-first approach
- ✅ TypeScript for type safety
- ✅ SEO-friendly structure

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project in Vercel Dashboard
3. Vercel automatically detects Next.js configuration
4. Click Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables

No environment variables required for basic deployment. For optional features:

- Add any API keys or custom configurations to `.env.local`

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and use it as a template for your own portfolio!

## 📧 Contact

- **Email**: harshittibrewal11@gmail.com
- **LinkedIn**: [linkedin.com/in/HarshitTib](https://linkedin.com/in/HarshitTib)
- **GitHub**: [github.com/HarshitTib](https://github.com/HarshitTib)

---

**Built with ❤️ by Harshit Tibrewal**
