<script lang="ts">
  import PageHeading from "$lib/components/PageHeading.svelte";
  import type { Idea } from "$lib/repos/ideas";

  export let ideas: Idea[];
</script>

<section class="w-full grow px-2 sm:px-0">
  <PageHeading>Latest ideas</PageHeading>
  <ul class="flex max-w-prose flex-col gap-4">
    {#if ideas}
      {#each ideas as { emoji, name, description }}
        <li
          class="container flex items-center gap-4 bg-surface-1 px-4 py-6 shadow"
        >
          <span class="text-6xl">{emoji}</span>
          <div>
            <h2 class="text-2xl">{name}</h2>
            <p>{description}</p>
          </div>
        </li>
      {/each}
    {/if}
  </ul>
</section>
