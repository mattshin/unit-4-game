var random = Math.floor(Math.random()*102)+19;
var userTotal = 0; 
var wins = 0; 
var losses = 0; 
var gems = $("#gems").children();
var gemValues = [];


var blue= Math.floor(Math.random()*12+1)
var red= Math.floor(Math.random()*12+1)
var green= Math.floor(Math.random()*12+1)
var yellow= Math.floor(Math.random()*12+1)


$.map(gems, function(){
    gemValues.push(Math.floor(Math.random()*12)+1);
});
$("wins").html(wins); 
$("losses").html(losses);
// This will hold all of the user's score and total points. Now grab it in HTML with jQuery
// Added the random number var so user can guess // 
function reset(){
    random = Math.floor(Math.random*102)+19
    userTotal = 0; 
    console.log(random);
    $("#randomNumber").html(random);
    $("#finalScore").html(userTotal);
    $.map(gems, function(){
        gemValues.push(Math.floor(Math.random()*12)+1);
    });
}
// Above I added reset function to start,reset game, and make the random numbers guess while including jQuery to 
// display random number and final score onto display 
function winner(){
    wins++;
    $("wins").html(wins); 
    reset();
}
function losses() {
    losses++;
    $("losses").html(losses);
    reset();
}

// Functions here is if user loses or wins while incrementing either one.
// Jquery will follow after to add a tally and reset the whole game.
// Below add click buttons for crystals, make sure to add up each time you click
function calculateScore() {
    if (userTotal === random){
        winner();
    } 
    else if (userTotal > random){
        losses();
    }


}
reset();
// Below create win losses with if else to see if their score matches up or not with randomNumber// 
$('#blue').on ('click', function(){
    userTotal = userTotal + blue;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal); 
        if (userTotal === random){
          winner();
        }
        else if ( userTotal > random){
          losses();
        }   
  });

  $("#green").on ('click', function(){
    userTotal = userTotal + green;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal); 
        if (userTotal === random){
          winner();
        }
        else if ( userTotal > random){
          loser();
        } 
  });

  $("#red").on ('click', function(){
    userTotal = userTotal + red;
    console.log("New userTotal= " + userTotal);
    $("#finalScore").text(userTotal);
          if (userTotal === random){
          winner();
        }
        else if ( userTotal > random){
          losses();
        } 
  });   

  $("#yellow").on ('click', function(){
    userTotal = userTotal + yellow;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal === random){
          yay();
        }
        else if ( userTotal > random){
          loser();
        }
  });   