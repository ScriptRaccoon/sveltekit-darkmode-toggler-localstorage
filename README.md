# Dark Mode Toggle in SvelteKit (localStorage)

This repository demonstrates how to integrate a dark mode toggle into a SvelteKit application.

Demo: https://sveltekit-darkmodetoggle-localstorage.netlify.app/

## Idea

When a user visits the page, we retrieve the user preference (dark or light) using a media query. We change the `data-theme` attribute of the `html` tag accordingly. This changes the CSS variables which are responsible for the theming. We also save the preference to `localStorage`. If there is already a theme saved in `localStorage`, we take this theme.

Important: this is done in a script that is loaded _as is_ in `app.html`. This guarantees that the script runs directly before anything else, preventing the flashing.

```html
<body data-sveltekit-preload-data="hover">
	<script src="%sveltekit.assets%/darkmode.js"></script>
	<div style="display: contents">%sveltekit.body%</div>
</body>
```

The toggle button changes the `data-theme` attribute on the `html` and the `localStorage` value as well.

## Related

I made a similar repository using cookies:

https://github.com/ScriptRaccoon/sveltekit-darkmode-toggler

That only works with server-side rendered SvelteKit pages. The solution here works also for prerendered pages. This includes blogs and documentation pages, for example. The solution is also much more simple.
