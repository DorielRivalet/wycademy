#! /usr/local/bin/bash

# BSD 3-Clause License

# Copyright (c) 2022, Rodney Johnson
# All rights reserved.

# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are met:

# 1. Redistributions of source code must retain the above copyright notice, this
#    list of conditions and the following disclaimer.

# 2. Redistributions in binary form must reproduce the above copyright notice,
#    this list of conditions and the following disclaimer in the documentation
#    and/or other materials provided with the distribution.

# 3. Neither the name of the copyright holder nor the names of its
#    contributors may be used to endorse or promote products derived from
#    this software without specific prior written permission.

# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
# AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
# DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
# SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
# CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
# OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

if [ $# -eq 0 ]
	then
		echo "Usage: "$0" input_favicon.svg"
		exit 1;
fi

SVG_SOURCE="$(echo $1)"
OUTPUT_DIR="$(echo `pwd`)"/output

# create the output directory and don't output error if it already exists
mkdir ${OUTPUT_DIR} 2> /dev/null

# generate optimized SVG
scour ${SVG_SOURCE} "${OUTPUT_DIR}"/icon.svg --enable-viewboxing --enable-id-stripping   --enable-comment-stripping --shorten-ids --indent=none

# generate PNGs
inkscape -h 32 ${SVG_SOURCE} --export-filename "${OUTPUT_DIR}""/favicon_unoptimized.png"
inkscape -h 180 ${SVG_SOURCE} --export-filename "${OUTPUT_DIR}""/apple-touch-icon_unoptimized.png"
inkscape -h 192 ${SVG_SOURCE} --export-filename "${OUTPUT_DIR}""/icon-192_unoptimized.png"
inkscape -h 512 ${SVG_SOURCE} --export-filename "${OUTPUT_DIR}""/icon-512_unoptimized.png"

# optimize PNGs
optipng -o7 -out "${OUTPUT_DIR}"/favicon.ico "${OUTPUT_DIR}""/favicon_unoptimized.png"
optipng -o7 -out "${OUTPUT_DIR}""/apple-touch-icon.png" "${OUTPUT_DIR}""/apple-touch-icon_unoptimized.png"
optipng -o7 -out "${OUTPUT_DIR}""/icon-192.png" "${OUTPUT_DIR}""/icon-192_unoptimized.png"
optipng -o7 -out "${OUTPUT_DIR}""/icon-512.png" "${OUTPUT_DIR}""/icon-512_unoptimized.png"

# clean up temporary files
rm "${OUTPUT_DIR}""/favicon_unoptimized.png"
rm  "${OUTPUT_DIR}""/apple-touch-icon_unoptimized.png"
rm "${OUTPUT_DIR}""/icon-192_unoptimized.png"
rm "${OUTPUT_DIR}""/icon-512_unoptimized.png"
