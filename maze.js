function init (){
	var walls = document.getElementById('maze').querySelectorAll('.boundary')
	var s = document.getElementById('start')
	var e = document.getElementById('end');
	var update = document.getElementById("status");
	var maze = document.getElementById('maze');



	// Function You Lose is used when the game starts but the player exits the maze

	function youLose(){
		update.innerHTML = "CHEATER; YOU LOSE";
		for (let i = 0; i<walls.length; i++){
			walls[i].style.background = 'red';
		}

	}





	// The following for loop adds an event listener to all walls.

		for (let i = 0; i<walls.length; i++){
			walls[i].addEventListener('mouseover', function(event){
				update.innerHTML = "Red Walls; Start Over";
				var x = document.getElementById('maze').querySelectorAll('.boundary');
				for(let i = 0; i<=x.length; i++){
					x[i].style.background = 'red';
				}


			},false);


	// Adding event listeners to the Start Button

		s.addEventListener('mouseover', function(event){
					
			maze.addEventListener('mouseleave',function(event){
				if(update.innerHTML == "You Win"){
					update.innerHTML == "Want to Play Again?";
				} else if (update.innerHTML == "You Lose") {
					update.innerHTML == "Want to Play Again?";
				} else {
					youLose();
				}
				
			},false);
					
		},false);

		s.addEventListener('click', function(event){
			update.innerHTML = "Move your mouse over the 'S' to begin.";
			for(let m = 0; m <walls.length; m++){
				walls[m].style.background = "";
			}

		});




	// Adding Event listeners to the End Button

		e.addEventListener('mouseover', function(event){
			if(walls[0].style.background.length > 1){
				update.innerHTML = "You Lose";
			} else {
				update.innerHTML = "You Win";
			}
						
		// Checking if the walls are Red if the mouse is over the END BOX
		}, false);

				// End of Event Listener for END BOX in MAZE
		}

			


		}



window.onload=init;

