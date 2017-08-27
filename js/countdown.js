// Set the date we're counting down to
var countDownDate = new Date("Sep 6, 2017 14:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown_canvas").innerHTML = "Gros câlin dans " + days + " jours et " + hours + " heures "
  + minutes + " minutes " + seconds + " secondes ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown_canvas").innerHTML = "Gros câlin";
  }
}, 1000);



$('#countdown_checkbox').change(function() {
        if(this.checked) {
            $("#countdown_canvas").removeClass('invisiblee');
            $("#ctdwn").removeClass('invisiblee');
        }
        else{
            $("#countdown_canvas").addClass('invisiblee');
            $("#ctdwn").addClass('invisiblee');
        }
    });
