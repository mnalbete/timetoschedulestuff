// jumbo tron date

var timeDisplay = $(".timeDisplay");

setInterval(function(){
    var time = moment();
    timeDisplay.text(time.format("dddd, MMMM Do"));
}, 1000);

// allow the text in the text area to connect to local storage





// when you press the save button it will save the text in local storage

// color changes when the time has passed 

// color change when the time is current

// color change when the time hasnt happend 
