<script lang="ts">
	import GitHubIcon from '$lib/icons/github.svg'
	import PulsingHeart from './PulsingHeart.svelte'
</script>

<footer class="flex items-center justify-center gap-2 py-2">
	Made with <PulsingHeart /> by
	<a href="https://eg-planet.com">eg-planet</a>
	<a
		href="https://github.com/Patcha96/brainstorm-hideout"
		target="_blank"
		rel="noopener noreferrer"
		aria-label="checkout the source code at the github repo"
		class="transition-colors hover:text-primary-400"
	>
		<GitHubIcon class="w-5" />
	</a>
</footer>
