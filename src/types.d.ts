import type { Sketch } from "p5-svelte";
import type { ComponentType } from "svelte";

export interface Project {
  name: string,
  desc: string,
  image: string,
  component: ComponentType
}