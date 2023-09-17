<script lang="ts">
  import type { UICornerStyle } from '$lib/client/modules/frontier/types';
  // TODO
  let cornerStyle: UICornerStyle = 0;
</script>

<div class="corner-decorated-div border">
  <div class="corner top-left" />
  <div class="corner top-right" />
  <div class="corner bottom-left" />
  <div class="corner bottom-right" />
  <slot />
</div>

<style>
  .border {
    outline: 2px solid #7d7b7b7f; /* TODO adjust for latte flavor */
    outline-offset: -4px;
  }

  /* Define the size of the corner images */
  .corner-decorated-div {
    position: relative;
    padding: 0px; /* Adjust padding as needed */
  }

  .corner {
    position: absolute;
    width: 0.6rem; /* Adjust the width and height of your corner images */
    height: 0.6rem;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .corner.top-left {
    top: 0;
    left: 0;
    background-image: url('../../images/ui/svg/corner1.svg');
  }

  .corner.top-right {
    top: 0;
    right: 0;
    background-image: url('../../images/ui/svg/corner1.svg');
    transform: scaleX(-1); /* Flip horizontally for top right corner */
  }

  .corner.bottom-left {
    bottom: 0;
    left: 0;
    background-image: url('../../images/ui/svg/corner1.svg');
    transform: scaleY(-1); /* Flip vertically for bottom left corner */
  }

  .corner.bottom-right {
    bottom: 0;
    right: 0;
    background-image: url('../../images/ui/svg/corner1.svg');
    transform: rotate(180deg); /* Rotate 180 degrees for bottom right corner */
  }
</style>
