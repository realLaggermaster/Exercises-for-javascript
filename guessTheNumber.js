// guessTheNumber 09.10.2023

computernumber = Math.floor(Math.random() * 10)+1;

input = prompt("Guess the number between 1-10.") 
console.log('You chose:', input)

if (input == computernumber) {
    console.log('Yay! You guessed the right number.')
}
else {
    console.log('Sadly you didnt guess the correct number. The right one was:', computernumber)
}
