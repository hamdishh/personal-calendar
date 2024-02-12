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

    $(".time-block")
.each(function () {
    var target = $(this);
    var id = select.attr("id");
    var timeId = id.split("m");
    var currentBlock = parseInt(timeId[1]);
    var nowFormat = now + "00";
})
}

})


