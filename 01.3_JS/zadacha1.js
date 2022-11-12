/* 
Napishete funkciq za konvertirane na shtatski dolari (USD) v balgarski leva (BGN). Izpolzvaite fiksiran
kurs mejdu dolar i lew: 1 USD = 1.79549 BGN
*/

function USDtoBGN(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;

    console.log(bgn);
}

USDtoBGN(["22"]);