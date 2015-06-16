"use strict";

// ====================================
// Show/hide the list of filenames
// ====================================

var videosVisible = true;
var videoList = document.querySelector('#files')
var fileNames = document.querySelectorAll('.list-group-item')

$('#showVideos').on('click', function() {
    if (videosVisible) {
        hideList(videoList);
        videosVisible = false;
        $(this).html('Show');
    } else {
        showList(videoList, fileNames);
        videosVisible = true;
        $(this).html('Hide');
    }
})


// ====================================
// Playback control
// ====================================

$('.list-group-item').on('click', function() {
    var item = $(this);

    if (item.hasClass('playing')) {
        $.get('/stop', function(data) {
            item.removeClass('playing');
        });
    } else {
        $.get('/play/' + item.data('filename'), function(data) {
            $('.playing').removeClass('playing');
            item.addClass('playing');
        });
    }
});
