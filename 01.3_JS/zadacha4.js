/* 
Za lqtnata vakanciq v spisuka sus zaduljitelna literatura na Joro ima opredelen broi knigi. Poneje
Joro predpochite da igrae s proqteli navun, vashata zadacha e da mu pomognete da izchisli kolko chasa na den
trqbva da otdelq, za da prochete neobhodimata literatura.

Input:
    1. Broi stranici v tekushtata kniga - cqlo chislo v intervala [1... 1000]
    2. Stranici, koito prochita za 1 chas - cqlo chislo v intervala [1... 1000]
    3. Broqt na dnite, za koito trqbva da prochete knigata - cqlo chislo v intervala [1... 1000]

Output:
    Da se otpechata na konzolata broqt chasove, koito Joro trqbva da otdelq za chetene vseki den.
*/

function literatura(input) {
    let CountPages = Number(input[0]);
    let PagesForHour = Number(input[1]);
    let Days = Number(input[2]);

    let HoursNeed = (CountPages / PagesForHour) / Days;

    console.log(HoursNeed);
}

literatura(["432", "15", "4"]);