<!-- MIT License

Copyright (c) 2020 Thibault "Othello" BENOIT

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.-->
<script lang="ts">
	interface Props {
		size?: string;
	}

	let { size = '100%' }: Props = $props();
</script>

<svg
	width={size}
	viewBox="0 0 64 64"
	version="1.1"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	xml:space="preserve"
	style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
	<g transform="matrix(1,0,0,1,-64,0)">
		<g transform="matrix(0.1875,0,0,0.0625,0,0)">
			<g id="crown_large" transform="matrix(5.33333,0,0,16,0,0)">
				<g transform="matrix(1,0,0,1,64,0)">
					<path
						d="M11,58C9,58 9,55 11,55L11,48C9,48 9,46 11,46L53,46C55,46 55,48 53,48L53,55C55,55 55,58 53,58L11,58ZM53,44L11,44L9,13L17.5,38.5L32,11L46.5,38.5L55,13L53,44Z"
						style="fill:rgb(183,185,187);"
					/>
				</g>
				<path
					d="M75,48L117,48L117,55L75,55L75,48ZM75,44L73.5,20.223L81.5,42L96,15L110.5,42L118.551,19.968L117,44L75,44Z"
					style="fill:rgb(116,125,150);"
				/>
				<path
					d="M77,55L80,48L83,55L77,55ZM85,55L88,48L91,55L85,55ZM115,55L112,48L109,55L115,55ZM107,55L104,48L101,55L107,55ZM99,55L96,48L93,55L99,55Z"
					style="fill:rgb(82,90,105);"
				/>
				<path
					d="M93.464,24.429L93.464,21L95.964,18.5L98.464,21L98.464,24.464L100.707,22.222L103.828,22.222L103.828,25.343L100.672,28.5L103.464,28.5L105.964,31L103.464,33.5L100.672,33.5L103.475,36.303L103.475,39.425L100.354,39.425L98.464,37.536L98.464,41L95.964,43.5L93.464,41L93.464,37.571L91.611,39.425L88.49,39.425L88.49,36.303L91.293,33.5L88.5,33.5L86,31L88.5,28.5L91.293,28.5L88.136,25.343L88.136,22.222L91.257,22.222L93.464,24.429Z"
					style="fill:rgb(99,108,130);"
				/>
				<path
					d="M94.464,26.429L94.464,21L95.964,19.5L97.464,21L97.464,26.464L100.707,23.222L102.828,23.222L102.828,25.343L98.672,29.5L103.464,29.5L104.964,31L103.464,32.5L98.672,32.5L102.475,36.303L102.475,38.425L100.354,38.425L97.464,35.536L97.464,41L95.964,42.5L94.464,41L94.464,35.571L91.611,38.425L89.49,38.425L89.49,36.303L93.293,32.5L88.5,32.5L87,31L88.5,29.5L93.293,29.5L89.136,25.343L89.136,23.222L91.257,23.222L94.464,26.429Z"
					style="fill:rgb(252,244,197);"
				/>
				<g transform="matrix(1,0,0,0.8,64,-5.8)">
					<path
						d="M32,51C33,51 35,49 35,46C35,43 33,41 32,41C31,41 29,43 29,46C29,49 31,51 32,51Z"
						style="fill:rgb(188,89,90);"
					/>
				</g>
				<g transform="matrix(1,0,0,1,22,-15)">
					<circle cx="53" cy="28" r="4" style="fill:rgb(183,185,187);" />
				</g>
				<g transform="matrix(1,0,0,1,64,-15)">
					<circle cx="53" cy="28" r="4" style="fill:rgb(183,185,187);" />
				</g>
				<g transform="matrix(1,0,0,1,43,-19)">
					<circle cx="53" cy="28" r="4" style="fill:rgb(183,185,187);" />
				</g>
			</g>
		</g>
	</g>
</svg>
