/* 
Da se napishe funkciq, koqto chete ot konzolata realno chislo i go preobrazuva ot inchove v santimetri, Za celta
umnojete inchovete po 2.54 (1 inch = 2.54 santimetra)
*/

function InchToSm(input) {
    let inch = Number(input[0])
    let sm = 2.54 * inch;
    console.log(sm);
}

InchToSm("7");