<script lang="ts">
  import P5 from "p5-svelte";
  import type { Sketch } from "p5-svelte";

  export let sketch: Sketch;
</script>

<div id="parent" class="border-slate-500 round-md border-2 col-span-3">
  <P5 {sketch} />
</div>
