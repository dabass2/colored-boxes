<template>
  <v-container id="canvasContainer" class="fill-height">
    <div id="canvas" />
  </v-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import * as P5 from 'p5';

onMounted(() => new P5(p5Canvas, document.getElementById('canvas') as HTMLElement))

function p5Canvas(p5: P5) {
  let angle: number = 0
  let speed: number = 0.01
  let centerX: number
  let centerY: number
  let radius: number = 150

  let slider: P5.Element;
  let slider2: P5.Element;
  p5.setup = () => {
    let a: HTMLElement = document.getElementById('canvasContainer') as HTMLElement
    centerX = a.clientWidth * 0.5
    centerY = a.clientHeight * 0.5
    console.log(a)
    p5.createCanvas(a.clientWidth, a.clientHeight);
    console.log(p5.width, p5.height)
    console.log(centerX, centerY)

    slider = p5.createSlider(0, 1, 0.5, 0.1)
    slider.position(50, 50)
    slider.style('width', '80px')

    slider2 = p5.createSlider(0, 1, 0.5, 0.1)
    slider2.position(50, 80)
    slider2.style('width', '80px')
  }

  p5.draw = () => {
    p5.background(55)
    // p5.ellipse(centerX, centerY, 100, 100)
    p5.ellipse(centerX + radius * p5.cos(angle), centerY + radius * p5.sin(angle), 20, 20)
    p5.push()
    p5.noFill()
    p5.stroke(255)
    let val = slider.value() as number
    let val2 = slider2.value() as number
    p5.ellipse(centerX, centerY, 300 * val, 300 * val2)
    p5.pop()
    angle = angle + speed
  }
}
</script>