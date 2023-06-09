<script lang="ts">
  import type { Sketch } from "p5-svelte";
  import SketchContainer from "../SketchContainer.svelte";
  import SketchColInfo from "../SketchColInfo.svelte";

  let ri: number;
  let ro: number;
  let L_star: number;
  let elem: HTMLElement;
  const AU = 500;

  const sketch: Sketch = (p5) => {
    p5.setup = () => {
      elem = document.getElementById("parent");
      p5.createCanvas(elem.clientWidth, elem.clientHeight);

      L_star = 3;
      ri = Math.sqrt(L_star / 1.1);
      ro = Math.sqrt(L_star / 0.53);
      console.log(ri, ro);
    };

    p5.draw = () => {
      p5.background(55);
      p5.noFill();
      p5.fill(0, 255, 0, 40);
      p5.stroke("green");
      p5.ellipse(p5.width / 2, p5.height / 2, AU * ro, AU * ro);
      p5.fill(55);
      p5.ellipse(p5.width / 2, p5.height / 2, AU * ri, AU * ri);
      p5.fill("red");
      p5.noStroke();
      p5.circle(p5.width / 2, p5.height / 2, 25);
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
