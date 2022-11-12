/* 
Napishete funkciq, koqto poluchava: ime, familiq, vuzrast i grad i pechata suobshtenie ot sledniq vid:
    "You are <firstName> <lastName>, a <age>-years old person from ,town>."
*/

function biography(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = Number(input[2]);
    let town = input[3];

    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}

biography(['Maria', 'Ivanova', 20, 'Sofia']);