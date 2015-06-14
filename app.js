"use strict";

var fs         = require('fs');
var express    = require('express');
var app        = express();
var cp         = require('child_process');
var psTree     = require('ps-tree');
var config     = require('./config');

// Serve client side files
app.use(express.static('public'));

// Render templates with ejs
app.set('view engine', 'ejs');

/*
 * ==============================
 * Playback control
 * ==============================
 */
var child;
var controls = {
    /*
     * Play the file with given filname.
     * If a file is currently playing it will be stopped.
     */
    play: function(filename) {
        controls.stop();
        child = cp.exec('omxplayer ' + config.videoPath + filename, function(error, stdout, stderr) {
            console.log(stdout);
            console.error(stderr);
        });
    },

    /*
     * Stops currently playing file (if any)
     */
    stop: function() {
        if (child) {
            psTree(child.pid, function (err, children) {
                cp.spawn('kill', ['-9'].concat(children.map(function(p) {
                    return p.PID;
                })));
            });
        }
    }
};

/* ==============================
 * Routes
 * ==============================
 */

// Render main view
app.get('/', function(req, res) {
    fs.readdir(config.videoPath, function(err, files) {
        if (err) { throw err; }
        res.render('pages/index', { files: files });
    });
});

// Play file
app.get("/play/:filename", function(req, res) {
    controls.play(req.params.filename);
    res.sendStatus(200);
});

// Stop
app.get("/stop", function(req, res) {
    controls.stop();
    res.sendStatus(200);
});

/* ==============================
 * Start server
 * ==============================
 */
app.listen(80, function() {
    console.log("Listening on port 80...");
});
