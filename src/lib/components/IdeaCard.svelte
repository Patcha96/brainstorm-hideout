<script lang="ts">
  import type { Idea } from "$lib/repos/ideas";

  export let idea: Idea;
</script>

<div class="container flex items-center gap-4 bg-surface-1 px-4 py-6 shadow">
  <span class="text-6xl">{idea.emoji}</span>
  <div>
    <h2 class="text-2xl">{idea.name}</h2>
    <p>{idea.description}</p>
  </div>
</div>
