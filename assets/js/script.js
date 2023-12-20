// Shows Day, Date, and Time
// $("#currentDay") is jQuery. It is equivalent to saying document.getElementbyID("currentDay").
// $("#currentDay").text(moment().format('LLLL'));
// format('L') gives MM/DD/YYYY. format('LL") gives [Month] [Day], [Year].
// format('LLL') gives [Month] [Day], [Year] [Time]. format('LLLL') gives [Monday/.../Sunday], [Month] [Day], [Year] [Time].
//.text() change its content.

var currentHourSlot = dayjs().format('H');
var currentDayEl = $('#currentDay');

function displayTime() {
    var currentLocalTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
    currentDayEl.text(currentLocalTime);
  }


function colourHourlyChange() {
    $('.time-block').each(function() {
        // parseInt function converts a string value to an integer.
        var timeHourSlot = parseInt($(this).attr("id"));
        console.log(timeHourSlot);

        if (currentHourSlot < timeHourSlot) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

        else if (currentHourSlot > timeHourSlot) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }

        else {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }

    });
    
}

displayTime();
setInterval(displayTime, 1000);
