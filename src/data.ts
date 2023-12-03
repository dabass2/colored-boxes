import type { Project } from "./types";
import testImg from "./assets/romantic.png";
import Kepler from "./lib/sketches/Kepler.svelte";
import Lobn from "./lib/sketches/Lobn.svelte";
import Bubble from "./lib/sketches/Bubble.svelte";
import Habitable from "./lib/sketches/Habitable.svelte";
import Cta from "./lib/sketches/CTA.svelte";

export const prjs: Project[] = [
  {
    name: "Kepler's Laws",
    desc: "Kepler's Laws of planetary motion. Cool stuff, three laws. Basic. But not all encompassing. Is expanded upon further with Newton's Laws which use fancier math.",
    image: testImg,
    component: Kepler,
  },
  {
    name: "The Law of Big Numbers",
    desc: "You know the law of big numbers? When big numbers go up, a specific value always seems to come out on top.",
    image: testImg,
    component: Lobn,
  },
  {
    name: "Bubble Sort",
    desc: "Love me a good sorting alogrithm. Sadly, bubble sort is not a good sorting algorithm. But it is cool to watch it go.",
    image: testImg,
    component: Bubble,
  },
  {
    name: "Habitable Zone",
    desc: "You know the law of big numbers? When big numbers go up, a specific value always seems to come out on top.",
    image: testImg,
    component: Habitable,
  },
  {
    name: "CTA",
    desc: "CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA CTA ",
    image: testImg,
    component: Cta,
  },
];
