/* 
Napishete programa, koqto izchislqva kolko chasa shte sa neobhodimi na edin arhitekt, za da izgotvi proektite na 
nqkolko stroitelni obekta. Izgotvqneto na edin proekt otnema tri chasa.

Input:
    1. Imeto na arhitekta - tekst.
    2. Broi na proektite, koito trqva da izgotvi - cqlo chislo v intervala [0...100]

Output:
    "The architect {imeto na arhitekta} will need {neobhodimi chasove} hours to complete {broi na proektite} project/s."

*/

function projects(input) {
    let name = input[0];
    let project = input[1];
    let hours = project * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${project} project/s.`);
}

projects(["George", "4"])
