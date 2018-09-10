var settings = document.getElementById("settings");
var searchForm = document.getElementById("searchForm");
var searchInp = document.getElementById("searchInp");


var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  timeq.innerHTML =
  h + " : " + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

document.onload = startTime();

searchForm.onsubmit = function(){
  var x = searchInp.value;

  window.open("https://www.google.co.uk/search?q=" + x);
}
