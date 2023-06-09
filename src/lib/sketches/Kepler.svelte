<script lang="ts">
  import type { Sketch } from "p5-svelte";
  import SketchContainer from "../SketchContainer.svelte";
  import SketchColInfo from "../SketchColInfo.svelte";

  let a = 400;
  let b = 200;
  let c = Math.sqrt(a ** 2 - b ** 2) * 0.5;
  let h: number;
  let k: number;
  let elem: HTMLElement;

  const sketch: Sketch = (p5) => {
    p5.setup = () => {
      elem = document.getElementById("parent");
      p5.createCanvas(elem.clientWidth, elem.clientHeight);
      h = p5.width / 2;
      k = p5.height / 2;
    };

    p5.draw = () => {
      p5.background(55);
      p5.noFill();
      p5.stroke("white");
      p5.circle(h, k + 10, 4);
      p5.circle(h + a / 2, k + 10, 4);
      p5.line(h, k + 10, h + a / 2, k + 10);
      p5.ellipse(h, k, a, b);
      p5.fill("white");
      p5.circle(h, k, 6); // (h,k) indicator
      p5.fill("red");
      p5.circle(h - c, k, 6);
      p5.line(h, k - 10, h + c, k - 10);
      p5.fill("white");
      p5.circle(h, k - 10, 4);
      p5.circle(h + c, k - 10, 4);
      p5.fill("blue");
      p5.circle(h + c, k, 6);
      p5.push();
      p5.fill("white");
      p5.text(
        `${Math.round(p5.mouseX)},${Math.round(p5.mouseY)}`,
        p5.mouseX,
        p5.mouseY
      );
      p5.pop();
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
