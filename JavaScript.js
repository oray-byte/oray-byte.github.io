// Javascript 02/05/2021
class ChapterOne {

	problemsFunc() {
		var problems = 100;
		while (true) {
			if (problems == 1) {
				console.log("I have 1 problem and it does not involve you.");
			}
			else if (problems == 0) {
				console.log("I have no problems");
				break;
			}
			else {
				console.log("I got " + problems + " problems but you ain't one");
			}
			problems--;
		}
	}
}
class SadieisLoser {
	
	printLoser(name) {
		if (name.toLowerCase() == 'sadie' || name.toLowerCase() == 'sarah') {
			alert("You're a loser ");
		}
		else {
			alert("You're not a loser");
		}
	}
}
class ChapterTwo {
	// Chapter is about the beginnings of programming
	getRndInteger(min, max) {
		/*
		  Returns a random digit between min, inclusive, and max, exclusive
		  Math.random() returns value between 0 and 1, not including one
		  Multiply that by the range you want and add the minimum to get larger numbers
		  Then floor the result to obtain integer
		*/
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	inChecker(variable, list) {
		// Ensures variable is within certain range and checks if variable is in given array
		if (variable < 0 || variable > 6) 
		{
			alert("Please enter valid number...");
			return false;
		}
		for (var i = 0; i < list.length; i++) 
		{
			if (list[i] == variable) 
			{
				delete list[i];
				return true;
			}
			else
			{
				continue;
			}
		}
	}
	
	oneRowBattleShip() {
		// Runs the 1-D battleship game
		var hits;
		var guesses = hits = 0;
		var battleShip = this.getRndInteger(0, 5);
		battleShip = [battleShip, battleShip + 1, battleShip + 2];
		
		while (true) {
			alert(battleShip)
			var guess = prompt("Enter a number from 0-6")
			if (this.inChecker(guess, battleShip)) {
				alert("You hit the battleship");
				hits++;
				guesses++;
			} 
			else 
			{
				alert("You missed the battle ship");
				guesses++;
			}
				
			if (hits == 3) 
			{
				alert("It took you " + guesses + " guesses to sink the battleship");
				break;
			}
		}
	}
}
class ChapterThree {
	// Functions in javascript
	
	bark(name, weight) {
		if (weight > 20) {
		console.log(name + " says WOOF WOOF");
		}
		else {
			console.log(name + " says woof woof");
		}
	}
}

class WebsiteTest {

	test() {
		var rows = document.getElementsByClassName("row");
		alert(rows)
	}
}

let three = new ChapterThree();

let test = new WebsiteTest();
