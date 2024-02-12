//display the present date on the banner
var dayBanner = $("#currentDay");
function showTime() {
    var currentTime = dayjs().format("dddd, D MMM YYYY");
    dayBanner.text(currentTime);
}
showTime(); //calling function after closing curly braceso it can be rendered
  
//targetting functionality of the save btn element
$(document).ready(function () {
$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text); //stored the time as the key and the text of the event as the value so i could easily retrieve the text with the event for a specific time slot.
});

//Getting current time
function nowTime () {
    var now = dayjs().hour();

    $(".time-block").each(function () { //targetting all html elements with time-block class
    var target = $(this); //$(this), refers to the current time-block element being processed and wraps the element in a jQuery object and assigns it to the variable 'select'
    var id = select.attr("id"); //line retrieves the 'id' attribute of the current .time-block element using jQuery's '.attr() method and assigns it to the 'id' variabkle
    var timeId = id.split("m"); //uses split function to split the 'id' string at the character "m" and stores the resulting array in the variable timeId. This is because the id attr has a format of am0800 or pm1200 that need to be differentiated/easier to tell apart afternoon and morning times
    var currentBlock = parseInt(timeId[1]);// line will extract the second index of id array (part after "m" character) and will convert it into an integer as this part will represent the hour, e.g 0800, 0900 etc.
    var nowFormat = now + "00"; //concatenates variable "now" with the string"00" 

    if (currentBlock == nowFormat) {
        $(this).addClass("past");
        $(this).addClass("present");
        $(this).addClass("future");
    } else if (currentBlock > nowFormat) {
        $(this).addClass("future");
        $(this).addClass("past");
        $(this).addClass("present");
    } else {
        $(this).addClass("present");
        $(this).addClass("future");
        $(this).addClass("past");
    }

});
}

//invoke the nowTime function to execute the color-coding logic
nowTime();

});


