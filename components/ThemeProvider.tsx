"use client";

import React, { useEffect, useState } from "react";

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		// Set the theme on client-side only
		const isDarkMode = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const htmlElement = document.documentElement;

		if (isDarkMode) {
			htmlElement.classList.add("dark");
		} else {
			htmlElement.classList.remove("dark");
		}
	}, []);

	// Return children without the theme applied until mounted
	return <>{children}</>;
}
