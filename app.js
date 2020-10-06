$(document).ready(function() {
    // Capture UI Elements
    let currentDay = $("#currentDay");

    // State Variables
    let currentHour = parseInt(moment().format('k'));
    
    setInterval(timePrint, 1000);  // Updates the date and time data every second
    loadEvents();
    updateUI();

    setInterval(function(){
        // This function is checking to see if the hour on the clock has changed. If it has, then it will call the updateUI function to 
        // change the color of the hourly events accordingly.
        // ************ This is currently not working ****************
        let checkHour = parseInt(moment().format('k'));
        
        if(checkHour > currentHour){
            currentHour = checkHour;
            updateUI();
            
        }

    }, 1000);    

    // Event Handlers
    $(".saveBtn").on("click", saveEvent);

 });


// Uses moment.js to print the current date and time
function timePrint(){    
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}

function saveEvent(){
    let currentHour = parseInt(moment().format('k'));  // Locally scoped currentHour variable
    let event = $("#" + $(this).attr("data-time") + "-event");
    let storageKey = $(this).attr("data-time");

    // Check to make sure the hour isn't past
    if(parseInt(storageKey) >= currentHour) {        
        localStorage.setItem(storageKey, event.val());    
    }else {
        alert("This hour has already passed!");
        event.val("");
    }    
    

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