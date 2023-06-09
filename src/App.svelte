<script lang="ts">
  import "./app.css";
  import VizuCard from "./lib/VizuCard.svelte";
  import { prjOpen, currPrjInfo } from "./store";
  import { prjs } from "./data";

  $: document.title = $currPrjInfo.name ?? "Leinad Vizu";

  currPrjInfo.set(prjs[3]);
</script>

<main
  class="bg-stone-900 h-screen text-neutral-100 overflow-auto flex justify-center"
>
  {#if $prjOpen}
    <svelte:component this={$currPrjInfo.component} />
  {/if}

  {#if !$prjOpen}
    <div class="grid grid-cols-3 gap-6 p-16">
      {#each prjs as vizu}
        <VizuCard {vizu} />
      {/each}
    </div>
  {/if}
</main>

<style>
</style>
