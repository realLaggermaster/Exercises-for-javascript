// Account script in JS - November 8th 2023 (janky ahh code xd)
// Made by: Laggermaster

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
    registerusername = prompt('Write your username:');
    registerpassword = prompt('Think of a password:');

    // User object of username and password
    const user = {
      username: registerusername,
      password: registerpassword,
    };
    users.push(user); // Adds the user object to the array
    window.alert('Great, you are registered!');
    } 

    else if (entrance === 'login') {
    loginusername = prompt('Write your username:');

    // Find the user with the given username
    const foundUser = users.find((user) => user.username === loginusername);

    if (foundUser) {
      loginpassword = prompt('Write here your password:');

      if (loginpassword === foundUser.password) {
        window.alert('You have successfully logged in to your account!');
        for ( ; ; ) {
            accesspopup = prompt('What do you want to browse ' + foundUser.username + '? '+'(wallet) (password) (logout)');
            if (accesspopup === 'wallet') {
                window.alert('Your balance: 1 000 000 000€');
            }
            else if (accesspopup === 'password') {
                window.alert('Hi '+foundUser.username+'! '+'Your password is: '+foundUser.password);
            }
            else if (accesspopup === 'logout') {
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
