// 24 Hour clock variables
const workStart = 9;
const workEnd = 17;

$(document).ready(function() {
    // Capture UI Elements
    let currentDay = $("#currentDay");

    // Updates the date and time data every second
    setInterval(timePrint, 1000);  
   
    //console.log(currentDay.textContent);
    loadEvents();
    updateUI();   

    // Event Handlers
    $(".saveBtn").on("click", saveEvent);
   
    

    // Save event data
    function saveEvent(){
        let hour = parseInt(moment().format('k'));
        let event = $("#" + $(this).attr("data-time") + "-event"); // Captures the textarea element corresponding to the hour of the save button
        let storageKey = $(this).attr("data-time");
        let content = event.val();

        // Check to make sure the hour isn't past
        if((parseInt(storageKey) >= hour) && content != "") {        
            localStorage.setItem(storageKey, event.val());    
        }else if (content === ""){
            alert("There is no event data!");
        }else {
            alert("Hour has already passed!");
            event.val("");
        }  
    }

    function updateUI(){   
        for(let i = workStart; i <= workEnd; i++){
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
        for(let i = workStart; i <= workEnd; i++){
            let event = $("#" + i + "-event");
            event.val(localStorage.getItem(i));
        }
    }   
    
    
    function timePrint() {
        currentDay.text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }

 });



