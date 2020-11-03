var timeDisplay = $(".timeDisplay");

setInterval(function(){
    var time = moment();
    timeDisplay.text(time.format("dddd, MMMM do"));
}, 1000);

