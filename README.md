# PiRemote

Playing around with node.js and Raspberry Pi (raspbian).

Serves a list of clickable filenames representing video files in a folder
on the raspberry pi (see `config.js`).

Clicking a filename launches [omxplayer](http://elinux.org/Omxplayer) and plays
back the video on the pi.

Click again to stop. Clicking another filename while playing will stop
current playback and start the clicked title.

Also, a touch of animation courtesy of [dynamics.js](http://dynamicsjs.com).
