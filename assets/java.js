var timeDisplay = $(".timeDisplay");

setInterval(function(){
    var time = moment();
    timeDisplay.text(time.format("dddd, MMMM Do"));
}, 1000);

// POST THINGS TO