<script lang="ts">
  import { prjOpen, currPrjInfo } from "../store";
  import type { Project } from "../types";

  export let vizu: Project = {} as Project;

  const handleClick = () => {
    $prjOpen = true;
    $currPrjInfo = vizu;
  };
</script>

<div class=" max-w-sm rounded-md border-slate-600 border-2 overflow-hidden">
  <img class="w-full" src={vizu.image} alt="hello" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl">{vizu.name}</div>
    <div class="font-light text-sm">{vizu.desc}</div>
  </div>
  <div class="px-6 py-4">
    <button
      class="bg-slate-300 text-sm hover:bg-slate-600 hover:text-white rounded-full px-4 py-2 text-black"
      on:click={handleClick}>Clicky</button
    >
  </div>
</div>
