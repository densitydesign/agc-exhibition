<script lang="ts">
  export let start: number;
  export let span: number;
  export let pos: number; // This prop will receive the scroll position * ratio from the parent
  export let mobile: boolean; //oolean;
  // Reactive statement to calculate width and left position for mobile view
  $: mobileWidth = (span / 12) * 100 + '%';
  $: leftPosition = (start / 12) * 100/2 + '%';

</script>

<div
  style={`grid-column-start: ${start}; grid-column-end: span ${span}; transform: translate3d(0, ${pos}px, 0); 
         ${mobile ? `width: ${mobileWidth}; min-height: ${mobileWidth}; left: ${leftPosition};` : ''}`}
>
  <slot />
</div>

<style>
  div {
      display: inline-block;
      position: relative;
      width: 100%;
      height: 100%;
  }

  @media (max-width: 768px) {
      div {
          width: auto;
          left: 0;
      }
  }
</style>
