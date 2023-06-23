const saved_theme = localStorage.getItem("theme");
if (saved_theme) {
	document.body.setAttribute("data-theme", saved_theme);
} else {
	const prefers_dark = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;
	const theme = prefers_dark ? "dark" : "light";
	document.body.setAttribute("data-theme", theme);
	localStorage.setItem("theme", theme);
}
