let rl = require('readline-sync');

//Intro

console.log("Welcome to Card Domination! Are you ready to play?");

begin = rl.question(`(Y)es | (N)o: `).toLowerCase()

if (begin === 'y' || begin === 'yes') {
	//Ask the user to input her choice
	userDealer = rl.question('Press enter please dear!');

	let deck = [];
	let createCard = function(suit, value) {
		return {suit: suit, value: value};
	}

	// console.log(createCard('hearts', 5));

	let suits = ['hearts', 'clubs', 'spades', 'diamonds'];
	// I just sent to deck the values for the whole deck below
	suits.forEach(function(suit){
		for (let i = 1; i < 14; i++) {
			let card = createCard(suit, i);
		  deck.push(card);
		}
	})

	let scoreComputer = 0;
	let scoreUser = 0;
	let numOfRounds = deck.length/2;
	let computerCard;
	let userCard;
	// let deck = 52;
	let userHand = 0;
	let computerHand = 0;

	for (let i = 0; i < numOfRounds; i++) {
	  if (deck.length < 2) {
			computerCard = deck[0];
			userCard = deck[1];
			deck.splice(0,2);

	  } else {
			let computerNum	= Math.floor(Math.random()*deck.length)
			computerCard = deck[computerNum];
			deck.splice(computerNum, 1);

			let userNum = Math.floor(Math.random()*deck.length)
			userCard = deck[userNum];
			deck.splice(userNum, 1);

	  }
		console.log("Computer: " + computerCard.value);
		console.log("User: " + 		userCard.value);

		// check user card value vs computer card value
		// add score to person with higher card value

		function score(){
			if(computerCard.value > userCard.value){
				console.log('computerCard wins');
				computerHand += computerCard;
			} else{
				console.log('userCard is winner')
				userHand += userCard;
			}
		}
	}

	// function winnerTakesAll(userHand, computerHand){
	// 	if (userHand > computerHand) {
	// console.log('You Win!');
	//
	// } else if(computerHand > userHand){
	// 	console.log('Computer wins!')
	// }else if  (computerHand === userHand) {
	// console.log('Its a tie! Play again!');
	//     }
	//   }

	return score();

	// console.log(deck);
	// console.log(deck.length);
} else {
	console.log('Thanks you suck!');
}
