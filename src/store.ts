import { writable } from "svelte/store";
import type { Project } from "./types";

export const prjOpen = writable(true);

export const currPrjInfo = writable<Project>();
