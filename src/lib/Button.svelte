<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
  class="
    bg-secondary
    text-sm
    hover:bg-primary
    hover:text-black
    rounded-full
    px-4
    py-2
    text-white"
  on:click
  on:mouseover
  on:mouseleave
>
  <slot />
</button>
