<script context="module" lang="ts">
  export const load: Load = async ({ fetch }) => {
    const url: URL = new URL("ideas", "http://localhost:3000");
    url.searchParams.append("limit", "3");
    const resourceUrl = url.toString();
    const headers = new Headers({
      Accept: "application/json",
    });

    const response = await fetch(resourceUrl, { headers });

    if (response.ok) {
      const { ideas } = await response.json();
      return {
        status: response.status,
        props: { ideas },
      };
    }

    return {
      status: response.status,
      error: new Error(`Could not load url`),
    };
  };
</script>

<script lang="ts">
  import BigLink from "$lib/components/buttons/BigLink.svelte";

  import Hero from "$lib/components/Hero/Hero.svelte";
  import IdeaCard from "$lib/components/IdeaCard.svelte";
  import type { Idea } from "$lib/repos/ideas";
  import type { Load } from "@sveltejs/kit";

  export let ideas: Idea[] = [];
</script>

<svelte:head>
  <title>Brainstorm Hideout: Inspiration promotes creation</title>
</svelte:head>

<main>
  <Hero />
  <section>
    <h2 class="text-2xl">Latest Ideas</h2>
    {#if ideas}
      <ul
        class="flex max-w-prose flex-col gap-4 sm:grid sm:w-full sm:max-w-full sm:grid-cols-12"
      >
        {#each ideas as idea}
          <div class="sm:col-span-6 xl:col-span-4"><IdeaCard {idea} /></div>
        {/each}
      </ul>
    {/if}
    <p class="text-center">
      <BigLink href="/ideas" prefetch={true}>View all latest ideas!</BigLink>
    </p>
  </section>
</main>
