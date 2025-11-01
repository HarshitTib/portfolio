import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	/* Suppress hydration warnings during development for color-scheme changes */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.postman.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "www.getpostman.com",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
