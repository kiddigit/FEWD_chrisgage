var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "Rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "Paper";
} else {
	computerChoice = "Scissors";
} console.log("Computer: " + computerChoice);


var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
        return "The result is a tie!";
        }
    
    else if(choice1 === "Rock") {
        if(choice2 === "Scissors") 
        {
            return "Rock wins";
            }
        else {
            return "Paper wins";
        }
    }
    else if(choice1 === "Paper") {
        if(choice2 === "Rock")
        {
            return "Paper wins";
        }
        else {
            return "Scissors wins";
        }
    }
      else if(choice1 === "Rock") {
        if(choice2 === "Scissors")
        {
            return "Rock wins";
        }
        else {
            return "Paper wins";
        }
      }
};
compare(userChoice, computerChoice);