// Shows Day, Date, and Time
// $("#currentDay") is jQuery. It is equivalent to saying document.getElementbyID("currentDay").
// This is how to use it using moment js:
// $("#currentDay").text(moment().format('LLLL'));
// format('L') gives MM/DD/YYYY. format('LL") gives [Month] [Day], [Year].
// format('LLL') gives [Month] [Day], [Year] [Time]. format('LLLL') gives [Monday/.../Sunday], [Month] [Day], [Year] [Time].
//.text() change its content.

// Declaring Variables
var currentHourSlot = dayjs().format('H');
var currentDayEl = $('#currentDay');

// This function is to get the real time
function displayTime() {
    var currentLocalTime = dayjs().format('dddd, MMM DD, YYYY hh:mm:ss a');
    currentDayEl.text(currentLocalTime);
  }

// This function is to show the colour blocks dependent on if it is past/present/future hour block
function colourHourlyChange() {
    $('.time-block').each(function() {
        // parseInt function converts a string value to an integer.
        var timeHourSlot = parseInt($(this).attr("id"));
        console.log(timeHourSlot);

        if (currentHourSlot < timeHourSlot) {
            $(this).addClass("future");
            $(this).removeClass("past present");
        }

        else if (currentHourSlot > timeHourSlot) {
            $(this).addClass("past");
            $(this).removeClass("present future");
        }

        // else currentHourSlot === timeHourSlot:
        else {
            $(this).addClass("present");
            $(this).removeClass("past future");
        }

    });
}

// Adding a listener for click events on the save button.
function saveButton() {
    // Find surrounding description elements using jQuery selectors, i.e the value i.e. text, and the key, i.e. time.
    $(".saveBtn").on("click", function() {
        var value = $(this).siblings(".description").val();
        var key = $(this).parent().attr("id");

        // Save the text in the local storage
        localStorage.setItem(key, value);
    })
}


// Retrieve existing items from local storage, if available, i.e. this is how the save button works, where the text won't disappear if refreshed.
function getDescriptions() {
    for (let i = 9; i <= 17; i++) {
      $(`#${i} .description`).val(localStorage.getItem(i.toString()));
    }
  }

// Run the functions
displayTime();
colourHourlyChange();
saveButton();
getDescriptions();
setInterval(displayTime, 1000);
