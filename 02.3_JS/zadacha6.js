/* 
Ivan reshava da podobri Svetovniq rekord po pluvane na dulgi rastoqniq. Funkiqta poluchava: rekordut
v sekundi, koito Ivan trqbva da podobri, rastoqnieto v metri, koeto trqbva da prepluva i vremeto v
sekundi, za koeto pluva rastoqnie ot 1m. Da se napishe funkciq, koqto izchislqva dali se e spravil sus 
zadachata, kato se ima predvid, che: suprotivlenieto na vodata go zabavq na vseki 15m. s 12.5 sekundi.
Kogato se izchislqva kolko puti Ivancho shte se zabavi, v rezultat na suprotivlenieto na vodata, rezultatut
trqbva da se zakrugli nadolu do nai-blizkoto cqlo chislo.

Da se izchisli vremeto v sekundi, za koeto Ivancho shte prepluva razstoqnieto i razlikata sprqmo
Svetovniq rekord.
*/

function SwimingRecord(Input) {
    let record = Number(Input[0]);
    let razstoqnie = Number(Input[1]);
    let time_swiming_meter = Number(Input[2]);

    let fullTimeSwiming = razstoqnie * time_swiming_meter;
    let zabavqne = (razstoqnie / 15) * 12.5;
    let overallTimeSwiming = fullTimeSwiming + zabavqne;
    if (overallTimeSwiming > record) {
        let timeNeeded = overallTimeSwiming - record;
        console.log(`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    } else {
        
        console.log(`Yes, he succeeded! The new world record is ${overallTimeSwiming.toFixed(2)} seconds.`);
    }
}

SwimingRecord(["10464", "1500", "20"]);
SwimingRecord(["55555.67", "3017", "5.03"]);