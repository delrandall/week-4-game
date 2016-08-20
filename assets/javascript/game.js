$(document).ready(function() {

  // Generates a random number 
  // The random number shown at the start of the game should be between 19 - 120
  var random=Math.floor(Math.random()*101+19)

// Appends random number to the randomNumber ID 
$('#randomNumber').text(random);

// Appends the randomly generated number to the ID "randomNumber 
$('#randomNumber').append(randomNumber);

  // Each crystal should have a random hidden value between 1 - 12
  var red= Math.floor(Math.random()*11+1)
  var blue= Math.floor(Math.random()*11+1)
  var black= Math.floor(Math.random()*11+1)
  var green= Math.floor(Math.random()*11+1)

  var userTotal= 0; 
  var wins= 0;
  var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);
$('#red').text(red);
$('#blue').text(blue);
$('#black').text(black);
$('#green').text(green);

//resets the game
function reset(){
      random=Math.floor(Math.random()*101+19);
      console.log(random)
      $('#randomNumber').text(random);
      red= Math.floor(Math.random()*11+1);
      blue= Math.floor(Math.random()*11+1);
      black= Math.floor(Math.random()*11+1);
      green= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#totalNumber').text(userTotal);
      } 

//adds the wins to the userTotal
function uWin(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}

//addes the losses to the userTotal
function uLose(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}

//sets up click for jewels
  $('#red').on ('click', function(){
    userTotal = userTotal + red;
    console.log("New userTotal= " + userTotal);
    $('#totalNumber').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == random){
          uWin();
        }
        else if ( userTotal > random){
          uLose();
        }   
  })  
  $('#blue').on ('click', function(){
    userTotal = userTotal + blue;
    console.log("New userTotal= " + userTotal);
    $('#totalNumber').text(userTotal); 
        if (userTotal == random){
          uWin();
        }
        else if ( userTotal > random){
          uLose();
        } 
  })  
  $('#black').on ('click', function(){
    userTotal = userTotal + black;
    console.log("New userTotal= " + userTotal);
    $('#totalNumber').text(userTotal);

        if (userTotal == random){
          uWin();
        }
        else if ( userTotal > random){
          uLose();
        } 
  })  
  $('#green').on ('click', function(){
    userTotal = userTotal + green;
    console.log("New userTotal= " + userTotal);
    $('#totalNumber').text(userTotal); 
      
          if (userTotal == random){
          uWin();
        }
        else if (userTotal > random){
          uLose();
        }
  });   
}); 