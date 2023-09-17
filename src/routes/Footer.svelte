<!--
  ~ © 2023 Doriel Rivalet
  ~ Use of this source code is governed by a MIT license that can be
  ~ found in the LICENSE file.
-->

<script lang="ts">
  import * as constant from '$lib/constants';
  import './styles.css';
  import Link from 'carbon-components-svelte/src/Link/Link.svelte';
</script>

<footer>
  <div class="copyright">
    <Link href={constant.authorGitHub}
      >{constant.author} &copy {new Date().getUTCFullYear()}</Link
    >
  </div>
</footer>

<style>
  footer {
    margin: 10px;
    display: flex;
    justify-content: center;
  }

  .copyright {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
</style>
