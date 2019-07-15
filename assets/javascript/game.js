$(document).ready(function() {
  //   Calculate 'Number to Reach' and 4 Crystal Values
  var number_to_reach = Math.floor(Math.random() * 101) + 19;
  var crystal_1 = Math.floor(Math.random() * 12) + 1;
  var crystal_2 = Math.floor(Math.random() * 12) + 1;
  var crystal_3 = Math.floor(Math.random() * 12) + 1;
  var crystal_4 = Math.floor(Math.random() * 12) + 1;

  // Set score to 0
  var score = 0;

  // Set wins/losses to 0
  var wins = 0;
  var losses = 0;

  // Append values to 'number to reach' and 'score'
  $("#number_to_reach").text("Number to Reach: " + number_to_reach);
  $("#score").text("Your total score is: " + score);

  // Add 'crystal values' to HTML elements
  $("#crystal_1").value = crystal_1;
  $("#crystal_2").value = crystal_2;
  $("#crystal_3").value = crystal_3;
  $("#crystal_4").value = crystal_4;

  // Append wins/losses
  $("#wins").text("Wins: " + wins);
  $("#losses").text("Loses: " + losses);

  function reset_game() {
    //   Calculate 'Number to Reach' and 4 Crystal Values
    number_to_reach = Math.floor(Math.random() * 101) + 19;
    crystal_1 = Math.floor(Math.random() * 12) + 1;
    crystal_2 = Math.floor(Math.random() * 12) + 1;
    crystal_3 = Math.floor(Math.random() * 12) + 1;
    crystal_4 = Math.floor(Math.random() * 12) + 1;
    score = 0;

    // Append values to 'number to reach' and 'score'
    $("#number_to_reach").text("Number to Reach: " + number_to_reach);
    $("#score").text("Your total score is: " + score);
  }

  $("#crystal_1").on("click", function() {
    score += crystal_1;
    $("#score").text("Your total score is: " + score);
    if (score === number_to_reach) {
      alert("You win!!");
      wins++;
      $("#wins").text("Wins: " + wins);
      reset_game();
    } else if (score > number_to_reach) {
      alert("You Lose :(");
      losses++;
      $("#losses").text("Loses: " + losses);
      reset_game();
    }
  });

  $("#crystal_2").on("click", function() {
    score += crystal_2;
    $("#score").text("Your total score is: " + score);
    if (score === number_to_reach) {
      alert("You win!!");
      wins++;
      $("#wins").text("Wins: " + wins);
      reset_game();
    } else if (score > number_to_reach) {
      alert("You Lose :(");
      losses++;
      $("#losses").text("Loses: " + losses);
      reset_game();
    }
  });
  $("#crystal_3").on("click", function() {
    score += crystal_3;
    $("#score").text("Your total score is: " + score);
    if (score === number_to_reach) {
      alert("You win!!");
      wins++;
      $("#wins").text("Wins: " + wins);
      reset_game();
    } else if (score > number_to_reach) {
      alert("You Lose :(");
      losses++;
      $("#losses").text("Loses: " + losses);
      reset_game();
    }
  });
  $("#crystal_4").on("click", function() {
    score += crystal_4;
    $("#score").text("Your total score is: " + score);
    if (score === number_to_reach) {
      wins++;
      $("#wins").text("Wins: " + wins);
      reset_game();
      alert("You win!!");
    } else if (score > number_to_reach) {
      alert("You Lose :(");
      losses++;
      $("#losses").text("Loses: " + losses);
      reset_game();
    }
  });
});
