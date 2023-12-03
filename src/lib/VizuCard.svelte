<script lang="ts">
  import { prjOpen, currPrjInfo } from "../store";
  import type { Project } from "../types";
  import Button from "./Button.svelte";

  export let vizu: Project = {} as Project;

  const handleClick = () => {
    $prjOpen = true;
    $currPrjInfo = vizu;
  };
</script>

<div class="flex flex-col rounded-md border-ebonyGreen border-2 bg-neutral-700">
  <img class="w-full" src={vizu.image} alt="hello" />
  <div class="p-4 flex-1">
    <div class="font-bold text-xl">{vizu.name}</div>
    <div class="font-light text-sm">{vizu.desc}</div>
  </div>
  <div class="p-4">
    <Button on:click={handleClick}>Clicky</Button>
  </div>
</div>
