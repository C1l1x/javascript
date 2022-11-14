/* 
Petq ima magazin za detski igrachki. Tq poluchava golqma poruchka, koqto trqbva da izpulni. S parite, koito
shte specheli da otide na ekskurziq.

Ceni na igrachkite:
    Puzel - 2.60 lv.
    Govoreshta kukla - 3 lv.
    Plusheno meche - 4.10 lv.
    Minion - 8.20 lv.
    Kamionche - 2 lv.

Ako poruchanite igrachki sa 50 ili poveche magazinut pravi otstupkak 25% ot obshtata cena. Ot spechelienite pari
Petq trqbva da dade 10% za naema na magazina. Da se presmetne dali parite shte i stignat da otide na
ekskurziq.
*/

function ToyShop(Input) {
    let vacationPrice = Number(Input[0]);
    let puzzel_num = Number(Input[1]);
    let speakingdoll_num = Number(Input[2]);
    let bears_num = Number(Input[3]);
    let minion_num = Number(Input[4]);
    let trucks_num = Number(Input[5]);

    let sum = puzzel_num + speakingdoll_num + bears_num + minion_num + trucks_num;
    let price = puzzel_num * 2.60 + speakingdoll_num * 3 + bears_num * 4.10 + minion_num * 8.20 + trucks_num * 2;
    let rent = 0; 
    let finalPrice = 0;
    let money_left = 0;
    let money_need = 0;

    if (sum > 50) {
        price -= (price * 25 / 100);
        rent = price * 10 / 100;
        finalPrice = price - rent;
        if (rent >= vacationPrice) {
            money_left = finalPrice - vacationPrice;
            console.log(`Yes! ${money_left.toFixed(2)} lv left.`);
        }else {
            money_need = vacationPrice - finalPrice;
            console.log(`Not enough money! ${money_need.toFixed(2)} lv needed.`);
        }
    } else {
        rent = price * 10 / 100;
        finalPrice = price - rent;
        if (rent >= vacationPrice) {
            money_left = finalPrice - vacationPrice;
            console.log(`Yes! ${money_left.toFixed(2)} lv left.`);
        }else {
            money_need = vacationPrice - finalPrice;
            console.log(`Not enough money! ${money_need.toFixed(2)} lv needed.`);
        }
    }

}


ToyShop(["40.8", "20", "25", "30", "50", "10"]);
ToyShop(["320", "8", "2", "5", "5", "1"]);