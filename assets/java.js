// jumbo tron data

var timeDisplay = $(".timeDisplay");
// set function for the time display
setInterval(function () {
    var time = moment();
    timeDisplay.text(time.format("dddd, MMMM Do"));
}, 1000);

// textarea section 

// set var

// set function
var buttonTracker = document.querySelector(".btn-track");
buttonTracker.addEventListener("click", function(event){
    if(event.target.classList[0] === "btn"){
    console.log(event.target.parentElement.previousElementSibling.children[0].value)   
    
}


});
// 0900 time buttons

function mySave9() {
    var myContent9 = document.getElementById("myTextarea9").value;
    localStorage.setItem("myContent9", myContent9);

}

myLoad();

function myLoad() {
    var myContent9 = localStorage.getItem("myContent9");
    document.getElementById("myTextarea9").value = myContent9;
    var myContent10 = localStorage.getItem("myContent10");
    document.getElementById("myTextarea10").value = myContent10;
    var myContent11 = localStorage.getItem("myContent11");
    document.getElementById("myTextarea11").value = myContent11;
    var myContent12 = localStorage.getItem("myContent12");
    document.getElementById("myTextarea12").value = myContent12;
    var myContent13 = localStorage.getItem("myContent13");
    document.getElementById("myTextarea13").value = myContent13;
    var myContent14 = localStorage.getItem("myContent14");
    document.getElementById("myTextarea14").value = myContent14;
    var myContent15 = localStorage.getItem("myContent15");
    document.getElementById("myTextarea15").value = myContent15;
    var myContent16 = localStorage.getItem("myContent16");
    document.getElementById("myTextarea16").value = myContent16;
    var myContent17 = localStorage.getItem("myContent17");
    document.getElementById("myTextarea17").value = myContent17;
}
// 1000 time buttons

function mySave10() {
    var myContent10 = document.getElementById("myTextarea10").value;
    localStorage.setItem("myContent10", myContent10);

}



// 1100 time button 

function mySave11() {
    var myContent11 = document.getElementById("myTextarea11").value;
    localStorage.setItem("myContent11", myContent11);
}


// 1200 time button

function mySave12() {
    var myContent12 = document.getElementById("myTextarea12").value;
    localStorage.setItem("myContent12", myContent12);
}


// 1300 time button

function mySave13() {
    var myContent13 = document.getElementById("myTextarea13").value;
    localStorage.setItem("myContent13", myContent13);
}


// 1400 time button 

function mySave14() {
    var myContent14 = document.getElementById("myTextarea14").value;
    localStorage.setItem("myContent14", myContent14);
}



// 1500 time function

function mySave15() {
    var myContent15 = document.getElementById("myTextarea15").value;
    localStorage.setItem("myContent15", myContent15);
}



// 1600 time fucntion

function mySave16() {
    var myContent16 = document.getElementById("myTextarea16").value;
    localStorage.setItem("myContent16", myContent16);
}


// 1700 time button

function mySave17() {
    var myContent17 = document.getElementById("myTextarea17").value;
    localStorage.setItem("myContent17", myContent17);
}









var present = new Date().getHours();

for (i = 9; i < 18; i ++ ){
if (present > i) {
    $("#myTextarea"+ i).addClass("past");
}

else if (present == i) {
    $("#myTextarea" + i).addClass("present");
}

else if (present < i) {
    $("#myTextarea" + i).addClass("future");
} } ;
