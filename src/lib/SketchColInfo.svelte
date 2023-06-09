<script lang="ts">
  import { currPrjInfo, prjOpen } from "../store";
  import type { Project } from "../types";

  const handleClose = () => {
    $prjOpen = false;
    $currPrjInfo = {} as Project;
  };
</script>

<div class="border-slate-500 border-2">
  <div id="infoHeader" class="flex items-baseline justify-between m-4">
    <span class="font-bold text-lg">Sketch Name</span>
    <button
      class="py-1 px-2 bg-slate-300 hover:bg-slate-600 text-black hover:border-slate-300 hover:text-white rounded-full border-slate-600 border-2"
      on:click={handleClose}>Close</button
    >
  </div>
  <hr />
  <div class="px-4 py-4 break-normal">
    <p>
      Sketch description aaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa aaa
      aaa aaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa aaa aaa aaaaaaa
      aaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa aaa aaa aaaaaaa aaaaaaa
      aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa aaa aaa aaaaaaa aaaaaaa aaaaaaaaaa
      aaaaaaaa aaaaaaaaa aaa aaa aaa aaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaa
      aaaaaaaaa aaa aaa aaa aaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa
      aaa aaa aaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa aaa aaa
    </p>
    <hr />
    <ul class="list-disc px-8 py-4">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <hr />
    <p>
      aaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa aaa aaa aaaaaaa aaaaaaa
      aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa aaa aaa aaaaaaa aaaaaaa aaaaaaaaaa
      aaaaaaaa aaaaaaaaa aaa aaa aaa aaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaa
      aaaaaaaaa aaa aaa aaa aaaaaaa aaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa aaa
      aaa aaa
    </p>
  </div>
</div>
