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


// Old code
NumberArray = [];

numbers = prompt('Write here a first number:')
if (numbers != '')
NumberArray.push(numbers)

numbers2 = prompt('Write here a second number:')
if (numbers2 != '')
NumberArray.push(numbers2)

numbers3 = prompt('Write here a third number:')
if (numbers3 != '')
NumberArray.push(numbers3)

console.log('You chose', NumberArray)

calculated = Number(arvud) + Number(arvud2) + Number(arvud3)
console.log('Results:', calculated)







