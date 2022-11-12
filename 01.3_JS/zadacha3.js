/* 
Napishete programa, koqto izchislqva kakva suma shte poluchite v kraq na depozitniq period pri opredelen
lihven procent. Izpolzwaite slednata formula:
suma = depozirana suma + srok na depozita * ((depozirana suma * godishen lihven procent)/12)

Input:
    1. Depozirana suma - realno chislo v intervala [100.00... 10000.00]
    2. srok na depozita (v meseci) - cqlo chislo v intervala [1... 12]
    3. Godishen lihven procent - realno chislo v intervala [0.00... 100.00]

Output:
    Da se opechata na kozolata sumata v kraq na sroka.
*/

function deposit(input) {
    let depositsum = Number(input[0]);
    let timedeposit = Number(input[1]);
    let procent = Number(input[2]) / 100;

    let sum = depositsum + timedeposit * ((depositsum * procent)/12);

    console.log(sum);
}

deposit(["200", "3", "5.7"]);