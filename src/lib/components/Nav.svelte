<script lang="ts">
	import Sun from "./Sun.svelte";
	import { THEMES } from "$lib/config";

	function set_theme(theme: string) {
		if (!Object.values(THEMES).includes(theme)) return;
		localStorage.setItem("theme", theme);
		document.body.setAttribute("data-theme", theme);
	}

	function toggle_theme(): void {
		let current_theme = document.body.getAttribute("data-theme");
		const theme =
			current_theme === THEMES.LIGHT
				? THEMES.DARK
				: THEMES.LIGHT;
		set_theme(theme);
	}
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<button aria-label="toggle theme" on:click={toggle_theme}>
				<Sun />
			</button>
		</li>
	</ul>
</nav>

<style>
	nav {
		background-color: var(--nav-color);
		padding: 1rem;
	}

	ul {
		list-style-type: none;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.5rem;
	}

	button {
		width: 1.5rem;
		height: 1.5rem;
	}
</style>
