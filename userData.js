// UserData, this is for JavaScript practice. - 11.3.2023
// very long code lmfao

// array where the data is stored.
let userData = [];

// user inputs fot the array
let nameEnterance = prompt('Insert your name:');
let ageEnterance = prompt('Insert your age:');
let heightEnterance = prompt('Insert your height (in cm):');

userData.push(nameEnterance, ageEnterance, heightEnterance)

// asks the user what he wants to return
let question = prompt('What do you want to be returned? Type "all" for everything, "name", "age", or "height".')

// pointless function for it to return the users data
function getUserData(dataType) {
    switch (dataType) {
        case 'all':
            return userData;
        case 'name':
            return userData[0];
        case 'age':
            return userData[1];
        case 'height':
            return userData[2];
        default:
            return 'Invalid choice';
    }
}

// calls the function
let dataLeaks = getUserData(question);

// if and else if statements that console.log the result what the user chose to get back
if (question === 'Invalid choise') {
    console.log('Invalid choice. Please select: "all", "name", "age", or "height".');
}
else if(question === 'all') {
    console.log('Your name:'+userData[0], 'Your age:'+userData[1], 'Your height:'+userData[2]);
}
else if (question === 'name') {
    console.log('Your name:'+userData[0]);
}
else if (question === 'age') {
    console.log('Your age:'+userData[1]);
}
else if (question === 'height') {
    console.log('Your height:'+userData[2]);
}


