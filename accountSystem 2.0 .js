// AccountSystem 2.0 (UPDATED) in JS - November 9th 2023 (janky ahh code xd)
// Made by: Laggermaster

// (BROKEN CODE)

// (You can run this code in many ways, if you don't have anything use your browser.)
// For google: f12 -> console -> paste code.  ;   For opera: CTRL + SHIFT + J -> console -> paste code.

// Array to store user objects
const users = [];

while (true) {
  entrance = prompt('Please write (login) to log in to your account or if you do not have an account, write (register). To leave write (exit)');

  // the exit
  if (entrance === 'exit') {
    break;
  }

  else if (entrance === 'register') {
    let registerusername = prompt('Write your username:');
    let registerpassword = prompt('Think of a password:');

    // User object of username and password
    const user = {
      username: registerusername,
      password: registerpassword,
    };
    users.push(user); // Adds the user object to the array
    window.alert('Great, you are registered!');
  }

  else if (entrance === 'login') {
    let loginusername = prompt('Write your username:');

    // Finds the user with the given username
    const foundUser = users.find((user) => user.username === loginusername);

    if (foundUser) {
      let loginpassword = prompt('Write here your password:');
      if (loginpassword === foundUser.password) {
        window.alert('You have successfully logged in to your account!');
        // 2nd while true loop
        while(true) { 
          let menu = prompt('What do you want to browse ' + foundUser.username + '? ' + '(wallet) (password) (game) (logout)');
          if (menu === 'wallet') {
            window.alert('Your balance: 1 000 000 000€');
          }
          else if (menu === 'password') {
            window.alert('Hi ' + foundUser.username + '! ' + 'Your password is: ' + foundUser.password);
          }
          else if (menu !== 'password', 'logout', 'wallet') {
            window.alert('Hm... You didnt select the browse options or you entered them wrong.');
          }
          else if (menu === 'game') {
            // 3rd while true loop
            while (true) {
              let computerNumber = Math.floor(Math.random() * 10) + 1;
              let input = prompt('Guess the number between 1 and 10. To exit the game write: (exit)');
              if (input === 'exit') {
                window.alert('You exited the game.');
                break;
              }
              else if (input === computerNumber) {
                window.alert('You guessed correctly!');
              }
              else {
                window.alert('Sadly you didnt guess the right number... It was: ' + computerNumber);
              }
            }
          }
          else if (menu === 'logout') {
            window.alert('You have logged off this session successfully!')
            break;
          }
        }
      }
      else {
        window.alert('Wrong password... Remember your password is CaSeSeNsItIvE');
      }
    }
  }
}
// exit window alert
window.alert('You have exited this programm successfully! Have a good day!')
