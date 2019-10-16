//globle variables
var wins = 0;
var losses = 0;
//players currunt score
var scoreUpdate = 0;
//selects a random number from 19 t0 120
var total = Math.floor((Math.random()* 100) + 19);
//assigns random value to crystals from 1-12
var green = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var red = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);


//updates scoreUpdate in html
var updatescoreUpdate = function (){
	$('.scoreUpdate').empty();
	$('.scoreUpdate').append(scoreUpdate);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}
//restart function
var restart = function(){
	scoreUpdate = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	green = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    red = Math.floor((Math.random()* 12) + 1);
    purple = Math.floor((Math.random()* 12) + 1);
    //alert('restart');
    updatescoreUpdate();
}
var logic = function (){
	if (scoreUpdate == total) {
		wins = wins + 1;
		
		
		restart();
	}else if(scoreUpdate > total){
		losses = losses + 1;
		
		
		restart();
	}else{
		updatescoreUpdate();
	}
}
$('.total').append(total);

$('.scoreUpdate').append(scoreUpdate);
//function

$(document).ready(function(){
	$('#green').click(function(){
		scoreUpdate = scoreUpdate + green;
		logic();
	})
	$('#blue').click(function(){
		scoreUpdate = scoreUpdate + blue;
		logic();
	})
	$('#red').click(function(){
		scoreUpdate = scoreUpdate + red;
		logic();
	})
	$('#purple').click(function(){
		scoreUpdate = scoreUpdate + purple;
		logic();
	})
});