<!-- Created with Inkscape (http://www.inkscape.org/) -->
<script lang="ts">
	import bg from '$lib/client/images/monster/bg-512.webp';
	export let size = '128px';
	export let background = false;

	$: backgroundStyle = background
		? `width: ${size}; height: ${size}; background-image: url('${bg}'); background-size: ${size}`
		: `width: ${size}; height: ${size};`;
</script>

<div class="container" style={backgroundStyle}>
	<svg
		width="100%"
		viewBox="0 0 128 128"
		version="1.1"
		id="svg5"
		xml:space="preserve"
		xmlns="http://www.w3.org/2000/svg"
		data-license="https://creativecommons.org/licenses/by-nc-sa/4.0/"
		data-author="Doriel Rivalet"
		><defs id="defs2"
			><filter
				style="color-interpolation-filters:sRGB;"
				id="filter1925"
				x="0"
				y="0"
				width="1"
				height="1"
				><feComposite
					in2="SourceGraphic"
					operator="arithmetic"
					k1="0"
					k2="1"
					result="composite1"
					id="feComposite1911"
				/><feColorMatrix
					in="composite1"
					values="1"
					type="saturate"
					result="colormatrix1"
					id="feColorMatrix1913"
				/><feFlood
					flood-opacity="1"
					flood-color="rgb(0,0,0)"
					result="flood1"
					id="feFlood1915"
				/><feBlend
					in="flood1"
					in2="colormatrix1"
					mode="multiply"
					result="blend1"
					id="feBlend1917"
				/><feBlend
					in2="blend1"
					mode="screen"
					result="blend2"
					id="feBlend1919"
				/><feColorMatrix
					in="blend2"
					values="1"
					type="saturate"
					result="colormatrix2"
					id="feColorMatrix1921"
				/><feComposite
					in="colormatrix2"
					in2="SourceGraphic"
					operator="in"
					k2="1"
					result="composite2"
					id="feComposite1923"
				/></filter
			></defs
		><g
			id="g1909"
			style="filter:url(#filter1925)"
			transform="translate(1.0583333,1.5875)"
			><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 59.890641,29.856741 c -0.151919,0 -0.366757,-0.33176 -0.546904,-0.303831 -1.39498,0.216265 1.261826,-11.923611 3.767552,-12.639533 1.76858,2.585688 2.445704,4.886579 6.319769,6.380535 l 1.561247,1.458911 -4.933817,-0.182806 z"
				id="path1741"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 59.61468,31.301448 7.089844,3.523433 c 4.861793,-3.329834 7.474931,-6.746155 3.953124,-10.398435 -2.034842,-0.07487 -4.417025,-0.288684 -7.261717,-0.687498 -1.845416,2.359454 -4.172719,4.585974 -3.781251,7.5625 z"
				id="path1743"
			/><path
				style="fill:#87816b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 10.5014,100.1159 c -0.95965,0.0331 -1.769746,-4.403099 -1.052735,-4.576169 4.54774,-1.1876 7.089021,-3.08801 7.283204,-5.82227 l 3.58789,-0.38672 1.224608,8.46485 -8.121092,4.167969 z"
				id="path1745"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 82.968201,121.44988 c -0.0375,-0.91657 0.10593,-1.68842 0.77343,-2.04101 1.31427,-0.54765 3.5465,-0.11822 5.04366,-0.0478 1.41413,0.0665 2.08714,-0.27967 2.06767,-0.59671 v -6.78907 c -0.95299,-0.39898 -2.03048,-0.29994 -3.09375,-0.25781 -3.04112,0.47954 -8.51904,2.43805 -4.79101,9.73242 z"
				id="path1747"
			/><path
				style="fill:#a43a31;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 81.721181,117.31563 c 1.49362,-1.6118 2.87343,-3.35911 6.01593,-3.00797 v -2.59778 c -2.25085,-0.0636 -6.43688,2.01893 -6.01593,5.60575 z"
				id="path1749"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 42.072017,123.81979 c -0.0375,-0.91657 0.10593,-1.68842 0.77343,-2.04101 1.31427,-0.54765 3.5465,-0.11822 5.04366,-0.0478 1.41413,0.0665 2.08714,-0.27967 2.06767,-0.59671 v -6.78907 c -0.95299,-0.39898 -2.03048,-0.29994 -3.09375,-0.25781 -3.04112,0.47954 -8.51904,2.43805 -4.79101,9.73242 z"
				id="path1751"
			/><path
				style="fill:#a43a31;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 40.824997,119.68554 c 1.49362,-1.6118 2.87343,-3.35911 6.01593,-3.00797 v -2.59778 c -2.25085,-0.0636 -6.43688,2.01893 -6.01593,5.60575 z"
				id="path1753"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 53.449338,121.40221 c -0.334219,0 -3.545236,0.14933 -3.585252,0 -0.04002,-0.14934 0,-7.20089 0,-7.20089 l 2.035694,-2.0357 h 8.325077 l 7.930092,-1.24572 0.546904,-9.72272 -15.36061,-14.122299 v -12.97656 l 9.466212,-10.36398 h 23.104096 l 6.96094,8.47336 c 0,0 0.34375,10.61328 0,10.95703 -0.34375,0.34375 -17.386957,10.03836 -17.386957,10.03836 l -7.448978,-5.9993 v -5.41406 H 65.11468 v 9.92578 l 9.694256,8.752469 0.09115,20.72154 -1.488792,0.45575 H 62.59477 v -7.44395 z"
				id="path1755"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.322487;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 54.344416,124.16354 c -0.0404,-0.98305 0.114128,-1.81088 0.833283,-2.18904 1.415976,-0.58738 3.820948,-0.1268 5.433967,-0.0513 1.523563,0.0713 2.248655,-0.29996 2.227678,-0.63999 v -7.2815 c -1.026738,-0.42792 -2.18761,-0.32169 -3.333162,-0.27651 -3.276459,0.51433 -9.178292,2.61489 -5.161766,10.43834 z"
				id="path1757"
			/><path
				style="fill:#a43a31;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.322487;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 53.000895,119.72943 c 1.609205,-1.72871 3.095792,-3.60275 6.481477,-3.22614 v -2.78621 c -2.425034,-0.0682 -6.935003,2.16537 -6.481477,6.01235 z"
				id="path1759"
			/><path
				style="fill:#9d8b65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 74.610774,121.12762 c 1.577417,-0.17487 2.330507,-1.22902 2.696287,-2.69629 V 99.738781 l -12.524679,-11.39382 -0.243068,4.01063 9.753103,8.446609 0.1823,19.65812 z"
				id="path1761"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 56.305388,76.130801 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path1763"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 68.793004,76.130801 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path1765"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 62.169402,66.954981 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path1767"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 74.869703,66.954981 v 5.72729 h 6.107078 v -2.62817 h -3.44852 v -3.15989 z"
				id="path1769"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 80.703331,76.130801 v 5.72729 h 6.10708 v -2.62817 h -3.44852 v -3.15989 z"
				id="path1771"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 92.887111,88.056321 v -5.72729 h -6.10708 v 2.62817 h 3.44852 v 3.15989 z"
				id="path1773"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 86.536961,91.216201 v -5.72729 h -6.10708 v 2.62817 h 3.44852 v 3.15989 z"
				id="path1775"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 80.308351,94.376081 v -5.72729 h -6.107086 v 2.62817 h 3.448526 v 3.15989 z"
				id="path1777"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 47.220721,102.70117 0.486138,0.69882 3.235841,0.22787 3.144692,-0.0304 1.701477,-0.21268 c 3.618434,-0.97779 3.903916,-3.516259 3.980235,-6.152659 -0.768815,-2.98426 -3.790375,-6.67251 -12.305313,-12.07744 v 8.41623 c 2.337177,1.08902 4.646545,2.18997 6.198233,3.61563 0.0053,0.6839 0.02125,1.57953 0,1.73186 -1.236027,0.34247 -2.696471,0.64994 -6.107084,0.65325 -0.218479,0.16586 -0.382751,0.35635 -0.379793,0.622859 z"
				id="path1779"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 50.654058,103.47595 h 3.721978 c -0.07659,0.18362 0.04436,0.38521 -0.44056,0.53171 -1.132894,0.7478 -2.332901,1.12276 -3.296611,2.81047 -1.111995,-1.82492 -0.345647,-2.45452 0.01519,-3.34218 z"
				id="path1781"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 47.403022,102.86828 -0.121534,-2.79529 c -1.74964,0.64161 -3.328936,1.46168 -3.402949,3.85871 0.977495,-0.66812 2.145998,-1.19728 3.524483,-1.06342 z"
				id="path1783"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 10.882064,110.12993 -6.228617,-7.10974 3.55487,-1.94454 1.172051,0.67669 1.742437,2.99738 z"
				id="path1785"
			/><path
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 30.1625,90.752083 0.499218,-0.827172 -1.093806,-2.55221 -4.314457,1.0938 -1.549556,6.13747 z"
				id="path1787"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 25.450948,99.556471 v -2.46106 c 0.04762,-1.69904 2.547429,-2.2918 3.55487,-3.38776 3.465802,2.30635 3.274891,5.0698 3.281418,7.808559 -2.092453,-0.70341 -3.770481,-1.518389 -6.836288,-1.959739 z"
				id="path1789"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 19.435016,93.130371 0.478761,-1.78676 c 2.258237,0.39537 3.147846,-0.74813 3.303984,-2.45486 l 2.67375,-0.15204 c 0,0 -1.306492,4.84941 -1.367258,4.87979 -0.06077,0.0304 -5.013278,0.076 -5.013278,0.076 z"
				id="path1791"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 13.282358,109.03612 12.1534,-6.47168 0.06077,-5.408259 c 2.133144,-0.66242 2.762415,-2.415178 3.445132,-3.747018 l 1.22084,-2.65708 -4.850956,0.118401 c -1.048683,2.60678 -3.940649,2.409067 -6.80322,1.728177 0.01013,1.67109 -0.166667,3.65371 0.03038,5.01327 -1.87046,1.55267 -3.70407,3.157969 -6.745134,3.038349 l -0.51652,1.61033 -3.494103,-0.27346 -0.820354,1.4888 2.795281,4.92212 1.276109,0.78997 z"
				id="path1793"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 15.500355,110.81356 c 1.885566,-1.72679 2.135919,-3.45359 2.445872,-5.18038 l -1.64071,0.5469 c -1.041739,-0.0433 -1.84936,0.23118 -2.324336,0.95708 0.878968,1.22547 1.140255,2.45093 1.519174,3.6764 z"
				id="path1795"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 10.415463,113.50066 c 2.365353,-1.4885 3.521362,-3.61046 3.480467,-6.35937 -1.348744,0.49872 -2.643527,0.97495 -3.652343,1.33203 0.684996,1.94778 0.2907,3.42788 0.171876,5.02734 z"
				id="path1797"
			/><path
				style="fill:#dac974;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 7.524686,102.12388 3.980239,0.27345 0.336746,-2.21761 c 0.448653,-0.14955 -2.453041,-0.824249 -3.511821,-0.532089 -0.09262,0.0256 -1.534367,-1.04824 -1.534367,-1.04824 -0.303733,1.21744 -0.399726,2.426439 0.729203,3.524489 z"
				id="path1799"
			/><path
				style="fill:#dac974;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 19.954525,93.133481 c -0.673696,-0.45921 -1.199605,-1.03934 -2.470702,-1.00977 -2.725046,2.58632 -5.679693,3.36645 -9.259766,-0.77344 0.501995,1.73718 -0.543431,4.02266 1.040875,4.68624 3.727655,1.56131 6.77559,1.33133 10.625138,-1.78585 z"
				id="path1801"
			/><path
				style="fill:#dac974;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 13.434277,92.978451 -0.805162,-0.88112 -0.193698,-2.138998 -3.011761,0.376748 c 0.500894,1.66485 1.572886,2.7943 4.010621,2.64337 z"
				id="path1803"
			/><ellipse
				style="fill:#1e2273;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="ellipse1805"
				cx="21.144089"
				cy="89.461555"
				rx="2.1496322"
				ry="2.2103994"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 9.856869,82.154961 c 8.519945,-4.09126 11.001726,-7.28202 12.589844,-9.625 l 2.664423,0.55194 c 0,0 -2.148798,5.8504 -2.29919,5.89337 -0.150392,0.043 -12.955077,3.17969 -12.955077,3.17969 z"
				id="path1807"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 7.418345,90.562961 7.656639,-0.66844 c 0,0 14.401779,-3.52448 14.553695,-3.64602 0.151918,-0.12153 1.883778,-3.79793 1.883778,-3.79793 l -0.273453,-7.14012 -3.919471,-2.88644 -2.552213,0.21269 -0.364601,0.60767 c -0.910466,1.96203 -2.57303,3.69516 -4.800592,5.25634 l -9.965788,3.58526 -7.200887,2.30914 0.303835,3.4941 4.52714,2.4003 z"
				id="path1809"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 1.159345,91.170631 h 4.16254 C 7.617612,90.693721 7.2614557,90.67993 8.4666667,90.4875 6.2390997,89.29433 4.874975,88.128491 3.043121,86.856181 2.780391,86.111711 2.560542,85.164391 2.617753,84.379921 l -1.792626,0.37979 c -0.42946,4.76749 0.07409,5.16803 0.334218,6.41092 z"
				id="path1811"
			/><path
				style="fill:#dac974;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 5.929553,95.956031 c -0.534172,-1.647 -1.352987,-3.27437 -0.774779,-4.99808 -0.834866,0.19936 -1.887397,-0.19986 -2.871239,-0.41018 -0.433668,0.14523 -0.853114,0.29758 -1.048231,0.56209 1.007745,3.98266 2.908491,4.17006 4.694249,4.84617 z"
				id="path1813"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 22.425228,72.529961 c 0.867629,0.26475 1.670181,0.60387 2.921873,0.42969 l 2.083986,-3.07227 c 0.57304,-2.72851 -0.35243,-5.45703 -0.773438,-8.18554 -1.074636,3.68015 -2.100308,7.3706 -4.232421,10.82812 z"
				id="path1815"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 90.809991,118.57098 h 9.324219 l 8.40039,-8.40039 v -9.38868 c -0.75167,-1.915289 -1.48419,-3.834499 -6.5957,-4.855459 -3.013229,-1.13762 -5.664349,-2.71783 -7.648439,-5.11329 h -3.17969 l -7.77301,4.48776 7.95903,7.959039 h 7.72023 c -0.28368,4.04916 -1.21452,7.37224 -4.79101,7.72703 -1.25782,0.27191 -3.42039,0.0527 -3.41602,1.00977 z"
				id="path1817"
			/><path
				style="fill:#9d8b65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 105.37473,113.25943 v -11.63688 c -1.32569,-2.723279 -4.37791,-3.271279 -6.684369,-3.919469 -3.56809,-1.75025 -5.35515,-4.54663 -7.68703,-6.8059 l 3.37258,-0.0304 c 2.10644,1.92443 4.44109,3.86372 7.352799,4.98289 3.93171,0.88325 6.47638,2.37938 6.92744,4.800589 v 9.32774 z"
				id="path1819"
			/><rect
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect1821"
				width="8.4648438"
				height="8.4648438"
				x="47.530651"
				y="29.798717"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 47.401743,37.919811 1.589845,-6.960935 6.273437,-1.41797 c -4.800624,-0.67025 -6.66119,-3.42305 -8.808596,-5.97266 0.17266,4.81946 -0.06646,9.741875 0.945314,14.351565 z"
				id="path1823"
			/><rect
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect1825"
				width="8.4648438"
				height="8.4648438"
				x="29.192806"
				y="52.141293"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 29.063899,60.262381 1.589845,-6.96093 6.273437,-1.41797 c -4.800624,-0.67025 -6.66119,-3.42305 -8.808596,-5.97266 0.17266,4.81946 -0.06646,9.74187 0.945314,14.35156 z"
				id="path1827"
			/><rect
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect1829"
				width="8.4648438"
				height="8.4648438"
				x="35.681087"
				y="40.797543"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 35.55218,48.918631 1.589845,-6.96093 6.273437,-1.41797 c -4.800624,-0.67025 -6.66119,-3.42305 -8.808596,-5.97266 0.17266,4.81946 -0.06646,9.74187 0.945314,14.35156 z"
				id="path1831"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 31.542839,87.433461 -0.182301,-9.47965 -2.734514,-5.28673 5.469028,-5.7121 11.302661,-17.68319 c 15.647066,-19.222802 31.024655,-17.875468 46.185718,0 5.24219,6.11275 12.093029,18.28889 15.726559,18.33825 l -11.214839,3.99609 -9.53906,-11.1289 H 62.063899 l -16.628906,13.8789 -12.919882,13.3204 z"
				id="path1833"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 28.462337,74.162771 c 3.141965,-3.19601 5.048653,-6.84121 6.960936,-10.48437 -2.448651,2.24754 -5.692096,5.5827 -7.17578,6.50976 l -1.56836,3.05078 z"
				id="path1835"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 25.77679,74.205741 -0.558594,-1.48242 1.976562,-3.11523 -0.451172,-6.03711 -0.171874,-2.01953 c 1.410049,3.21031 1.67993,6.31202 1.91211,9.41015 l -1.439453,2.53516 z"
				id="path1837"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 28.806087,77.063161 c 3.425169,-3.32302 5.745684,-8.15689 6.53125,-13.40625 l -6.939452,10.24805 z"
				id="path1839"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 30.5098,81.068121 c 0.204411,-1.99972 0.325669,-4.02319 -0.03038,-6.18304 3.359935,-0.50069 5.530936,-1.46845 7.793366,-2.4003 0,0 -6.18304,8.43142 -6.274192,8.50738 -0.09115,0.076 -1.488791,0.076 -1.488791,0.076 z"
				id="path1841"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 31.147885,82.584651 -0.73047,-1.58984 c 4.564861,-2.85742 5.294878,-5.71485 7.90625,-8.57227 -1.800189,3.46733 -3.33563,6.97045 -7.17578,10.16211 z"
				id="path1843"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 56.092703,52.067071 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path1845"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 68.67147,52.067071 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path1847"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 80.642571,52.067071 v 5.72729 h 6.10708 v -2.62817 h -3.44853 v -3.15989 z"
				id="path1849"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 41.387092,66.954981 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path1851"
			/><path
				style="fill:#9d8b65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 30.1625,90.752083 2.983431,2.596238 12.246094,-12.03125 5.499999,4.64063 -0.515625,-12.63282 12.522208,-13.11503 H 59.191818 L 29.53753,87.858831 Z"
				id="path1853"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 14.712336,89.953791 10.226564,-3.22266 4.210936,-1.89062 c 0.859287,-0.88015 1.79497,-2.37148 2.707031,-3.67383 0.325717,1.37747 0.708485,2.71691 0.53711,4.42578 -0.568371,1.19448 -1.310519,2.29075 -3.179686,2.75 z"
				id="path1855"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 43.605087,61.242891 2.673747,-2.00531 -3.914258,-5.22781 -1.924902,3.00428 z"
				id="path1857"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 50.714825,51.641711 2.400294,-1.91416 -3.742381,-5.00222 -2.152017,2.20693 z"
				id="path1859"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 59.951408,44.562351 2.916814,-1.00265 -2.217994,-6.77552 -2.929085,1.44493 z"
				id="path1861"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 78.735771,46.813171 3.13672,1.0957 2.53516,-5.88672 -2.56402,-1.92775 z"
				id="path1863"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 86.813901,52.721371 2.34179,1.91211 3.67383,-3.84571 -1.9082,-2.3292 z"
				id="path1865"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 68.094182,42.891261 3.03835,0.0608 0.379794,-7.36799 -3.387759,-0.25826 z"
				id="path1867"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="M 87.190211,34.110431 75.082386,27.790663 c 0.666181,-0.923136 1.772775,-1.552661 2.916815,-2.157227 1.18517,-1.539173 2.1006,-3.40204 3.09912,-5.165196 1.80176,1.306887 3.49494,2.657208 4.49675,4.284075 0.82347,1.377434 1.63349,2.75739 1.82302,4.253688 -0.0361,1.701476 0.24073,3.402952 -0.22788,5.104428 z"
				id="path1869"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 80.024841,38.133481 7.12022,-3.44488 c -0.21886,-0.2966 0.24755,-0.59627 0.0323,-0.89887 -1.72552,-2.42589 -4.00731,-5.040149 -5.30488,-7.773441 -2.18278,0.718215 -4.34578,1.450561 -6.917968,1.890626 -2.658615,6.198605 1.993738,7.707145 5.070318,10.226565 z"
				id="path1871"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 90.122491,38.047541 c 1.48947,0.49635 3.40893,0.37843 5.28516,0.32227 0.72441,2.46181 2.30418,4.37374 3.80273,6.33789 0.14628,-3.52108 0.21516,-7.54012 -0.58008,-11.62305 -1.19487,1.22398 -2.33059,2.54216 -3.91016,3.33008 -2.12427,0.71036 -3.92156,0.93736 -4.59765,1.63281 z"
				id="path1873"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 99.231871,44.664731 c -2.09908,0.94249 -3.96376,2.3069 -5.7793,3.75976 -0.91637,0.0369 -2.84107,-2.96783 -3.37784,-4.78937 -0.30744,-1.0433 -0.76358,-4.72031 -0.1456,-5.48016 0.0987,-0.12135 5.47852,0.23633 5.47852,0.23633 z"
				id="path1875"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 100.75726,50.229181 c 0.25781,0 3.20117,-0.15039 3.20117,-0.15039 1.79572,-0.84799 2.54574,-1.8861 3.78125,-2.83594 0.0762,1.03125 0.1244,2.0625 -0.19336,3.09375 l -1.33203,4.51172 c 0,0 -5.69336,-2.12695 -5.56446,-2.42773 0.12891,-0.30078 0.10743,-2.19141 0.10743,-2.19141 z"
				id="path1877"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 99.231871,57.190121 6.944369,1.86074 0.33883,-5.01895 c -0.91541,-0.7695 -1.20317,-1.95743 -1.63281,-3.05078 -2.11059,-0.23015 -4.05052,-1.14297 -6.058599,-1.7832 z"
				id="path1879"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="M 47.110774,15.746761 C 54.023141,10.073253 60.154314,7.368282 66.274835,4.703791 78.773661,2.272482 90.656251,2.306129 102.18446,3.757318 c 13.1625,3.633667 17.49505,10.105532 21.79741,16.5871 1.4163,3.898165 2.6705,7.777258 2.72851,11.515624 v 7.175779 l -4.5332,3.65234 -21.65625,-28.3164 -35.513487,1.548662 0.0028,0.06625 z"
				id="path1881"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="M 126.58241,49.393331 V 38.789491 C 122.71089,30.637184 121.15853,21.969505 113.3352,14.695378 108.39228,8.051211 100.25795,6.663497 91.459091,6.370301 c -8.30275,-0.509497 -14.29592,2.214422 -20.370073,4.824963 -2.10644,1.509798 -4.146373,3.05285 -5.93137,4.72337 h 15.597653 l 22.188749,5.947249 16.58939,15.617118 3.03835,13.73334 z"
				id="path1883"
			/><path
				style="fill:#9d8b65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 96.168531,75.280071 c -0.24983,2.30578 0.0317,4.08021 0.15192,6.01593 0.94126,1.78752 1.74395,3.65744 4.739819,4.2233 l 15.65988,-0.33504 c 5.60933,-2.29682 8.39671,-6.81089 10.01172,-12.2461 l -0.0859,-23.63281 c -3.474,-9.80466 -9.10432,-18.65654 -17.50365,-26.284895 -4.84665,-4.533735 -10.375619,-8.385143 -17.730729,-10.410415 -4.58494,0.05956 -9.61752,-1.395962 -12.80468,3.394533 l 10.95703,3.824218 15.769529,10.226561 8.50781,12.847658 3.78125,23.46094 -2.23438,8.76562 c 0,0 -16.242179,-0.34375 -16.585929,-0.34375 -0.34375,0 -2.63365,0.49425 -2.63365,0.49425 z"
				id="path1885"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 106.04317,67.836111 c 4.53476,-0.75413 5.28975,-2.67126 6.83628,-4.34484 0.14122,-3.2004 -0.43248,-6.40079 -1.00265,-9.60119 -1.01768,-3.30167 -2.4772,-6.60335 -4.22331,-9.90502 -2.25675,-3.87596 -7.15826,-10.01507 -9.819819,-13.648138 l 7.387879,-0.973536 9.63283,14.712834 1.57994,18.83776 -7.26165,6.35015 z"
				id="path1887"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 96.567801,70.746761 -0.64453,2.10547 0.17188,2.79297 c 1.40068,1.78548 2.97606,3.33075 5.285149,3.86718 l 10.8711,0.34375 c 6.90178,-1.22001 7.13472,-5.27198 8.3789,-8.89453 0.5421,-5.37109 0.0765,-10.74219 0.043,-16.11328 -0.77096,-4.14379 -1.076,-8.30784 -3.60937,-12.375 -3.21106,-5.5989 -6.50724,-11.155234 -11.51563,-15.855466 C 99.117641,20.94352 91.797031,16.023374 78.692831,16.004574 l 19.37891,14.652341 2.277339,0.08594 c 4.27817,5.976396 8.24865,12.014326 11.38672,18.218746 1.18298,2.49219 1.80833,4.98438 2.01953,7.47657 l 0.34375,7.39062 c -1.40797,1.60654 -2.82663,3.20714 -5.24219,4.25391 l -6.35937,1.46093 -1.80469,-0.55859 z"
				id="path1889"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 117.19391,42.602611 v -5.72729 h -6.10708 v 2.62817 h 3.44853 v 3.15989 z"
				id="path1891"
			/><rect
				style="fill:#98271f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect1893"
				width="2.6533203"
				height="3.0830078"
				x="114.55022"
				y="39.529964"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 99.206881,27.653932 v -5.72729 h -6.10708 v 2.62817 h 3.44853 v 3.15989 z"
				id="path1895"
			/><rect
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect1897"
				width="2.6533203"
				height="3.0830078"
				x="96.563194"
				y="24.581287"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 107.65349,33.669861 v -5.727287 h -6.10708 v 2.62817 h 3.44853 v 3.159887 z"
				id="path1899"
			/><rect
				style="fill:#98271f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect1901"
				width="2.6533203"
				height="3.0830078"
				x="105.0098"
				y="30.597218"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 106.53655,68.125671 c -2.95914,-2.0497 -4.79819,-4.39809 -6.960929,-6.66016 l 0.722189,-0.39499 c 1.70012,2.24536 3.68486,4.9225 6.88327,6.66843 z"
				id="path1903"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 108.91441,67.274011 v 2.82567 l -7.65664,0.62286 0.0911,-3.29661 z"
				id="path1905"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 96.095151,63.442071 4.413189,-2.05882 -1.792099,-2.53883 -4.10352,1.84765 z"
				id="path1907"
			/></g
		><g id="g1739"
			><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 59.890641,29.856741 c -0.151919,0 -0.366757,-0.33176 -0.546904,-0.303831 -1.39498,0.216265 1.261826,-11.923611 3.767552,-12.639533 1.76858,2.585688 2.445704,4.886579 6.319769,6.380535 l 1.561247,1.458911 -4.933817,-0.182806 z"
				id="path23753"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 59.61468,31.301448 7.089844,3.523433 c 4.861793,-3.329834 7.474931,-6.746155 3.953124,-10.398435 -2.034842,-0.07487 -4.417025,-0.288684 -7.261717,-0.687498 -1.845416,2.359454 -4.172719,4.585974 -3.781251,7.5625 z"
				id="path23697"
			/><path
				style="fill:#87816b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 10.5014,100.1159 c -0.95965,0.0331 -1.769746,-4.403099 -1.052735,-4.576169 4.54774,-1.1876 7.089021,-3.08801 7.283204,-5.82227 l 3.58789,-0.38672 1.224608,8.46485 -8.121092,4.167969 z"
				id="path17544"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 82.968201,121.44988 c -0.0375,-0.91657 0.10593,-1.68842 0.77343,-2.04101 1.31427,-0.54765 3.5465,-0.11822 5.04366,-0.0478 1.41413,0.0665 2.08714,-0.27967 2.06767,-0.59671 v -6.78907 c -0.95299,-0.39898 -2.03048,-0.29994 -3.09375,-0.25781 -3.04112,0.47954 -8.51904,2.43805 -4.79101,9.73242 z"
				id="path6948"
			/><path
				style="fill:#a43a31;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 81.721181,117.31563 c 1.49362,-1.6118 2.87343,-3.35911 6.01593,-3.00797 v -2.59778 c -2.25085,-0.0636 -6.43688,2.01893 -6.01593,5.60575 z"
				id="path6952"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 42.072017,123.81979 c -0.0375,-0.91657 0.10593,-1.68842 0.77343,-2.04101 1.31427,-0.54765 3.5465,-0.11822 5.04366,-0.0478 1.41413,0.0665 2.08714,-0.27967 2.06767,-0.59671 v -6.78907 c -0.95299,-0.39898 -2.03048,-0.29994 -3.09375,-0.25781 -3.04112,0.47954 -8.51904,2.43805 -4.79101,9.73242 z"
				id="path11658"
			/><path
				style="fill:#a43a31;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 40.824997,119.68554 c 1.49362,-1.6118 2.87343,-3.35911 6.01593,-3.00797 v -2.59778 c -2.25085,-0.0636 -6.43688,2.01893 -6.01593,5.60575 z"
				id="path11660"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 53.449338,121.40221 c -0.334219,0 -3.545236,0.14933 -3.585252,0 -0.04002,-0.14934 0,-7.20089 0,-7.20089 l 2.035694,-2.0357 h 8.325077 l 7.930092,-1.24572 0.546904,-9.72272 -15.36061,-14.122299 v -12.97656 l 9.466212,-10.36398 h 23.104096 l 6.96094,8.47336 c 0,0 0.34375,10.61328 0,10.95703 -0.34375,0.34375 -17.386957,10.03836 -17.386957,10.03836 l -7.448978,-5.9993 v -5.41406 H 65.11468 v 9.92578 l 9.694256,8.752469 0.09115,20.72154 -1.488792,0.45575 H 62.59477 v -7.44395 z"
				id="path13122"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.322487;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 54.344416,124.16354 c -0.0404,-0.98305 0.114128,-1.81088 0.833283,-2.18904 1.415976,-0.58738 3.820948,-0.1268 5.433967,-0.0513 1.523563,0.0713 2.248655,-0.29996 2.227678,-0.63999 v -7.2815 c -1.026738,-0.42792 -2.18761,-0.32169 -3.333162,-0.27651 -3.276459,0.51433 -9.178292,2.61489 -5.161766,10.43834 z"
				id="path13116"
			/><path
				style="fill:#a43a31;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.322487;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 53.000895,119.72943 c 1.609205,-1.72871 3.095792,-3.60275 6.481477,-3.22614 v -2.78621 c -2.425034,-0.0682 -6.935003,2.16537 -6.481477,6.01235 z"
				id="path13118"
			/><path
				style="fill:#9d8b65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 74.610774,121.12762 c 1.577417,-0.17487 2.330507,-1.22902 2.696287,-2.69629 V 99.738781 l -12.524679,-11.39382 -0.243068,4.01063 9.753103,8.446609 0.1823,19.65812 z"
				id="path13124"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 56.305388,76.130801 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path13238"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 68.793004,76.130801 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path13402"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 62.169402,66.954981 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path13404"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 74.869703,66.954981 v 5.72729 h 6.107078 v -2.62817 h -3.44852 v -3.15989 z"
				id="path13406"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 80.703331,76.130801 v 5.72729 h 6.10708 v -2.62817 h -3.44852 v -3.15989 z"
				id="path13410"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 92.887111,88.056321 v -5.72729 h -6.10708 v 2.62817 h 3.44852 v 3.15989 z"
				id="path13412"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 86.536961,91.216201 v -5.72729 h -6.10708 v 2.62817 h 3.44852 v 3.15989 z"
				id="path13414"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 80.308351,94.376081 v -5.72729 h -6.107086 v 2.62817 h 3.448526 v 3.15989 z"
				id="path14142"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 47.220721,102.70117 0.486138,0.69882 3.235841,0.22787 3.144692,-0.0304 1.701477,-0.21268 c 3.618434,-0.97779 3.903916,-3.516259 3.980235,-6.152659 -0.768815,-2.98426 -3.790375,-6.67251 -12.305313,-12.07744 v 8.41623 c 2.337177,1.08902 4.646545,2.18997 6.198233,3.61563 0.0053,0.6839 0.02125,1.57953 0,1.73186 -1.236027,0.34247 -2.696471,0.64994 -6.107084,0.65325 -0.218479,0.16586 -0.382751,0.35635 -0.379793,0.622859 z"
				id="path15772"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 50.654058,103.47595 h 3.721978 c -0.07659,0.18362 0.04436,0.38521 -0.44056,0.53171 -1.132894,0.7478 -2.332901,1.12276 -3.296611,2.81047 -1.111995,-1.82492 -0.345647,-2.45452 0.01519,-3.34218 z"
				id="path15770"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 47.403022,102.86828 -0.121534,-2.79529 c -1.74964,0.64161 -3.328936,1.46168 -3.402949,3.85871 0.977495,-0.66812 2.145998,-1.19728 3.524483,-1.06342 z"
				id="path15768"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 10.882064,110.12993 -6.228617,-7.10974 3.55487,-1.94454 1.172051,0.67669 1.742437,2.99738 z"
				id="path16834"
			/><path
				style="fill:#000000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 30.1625,90.752083 0.499218,-0.827172 -1.093806,-2.55221 -4.314457,1.0938 -1.549556,6.13747 z"
				id="path19094"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 25.450948,99.556471 v -2.46106 c 0.04762,-1.69904 2.547429,-2.2918 3.55487,-3.38776 3.465802,2.30635 3.274891,5.0698 3.281418,7.808559 -2.092453,-0.70341 -3.770481,-1.518389 -6.836288,-1.959739 z"
				id="path16832"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 19.435016,93.130371 0.478761,-1.78676 c 2.258237,0.39537 3.147846,-0.74813 3.303984,-2.45486 l 2.67375,-0.15204 c 0,0 -1.306492,4.84941 -1.367258,4.87979 -0.06077,0.0304 -5.013278,0.076 -5.013278,0.076 z"
				id="path17162"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 13.282358,109.03612 12.1534,-6.47168 0.06077,-5.408259 c 2.133144,-0.66242 2.762415,-2.415178 3.445132,-3.747018 l 1.22084,-2.65708 -4.850956,0.118401 c -1.048683,2.60678 -3.940649,2.409067 -6.80322,1.728177 0.01013,1.67109 -0.166667,3.65371 0.03038,5.01327 -1.87046,1.55267 -3.70407,3.157969 -6.745134,3.038349 l -0.51652,1.61033 -3.494103,-0.27346 -0.820354,1.4888 2.795281,4.92212 1.276109,0.78997 z"
				id="path17106"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 15.500355,110.81356 c 1.885566,-1.72679 2.135919,-3.45359 2.445872,-5.18038 l -1.64071,0.5469 c -1.041739,-0.0433 -1.84936,0.23118 -2.324336,0.95708 0.878968,1.22547 1.140255,2.45093 1.519174,3.6764 z"
				id="path16830"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 10.415463,113.50066 c 2.365353,-1.4885 3.521362,-3.61046 3.480467,-6.35937 -1.348744,0.49872 -2.643527,0.97495 -3.652343,1.33203 0.684996,1.94778 0.2907,3.42788 0.171876,5.02734 z"
				id="path16612"
			/><path
				style="fill:#dac974;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 7.524686,102.12388 3.980239,0.27345 0.336746,-2.21761 c 0.448653,-0.14955 -2.453041,-0.824249 -3.511821,-0.532089 -0.09262,0.0256 -1.534367,-1.04824 -1.534367,-1.04824 -0.303733,1.21744 -0.399726,2.426439 0.729203,3.524489 z"
				id="path17486"
			/><path
				style="fill:#dac974;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 19.954525,93.133481 c -0.673696,-0.45921 -1.199605,-1.03934 -2.470702,-1.00977 -2.725046,2.58632 -5.679693,3.36645 -9.259766,-0.77344 0.501995,1.73718 -0.543431,4.02266 1.040875,4.68624 3.727655,1.56131 6.77559,1.33133 10.625138,-1.78585 z"
				id="path17542"
			/><path
				style="fill:#dac974;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 13.434277,92.978451 -0.805162,-0.88112 -0.193698,-2.138998 -3.011761,0.376748 c 0.500894,1.66485 1.572886,2.7943 4.010621,2.64337 z"
				id="path17656"
			/><ellipse
				style="fill:#1e2273;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="path17378"
				cx="21.144089"
				cy="89.461555"
				rx="2.1496322"
				ry="2.2103994"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 9.856869,82.154961 c 8.519945,-4.09126 11.001726,-7.28202 12.589844,-9.625 l 2.664423,0.55194 c 0,0 -2.148798,5.8504 -2.29919,5.89337 -0.150392,0.043 -12.955077,3.17969 -12.955077,3.17969 z"
				id="path18866"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 7.418345,90.562961 7.656639,-0.66844 c 0,0 14.401779,-3.52448 14.553695,-3.64602 0.151918,-0.12153 1.883778,-3.79793 1.883778,-3.79793 l -0.273453,-7.14012 -3.919471,-2.88644 -2.552213,0.21269 -0.364601,0.60767 c -0.910466,1.96203 -2.57303,3.69516 -4.800592,5.25634 l -9.965788,3.58526 -7.200887,2.30914 0.303835,3.4941 4.52714,2.4003 z"
				id="path18756"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 1.159345,91.170631 h 4.16254 C 7.617612,90.693721 7.2614557,90.67993 8.4666667,90.4875 6.2390997,89.29433 4.874975,88.128491 3.043121,86.856181 2.780391,86.111711 2.560542,85.164391 2.617753,84.379921 l -1.792626,0.37979 c -0.42946,4.76749 0.07409,5.16803 0.334218,6.41092 z"
				id="path17658"
			/><path
				style="fill:#dac974;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 5.929553,95.956031 c -0.534172,-1.647 -1.352987,-3.27437 -0.774779,-4.99808 -0.834866,0.19936 -1.887397,-0.19986 -2.871239,-0.41018 -0.433668,0.14523 -0.853114,0.29758 -1.048231,0.56209 1.007745,3.98266 2.908491,4.17006 4.694249,4.84617 z"
				id="path17600"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 22.425228,72.529961 c 0.867629,0.26475 1.670181,0.60387 2.921873,0.42969 l 2.083986,-3.07227 c 0.57304,-2.72851 -0.35243,-5.45703 -0.773438,-8.18554 -1.074636,3.68015 -2.100308,7.3706 -4.232421,10.82812 z"
				id="path18642"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 90.809991,118.57098 h 9.324219 l 8.40039,-8.40039 v -9.38868 c -0.75167,-1.915289 -1.48419,-3.834499 -6.5957,-4.855459 -3.013229,-1.13762 -5.664349,-2.71783 -7.648439,-5.11329 h -3.17969 l -7.77301,4.48776 7.95903,7.959039 h 7.72023 c -0.28368,4.04916 -1.21452,7.37224 -4.79101,7.72703 -1.25782,0.27191 -3.42039,0.0527 -3.41602,1.00977 z"
				id="path9186"
			/><path
				style="fill:#9d8b65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1"
				d="m 105.37473,113.25943 v -11.63688 c -1.32569,-2.723279 -4.37791,-3.271279 -6.684369,-3.919469 -3.56809,-1.75025 -5.35515,-4.54663 -7.68703,-6.8059 l 3.37258,-0.0304 c 2.10644,1.92443 4.44109,3.86372 7.352799,4.98289 3.93171,0.88325 6.47638,2.37938 6.92744,4.800589 v 9.32774 z"
				id="path10694"
			/><rect
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect23693"
				width="8.4648438"
				height="8.4648438"
				x="47.530651"
				y="29.798717"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 47.401743,37.919811 1.589845,-6.960935 6.273437,-1.41797 c -4.800624,-0.67025 -6.66119,-3.42305 -8.808596,-5.97266 0.17266,4.81946 -0.06646,9.741875 0.945314,14.351565 z"
				id="path23691"
			/><rect
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect23516"
				width="8.4648438"
				height="8.4648438"
				x="29.192806"
				y="52.141293"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 29.063899,60.262381 1.589845,-6.96093 6.273437,-1.41797 c -4.800624,-0.67025 -6.66119,-3.42305 -8.808596,-5.97266 0.17266,4.81946 -0.06646,9.74187 0.945314,14.35156 z"
				id="path23462"
			/><rect
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect23685"
				width="8.4648438"
				height="8.4648438"
				x="35.681087"
				y="40.797543"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 35.55218,48.918631 1.589845,-6.96093 6.273437,-1.41797 c -4.800624,-0.67025 -6.66119,-3.42305 -8.808596,-5.97266 0.17266,4.81946 -0.06646,9.74187 0.945314,14.35156 z"
				id="path23683"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 31.542839,87.433461 -0.182301,-9.47965 -2.734514,-5.28673 5.469028,-5.7121 11.302661,-17.68319 c 15.647066,-19.222802 31.024655,-17.875468 46.185718,0 5.24219,6.11275 12.093029,18.28889 15.726559,18.33825 l -11.214839,3.99609 -9.53906,-11.1289 H 62.063899 l -16.628906,13.8789 -12.919882,13.3204 z"
				id="path22386"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 28.462337,74.162771 c 3.141965,-3.19601 5.048653,-6.84121 6.960936,-10.48437 -2.448651,2.24754 -5.692096,5.5827 -7.17578,6.50976 l -1.56836,3.05078 z"
				id="path18640"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 25.77679,74.205741 -0.558594,-1.48242 1.976562,-3.11523 -0.451172,-6.03711 -0.171874,-2.01953 c 1.410049,3.21031 1.67993,6.31202 1.91211,9.41015 l -1.439453,2.53516 z"
				id="path18754"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 28.806087,77.063161 c 3.425169,-3.32302 5.745684,-8.15689 6.53125,-13.40625 l -6.939452,10.24805 z"
				id="path18644"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 30.5098,81.068121 c 0.204411,-1.99972 0.325669,-4.02319 -0.03038,-6.18304 3.359935,-0.50069 5.530936,-1.46845 7.793366,-2.4003 0,0 -6.18304,8.43142 -6.274192,8.50738 -0.09115,0.076 -1.488791,0.076 -1.488791,0.076 z"
				id="path17990"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 31.147885,82.584651 -0.73047,-1.58984 c 4.564861,-2.85742 5.294878,-5.71485 7.90625,-8.57227 -1.800189,3.46733 -3.33563,6.97045 -7.17578,10.16211 z"
				id="path17770"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 56.092703,52.067071 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path22444"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 68.67147,52.067071 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path22446"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 80.642571,52.067071 v 5.72729 h 6.10708 v -2.62817 h -3.44853 v -3.15989 z"
				id="path22448"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 41.387092,66.954981 v 5.72729 h 6.107081 v -2.62817 h -3.448526 v -3.15989 z"
				id="path22442"
			/><path
				style="fill:#9d8b65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 30.1625,90.752083 2.983431,2.596238 12.246094,-12.03125 5.499999,4.64063 -0.515625,-12.63282 12.522208,-13.11503 H 59.191818 L 29.53753,87.858831 Z"
				id="path22330"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 14.712336,89.953791 10.226564,-3.22266 4.210936,-1.89062 c 0.859287,-0.88015 1.79497,-2.37148 2.707031,-3.67383 0.325717,1.37747 0.708485,2.71691 0.53711,4.42578 -0.568371,1.19448 -1.310519,2.29075 -3.179686,2.75 z"
				id="path17714"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 43.605087,61.242891 2.673747,-2.00531 -3.914258,-5.22781 -1.924902,3.00428 z"
				id="path23340"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 50.714825,51.641711 2.400294,-1.91416 -3.742381,-5.00222 -2.152017,2.20693 z"
				id="path23450"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 59.951408,44.562351 2.916814,-1.00265 -2.217994,-6.77552 -2.929085,1.44493 z"
				id="path23452"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 78.735771,46.813171 3.13672,1.0957 2.53516,-5.88672 -2.56402,-1.92775 z"
				id="path23456"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 86.813901,52.721371 2.34179,1.91211 3.67383,-3.84571 -1.9082,-2.3292 z"
				id="path23458"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 68.094182,42.891261 3.03835,0.0608 0.379794,-7.36799 -3.387759,-0.25826 z"
				id="path23454"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="M 87.190211,34.110431 75.082386,27.790663 c 0.666181,-0.923136 1.772775,-1.552661 2.916815,-2.157227 1.18517,-1.539173 2.1006,-3.40204 3.09912,-5.165196 1.80176,1.306887 3.49494,2.657208 4.49675,4.284075 0.82347,1.377434 1.63349,2.75739 1.82302,4.253688 -0.0361,1.701476 0.24073,3.402952 -0.22788,5.104428 z"
				id="path24260"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 80.024841,38.133481 7.12022,-3.44488 c -0.21886,-0.2966 0.24755,-0.59627 0.0323,-0.89887 -1.72552,-2.42589 -4.00731,-5.040149 -5.30488,-7.773441 -2.18278,0.718215 -4.34578,1.450561 -6.917968,1.890626 -2.658615,6.198605 1.993738,7.707145 5.070318,10.226565 z"
				id="path24040"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 90.122491,38.047541 c 1.48947,0.49635 3.40893,0.37843 5.28516,0.32227 0.72441,2.46181 2.30418,4.37374 3.80273,6.33789 0.14628,-3.52108 0.21516,-7.54012 -0.58008,-11.62305 -1.19487,1.22398 -2.33059,2.54216 -3.91016,3.33008 -2.12427,0.71036 -3.92156,0.93736 -4.59765,1.63281 z"
				id="path25216"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 99.231871,44.664731 c -2.09908,0.94249 -3.96376,2.3069 -5.7793,3.75976 -0.91637,0.0369 -2.84107,-2.96783 -3.37784,-4.78937 -0.30744,-1.0433 -0.76358,-4.72031 -0.1456,-5.48016 0.0987,-0.12135 5.47852,0.23633 5.47852,0.23633 z"
				id="path25326"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 100.75726,50.229181 c 0.25781,0 3.20117,-0.15039 3.20117,-0.15039 1.79572,-0.84799 2.54574,-1.8861 3.78125,-2.83594 0.0762,1.03125 0.1244,2.0625 -0.19336,3.09375 l -1.33203,4.51172 c 0,0 -5.69336,-2.12695 -5.56446,-2.42773 0.12891,-0.30078 0.10743,-2.19141 0.10743,-2.19141 z"
				id="path25656"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 99.231871,57.190121 6.944369,1.86074 0.33883,-5.01895 c -0.91541,-0.7695 -1.20317,-1.95743 -1.63281,-3.05078 -2.11059,-0.23015 -4.05052,-1.14297 -6.058599,-1.7832 z"
				id="path25546"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="M 47.110774,15.746761 C 54.023141,10.073253 60.154314,7.368282 66.274835,4.703791 78.773661,2.272482 90.656251,2.306129 102.18446,3.757318 c 13.1625,3.633667 17.49505,10.105532 21.79741,16.5871 1.4163,3.898165 2.6705,7.777258 2.72851,11.515624 v 7.175779 l -4.5332,3.65234 -21.65625,-28.3164 -35.513487,1.548662 0.0028,0.06625 z"
				id="path28618"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="M 126.58241,49.393331 V 38.789491 C 122.71089,30.637184 121.15853,21.969505 113.3352,14.695378 108.39228,8.051211 100.25795,6.663497 91.459091,6.370301 c -8.30275,-0.509497 -14.29592,2.214422 -20.370073,4.824963 -2.10644,1.509798 -4.146373,3.05285 -5.93137,4.72337 h 15.597653 l 22.188749,5.947249 16.58939,15.617118 3.03835,13.73334 z"
				id="path28784"
			/><path
				style="fill:#9d8b65;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 96.168531,75.280071 c -0.24983,2.30578 0.0317,4.08021 0.15192,6.01593 0.94126,1.78752 1.74395,3.65744 4.739819,4.2233 l 15.65988,-0.33504 c 5.60933,-2.29682 8.39671,-6.81089 10.01172,-12.2461 l -0.0859,-23.63281 c -3.474,-9.80466 -9.10432,-18.65654 -17.50365,-26.284895 -4.84665,-4.533735 -10.375619,-8.385143 -17.730729,-10.410415 -4.58494,0.05956 -9.61752,-1.395962 -12.80468,3.394533 l 10.95703,3.824218 15.769529,10.226561 8.50781,12.847658 3.78125,23.46094 -2.23438,8.76562 c 0,0 -16.242179,-0.34375 -16.585929,-0.34375 -0.34375,0 -2.63365,0.49425 -2.63365,0.49425 z"
				id="path27668"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 106.04317,67.836111 c 4.53476,-0.75413 5.28975,-2.67126 6.83628,-4.34484 0.14122,-3.2004 -0.43248,-6.40079 -1.00265,-9.60119 -1.01768,-3.30167 -2.4772,-6.60335 -4.22331,-9.90502 -2.25675,-3.87596 -7.15826,-10.01507 -9.819819,-13.648138 l 7.387879,-0.973536 9.63283,14.712834 1.57994,18.83776 -7.26165,6.35015 z"
				id="path27836"
			/><path
				style="fill:#487408;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 96.567801,70.746761 -0.64453,2.10547 0.17188,2.79297 c 1.40068,1.78548 2.97606,3.33075 5.285149,3.86718 l 10.8711,0.34375 c 6.90178,-1.22001 7.13472,-5.27198 8.3789,-8.89453 0.5421,-5.37109 0.0765,-10.74219 0.043,-16.11328 -0.77096,-4.14379 -1.076,-8.30784 -3.60937,-12.375 -3.21106,-5.5989 -6.50724,-11.155234 -11.51563,-15.855466 C 99.117641,20.94352 91.797031,16.023374 78.692831,16.004574 l 19.37891,14.652341 2.277339,0.08594 c 4.27817,5.976396 8.24865,12.014326 11.38672,18.218746 1.18298,2.49219 1.80833,4.98438 2.01953,7.47657 l 0.34375,7.39062 c -1.40797,1.60654 -2.82663,3.20714 -5.24219,4.25391 l -6.35937,1.46093 -1.80469,-0.55859 z"
				id="path25930"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 117.19391,42.602611 v -5.72729 h -6.10708 v 2.62817 h 3.44853 v 3.15989 z"
				id="path25986"
			/><rect
				style="fill:#98271f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect26040"
				width="2.6533203"
				height="3.0830078"
				x="114.55022"
				y="39.529964"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 99.206881,27.653932 v -5.72729 h -6.10708 v 2.62817 h 3.44853 v 3.15989 z"
				id="path26882"
			/><rect
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect26884"
				width="2.6533203"
				height="3.0830078"
				x="96.563194"
				y="24.581287"
			/><path
				style="fill:#a83e35;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 107.65349,33.669861 v -5.727287 h -6.10708 v 2.62817 h 3.44853 v 3.159887 z"
				id="path26150"
			/><rect
				style="fill:#98271f;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				id="rect26152"
				width="2.6533203"
				height="3.0830078"
				x="105.0098"
				y="30.597218"
			/><path
				style="fill:#3b560b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 106.53655,68.125671 c -2.95914,-2.0497 -4.79819,-4.39809 -6.960929,-6.66016 l 0.722189,-0.39499 c 1.70012,2.24536 3.68486,4.9225 6.88327,6.66843 z"
				id="path49236"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 108.91441,67.274011 v 2.82567 l -7.65664,0.62286 0.0911,-3.29661 z"
				id="path25100"
			/><path
				style="fill:#8b140d;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:3;stroke-opacity:1;paint-order:normal"
				d="m 96.095151,63.442071 4.413189,-2.05882 -1.792099,-2.53883 -4.10352,1.84765 z"
				id="path23460"
			/></g
		></svg
	>
</div>
