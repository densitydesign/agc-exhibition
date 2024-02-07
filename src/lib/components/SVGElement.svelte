<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  export let Content: typeof SvelteComponent;
  export let className: string = '';
  export let start: number | undefined;
  export let span: number | undefined;
</script>

<figure
  class={className ? className : ""}
  style="
    grid-column-start: {start};
    grid-column-end: {start && span ? `span ${span}` : 'auto'};
  ">
  <svelte:component this={Content} aria-hidden="true" />
  <figcaption class="visually-hidden">
    <slot></slot>
  </figcaption>
</figure>
  
  <style>
    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      border: 0;
    }
  </style>
  