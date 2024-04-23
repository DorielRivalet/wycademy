for %i in (input\*.png) do ffmpeg -i "%i" "./output/%~ni.webp"
