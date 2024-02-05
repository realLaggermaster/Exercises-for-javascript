// Game in JavaScript (browser's console).
// Where & how to run the code? - To run the code it's best to use a browsers console. Go to google -> press F12 -> select console -> paste code.
// Project started: 4. Febuary 2024
// Project finished: 5. Febuary 2024
// Project updated: N/A

let userNames = [];

while (true) {
    welcome = prompt('Welcome to the game!\nWhat should I call you?');

    if (welcome.trim() !== '') {
        userNames.push(welcome);
        break;
    } 
    else {
        window.alert('Blank usernames are not allowed! Press (OK) to start over.');
    }
}

window.alert('Hello ' + userNames[0] + '!\nWelcome to the GAME, press (OK) to continue');
while(true) {
    gameWindow = prompt('Wrtie here what game you wish to play.\nIf you wish to see the games description write example: game.info\n \nCurrently avaiable games: guesser ; choosetolive')

    if (gameWindow == 'guesser') {
        while(true) {
            computerNumber = Math.floor(Math.random() * 10)+1;
            userGuessInput = prompt('Guess the number between 1-10. \n \n To exit the game write: exit');

            if (userGuessInput == computerNumber) {
                window.alert('Yay! You guessed the right number!');
            }
            else if (userGuessInput == 'exit') {
                break;
            }
            else if (userGuessInput !== computerNumber){
                window.alert('Sadly you didnt guess the correct number... The right one was: '+ computerNumber);
            }   
        } 
    }
    else if (gameWindow == 'guesser.info') {
        window.alert('Guess the number. \n \nIn this game you have a textbox where you try to guess the number. \nIf you guessed the number correctly you win! \n \nPress (ok) to exit.');
    }
    else if (gameWindow == 'choosetolive') {

        while(true) {
            userChooseInput = prompt('Hello '+ userNames[0]+' welcome to Choose to live... \n \nIn this game you have 2 choises, make right ones move on, make bad ones restart. \n \nTo continue write: start \nTo exit the game write: exit.');
            if (userChooseInput == 'exit') {
                window.alert('You have left the game.')
                break;
            }
            else if (userChooseInput == 'start') {
                while(true) {
                    questionOne = prompt('First question. Choose a or b. \n \nIts nighttime and you walk alone, suddently you encounter a burgalar running. \n \nYou have 2 choises \na) You do nothing \nb) you try to stop the burgalar.');
                    if (questionOne == 'a') {
                        window.alert('You chose: a. \n\nThe burgalar passed by you but the police who were chasing think you are part of the crime.');
                        questionTwo = prompt('Question two. Choose a or b. \n\nYou have 2 choises \na) you run away \nb) you try to reason with the police');
                        if (questionTwo == 'a') {
                            window.alert('You chose: a. \n\nYou successfully ran away from the police. There is another problem you are now addicted to heroine...');
                            questionThree = prompt('Last question. Choose a or b. \n\nYou have 2 choises \na) you finally start paying taxes \nb) you run away');
                            if (questionThree == 'a') {
                                window.alert(userNames[0]+ ' started finally paying taxes till death...');
                                windows.alert('Ending 1. (Return to society)');
                                break;
                            }
                            else if (questionThree == 'b') {
                                window.alert(userNames[0]+ ' just decided to runaway from everything and everyone... \nFew months later '+ userNames[0]+ ' was seen playing 1f2d because he/she is a W.');
                                window.alert('Ending 2. (W for playing 1f2d)');
                                break;
                            }
                            else if (questionThree == 'exit') {
                                break;
                            }
                            else {
                                window.alert('Please choose either a or b silly...');
                            }
                        }
                        else if (questionTwo == 'b') {
                            window.alert('You tried to reason with the police but they were to racist and beat you up... RIP '+ userNames[0]);
                        }
                        else if (questionTwo == 'exit') {
                            break;
                        }
                        else {
                            window.alert('Please choose either a or b silly...');
                        }

                    }
                    else if (questionOne == 'b') {
                        window.alert('Sorry but.. you died by trying to stop the burgalar that happend to be caring a wepon of some sort. \nBetter luck next time...');
                    }
                    else if (questionOne == 'exit') {
                        break;
                    }
                    else {
                        window.alert('Please choose either a or b silly...');
                    }
                }  
            }
            else {
                window.alert('You have to choose either: start or: exit.... :P');
            }
        }
    }
    else if (gameWindow == 'choosetolive.info') {
        window.alert('Choose to live. \n \nIn this game you have 2 choises... Make the right choise and you move on, ake a wrong choise then you restart. \n \nPress (ok) to exit.');
    }
}
