/* 
Snimkite za dulgoochakvaniq film "Godzila sreshtu Kong" zapochvat. Scenaristut Adam Uingard vi moli da
napishete funkciq, koqto da izchisli, dali predvidenite sredstva sa dostatuchni za snimaneto na filma. Za
snimkite shte budat nujni opredelen broi statisti, obleklo za vseki edin statist i dekor.

Izvestno e, che:
    Dekorut za filma e na stoinost 10% ot biudjeta.
    Pri poveche ot 150 statista, ima otstupka za oblekloto na stoinost 10%.
*/

function Film(Input) {
    let budget = Number(Input[0]);
    let statist_num = Number(Input[1]);
    let outfitPerStatist = Number(Input[2]);

    let decor = budget * 10 / 100;
    let outfitPrice = statist_num * outfitPerStatist;
    if (statist_num > 150) {
        outfitPrice -= outfitPrice * 10 / 100;
    }

    let finalPrice = outfitPrice + decor;
    let money_left = 0;
    let money_need = 0;

    if (finalPrice < budget) {
        money_left = budget - finalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${money_left.toFixed(2)} leva left.\n`);
    } else {
        money_need = finalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${money_need.toFixed(2)} leva more.\n`);
    }

}

Film(["20000", "120", "55.5"]);
Film(["15437.62", "186", "57.99"]);
Film(["9587.88", "222", "55.68"]);
