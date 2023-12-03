<script lang="ts">
  import type { Sketch } from "p5-svelte";
  import SketchContainer from "../SketchContainer.svelte";
  import SketchColInfo from "../SketchColInfo.svelte";

  let elem: HTMLElement;

  let grid: string = `
      467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..
  `;

  const sketch: Sketch = (p5) => {
    p5.setup = () => {
      elem = document.getElementById("parent");
      p5.createCanvas(elem.clientWidth, elem.clientHeight);
    };

    p5.draw = () => {
      p5.background(55);
      p5.noFill();
    };

    p5.windowResized = () => {
      p5.resizeCanvas(elem.clientWidth, elem.clientHeight);
    };
  };
</script>

<div class="grid grid-cols-4 gap-4 p-4">
  <SketchContainer {sketch} />
  <SketchColInfo />
</div>
