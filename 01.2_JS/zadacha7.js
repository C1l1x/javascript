/* 
Napishete programa, koqto presmqta nujnite razhodi za zakupuvaneto na hrana za kucheta i kotki. Hranata se pazaruva ot zoomagazin, kato edna opakovka
hrana za kucheta e na cena 2.50 lv, a opakovkata hrana za kotki struva 4 lv.

Input:
    1. Broqt na opakovkite hrana za kucheta - cqlo chislo v intervala [0... 100]
    2. Broqt na opakovkite hrana za kotki - cqlo chislo w intervala [0... 100]

Output:
    "{krainata suma} lv."

*/

function zoomagazin(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let dogFoodPrice = dogFood * 2.50;
    let catFoodPrice = catFood * 4;
    let sumPrice = dogFoodPrice + catFoodPrice;

    console.log(`${sumPrice} lv.`);
}

zoomagazin(["5", "4"]);