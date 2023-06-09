<script lang="ts">
  import type { Sketch } from "p5-svelte";

  import SketchContainer from "../SketchContainer.svelte";
  import SketchColInfo from "../SketchColInfo.svelte";

  let i = 0;
  let r = 0;
  let arr: number[] = [];
  let elem: HTMLElement;

  const sketch: Sketch = (p5) => {
    p5.setup = () => {
      elem = document.getElementById("parent");
      p5.createCanvas(elem.clientWidth, elem.clientHeight);

      for (let i = 0; i < p5.width; i++) {
        r = p5.int(p5.random(p5.height));
        arr.push(r);
      }
    };

    p5.draw = () => {
      if (arr.length === 0) {
        for (let i = 0; i < p5.width; i++) {
          r = p5.int(p5.random(p5.height));
          arr.push(r);
        }
      }
      p5.background(51);

      if (i < arr.length) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          let a = arr[j];
          let b = arr[j + 1];
          if (a > b) {
            swap(arr, j, j + 1);
          }
        }
      } else {
        console.log("finished");
        p5.noLoop();
      }
      i++;

      for (let j = 0; j < arr.length; j++) {
        p5.stroke(255);
        p5.line(j, p5.height, j, p5.height - arr[j]);
      }
    };

    const swap = (arr: number[], a: number, b: number) => {
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    };

    p5.windowResized = () => {
      p5.resizeCanvas(elem.clientWidth, elem.clientHeight);
      handleReset();
    };
  };

  const handleReset = () => {
    arr = [];
    i = 0;
    r = 0;
  };
</script>

<div class="grid grid-cols-4 gap-4 p-4">
  <SketchContainer {sketch} />
  <div class="grid grid-rows-1 gap-4">
    <div class="border-red-800 border-2">
      <h1>controls</h1>
      <button on:click={handleReset}>Reset</button>
    </div>
    <SketchColInfo />
  </div>
</div>
