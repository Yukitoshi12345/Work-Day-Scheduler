// Shows Day, Date, and Time
// $("#currentDay") is jQuery. It is equivalent to saying document.getElementbyID("currentDay").
$("#currentDay").text(moment().format('LLLL'));
// format('L') gives MM/DD/YYYY. format('LL") gives [Month] [Day], [Year].
// format('LLL') gives [Month] [Day], [Year] [Time]. format('LLLL') gives [Monday/.../Sunday], [Month] [Day], [Year] [Time].
//.text() change its content.





// $(function () {

// });


