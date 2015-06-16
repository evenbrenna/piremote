"use strict";

$(".list-group-item").on("click", function() {
    var item = $(this);

    if (item.hasClass('playing')) {
        $.get('/stop', function(data) {
            item.removeClass('playing');
        });
    } else {
        $.get("/play/" + item.data('filename'), function(data) {
            $('.playing').removeClass('playing');
            item.addClass('playing');
        });
    }
});
