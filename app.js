$(document).ready(function() {
    // Capture UI Elements
    let currentDay = $("#currentDay");
    let currentHour = parseInt(moment().format('k'));
    
    setInterval(timePrint, 1000);  // Updates the date and time data every second
    loadEvents();
    updateUI();

    setInterval(function(){
        // This function is checking to see if the hour on the clock has changed. If it has, then it will call the updateUI function to 
        // change the color of the hourly events accordingly.

        let checkHour = parseInt(moment().format('k'));
        
        if(checkHour > currentHour){
            updateUI();
            currentHour = checkHour;
        }
    }, 1000);
   
    

    
    $(".saveBtn").on("click", saveEvent);
 });


// Uses moment.js to print the current date and time
function timePrint(){    
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}

function saveEvent(){
    let storageKey = $(this).attr("data-time");    
    let event = $("#" + $(this).attr("data-time") + "-event");
    localStorage.setItem(storageKey, event.val());
    

}

function updateUI(){   
    for(let i = 9; i <= 17; i++){
        let eventBlock = $("#"+ i);
        if(parseInt(eventBlock.attr("data-time")) < parseInt(moment().format('k'))){
            eventBlock.addClass("past");
        }else if(parseInt(eventBlock.attr("data-time")) === parseInt(moment().format('k'))){
            eventBlock.addClass("present");
        }else {
            eventBlock.addClass("future");
        }
    }
}

function loadEvents(){
    for(let i = 9; i <= 17; i++){
        let event = $("#" + i + "-event");
        event.val(localStorage.getItem(i));
    }
}