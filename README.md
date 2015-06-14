# PiRemote

Playing around with node.js and Raspberry Pi (raspbian).

Serves a list of clickable filenames representing video files in a folder
on the raspberry pi (see `config.js`). Clicking a filename launches omxplayer
and plays back the video on the pi.

Clicking again will stop playback. Clicking another filename will stop the
vide currently playing and play the one that was clicked.
