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
	xmlns:serif="http://www.serif.com/"
	style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
>
	<g transform="matrix(0.1875,0,0,0.0625,0,0)">
		<g id="crown_mini" transform="matrix(5.33333,0,0,16,0,0)">
			<path
				d="M11,58C9,58 9,55 11,55L11,48C9,48 9,46 11,46L26.037,46L32,55C32,55 37.988,46.329 37.963,46L53,46C55,46 55,48 53,48L53,55C55,55 55,58 53,58L11,58ZM31.933,37L27,44L11,44L9,29L20.5,41L32,29L43.5,41L55,29L53,44L37,44L31.933,37Z"
				style="fill:rgb(239,207,1);"
			/>
			<path
				d="M27,48L11,48L11,55L32,55L27,48ZM37,48L53,48L53,55L32,55L37,48ZM43.5,44L37,44L32,37L27,44L20.5,44L32,32L43.5,44ZM20.5,44L11,44L9.43,32.223L20.5,44ZM43.5,44L54.57,32.223L53,44L43.5,44Z"
				style="fill:rgb(187,166,82);"
			/>
			<path
				d="M12.5,55L15.5,48L18.5,55L12.5,55ZM20.5,55L23.5,48L26.5,55L20.5,55ZM51.5,55L48.5,48L45.5,55L51.5,55ZM43.5,55L40.5,48L37.5,55L43.5,55ZM25,44L27,44L32,38L37,44L39,44C39,44 39,36 32,36C25,36 25,44 25,44Z"
				style="fill:rgb(116,96,32);"
			/>
			<path
				d="M32,37C38,37 38,46 38,46C38,46 38,55 32,55C26,55 26,46 26,46C26,46 26,37 32,37ZM32,40C36,40 36,46 36,46C36,46 36,52 32,52C28,52 28,46 28,46C28,46 28,40 32,40Z"
				style="fill:rgb(239,207,1);"
			/>
			<path
				d="M32,51C33,51 35,49 35,46C35,43 33,41 32,41C31,41 29,43 29,46C29,49 31,51 32,51Z"
				style="fill:rgb(125,199,134);"
			/>
			<g transform="matrix(1,0,0,1,-42,0)">
				<circle cx="53" cy="28" r="4" style="fill:rgb(239,207,1);" />
			</g>
			<circle cx="53" cy="28" r="4" style="fill:rgb(239,207,1);" />
			<g transform="matrix(1,0,0,1,-21,-2)">
				<circle cx="53" cy="28" r="4" style="fill:rgb(239,207,1);" />
			</g>
		</g>
	</g>
</svg>
