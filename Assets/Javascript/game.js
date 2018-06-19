$(document).ready(function() {


	var runningTotal = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	coins = ['Assets/Images/coin1.png','Assets/Images/coin2.png','Assets/Images/coin3.png','Assets/Images/coin4.png'];
	newCoins();
	startOver();

	function newCoins () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageCoins = $('<img>');
			imageCoins.attr('data-num', numbers[i]);
			imageCoins.attr('src', coins[i]);
			imageCoins.attr('alt', 'penny');
			imageCoins.addClass('coinImage')
			$('#coins').append(imageCoins);
		}
	}

	function startOver() {

		runningTotal = 0;
		$('#moneyTotal').text("Your Payment so Far: " +runningTotal);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var price = randomIntFromInterval(19,120);

		$('.value').text(price);


		$('.coinImage').on('click', function(){
		    runningTotal = runningTotal + parseInt($(this).data('num'));
		   
		    $('#moneyTotal').text("Your Payment so Far: " +runningTotal);

		    if (runningTotal == price){
		      $('#status').text('You won! ');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#coins').empty();
		      newCoins();
		      startOver();
		        
		    } else if ( runningTotal > price){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#coins').empty();
		        newCoins();
		        startOver();
		    }
		});
	}

});