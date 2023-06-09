<script lang="ts">
  import type { Sketch } from "p5-svelte";
  import SketchContainer from "../SketchContainer.svelte";
  import SketchColInfo from "../SketchColInfo.svelte";

  let t = 0;
  let x = 0;
  let y = 0;
  let redNum = 0;
  let blueNum = 0;
  let redRatio = 0;
  let blueRatio = 0;
  let total = 0;
  let elem: HTMLElement;

  const sketch: Sketch = (p5) => {
    const drawBlue = () => {
      blueRatio = blueNum / total;
      p5.fill(51);
      p5.rect(p5.width, 0, -blueRatio * p5.width, p5.height);
    };

    const drawRed = () => {
      redRatio = redNum / total;
      p5.fill(255);
      p5.rect(0, 0, p5.width * redRatio, p5.height);
    };

    p5.setup = () => {
      elem = document.getElementById("parent");
      p5.createCanvas(elem.clientWidth, elem.clientHeight);
      p5.background(51);
      p5.frameRate(60);
    };

    p5.draw = () => {
      x = p5.int(p5.random(p5.width));
      y = p5.int(p5.random(p5.height));
      t = p5.int(p5.random(2));
      if (t == 1) {
        redNum = redNum + 1;
      } else {
        blueNum = blueNum + 1;
      }
      total = blueNum + redNum;

      p5.noStroke();
      drawBlue();
      drawRed();
      p5.stroke(0, 255, 0);
      p5.line(p5.width / 2, p5.height, p5.width / 2, 0);
      p5.noStroke();
      p5.fill("black");
      p5.text(redNum, p5.width / 4, p5.height / 2);
      p5.fill(255);
      p5.text(blueNum, p5.width - p5.width / 4, p5.height / 2);
      if (total > 5000) {
        p5.noLoop();
      }
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
