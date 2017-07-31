var figure = $(".video").click(
function (e) {
    var vid = $('video', this).get(0);
    var eventAction;
    if(vid.paused) {
        vid.play();
        eventAction = "play";
    } else {
        vid.pause();
        eventAction = "pause";
    }
    ga('send', 'event', 'Videos', eventAction, this.id);
}
);