$(document).ready(function() {
//i want todays date to be displayed
$("#todaysDate").text(dayjs().format("dddd, MMMM D, YYYY"));

//create time blocks...Average work day is 
for (let i = 9; i <= 17; i++) {
let timeblock = $("<div>").addClass("timeblock");
let textarea = $("<textarea>").attr("id", "hour-" + i);
let saveButton = $("<button>").text("Save").attr("data-hour", i);

timeblock.append('<p>${i}:00 - ${i + 1}:00</p>');
timeblock.append(textarea);
timeblock.append(saveButton);

if (i < dayjs().hour()) {
    timeblock.addClass("past")
} else if (i === dayjs().hour ()) {
  timeblock.addClass("present");
} else {
  timeblock.addClass("future");
}

//Load saved events from local storage
let savedEvent = localStorage.getItem("event-hour" + i);
if (savedEvent) {
  textarea.val(savedEvent);
}
//Save event to local storage on button click
saveButton.click(function() {
let eventText = textarea.val();
localStorage.setItem("event-hour-" + i, eventText);
});

//Append the timeblock to the container
$(".container").append(timeblock);
}
});