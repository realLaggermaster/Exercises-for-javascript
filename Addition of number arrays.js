// New code
let NumberArray = [];

for (let i = 1; i < 4; i++) {
    numbers = prompt('Write a number here');
    if (numbers !== '') {
        NumberArray.push(numbers)
    }
}

console.log('You chose: '+ NumberArray);

calculation = Number(NumberArray[0]) + Number(NumberArray[1]) + Number(NumberArray[2]);
console.log('Result: '+ calculation);
