/* 
FoodDelivery

Restorant otvarq vrati i predlaga nqkolko menuta na preferencialni celi:
    Pileshko menu - 10.35 lv.
    Menu s riba - 12.40 lv.
    Vegetariansko menu - 8.15 lv.
Napishete programa, koqto izchislqva kolko shte struva na grupa hora da si poruhat hrana za vkushti.
Grupata shte si poracha i desert, chiqto cena e ravna na 20% ot obshtata smetka (bez dostavkata).
Cenata na dostavkata e 2.50 lv i se izchislqwa nai-nakraq.

Input:
    Broi pileshki menuta - cqlo chislo v intervala [0... 99]
    Broi menuta s riba - cqlo chislo v intervala [0... 99]
    Broi vegetariainski menuta - cqlo chislo v intervala [0... 99]

Output:
    Da se otpechata na konzolata edin red: "{cena na poruchkata}"
*/

function FoodDelivery(Input) {
    let chickenMenu = Number(Input[0]) * 10.35;
    let fishMenu = Number(Input[1]) * 12.40;
    let vegMenu = Number(Input[2]) * 8.15;

    let price = chickenMenu + fishMenu + vegMenu;
    let dessert = price * 20 / 100;
    let finalPrice = price + dessert + 2.50;

    console.log(finalPrice);
}

FoodDelivery(["2", "4", "3"]);