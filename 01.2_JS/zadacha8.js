/* 
Bojidara razpolaga s nqkolko kashti na Chernomorieto i jelae da ozeleni dvorovete na nqkoi ot tqh, kato po tozi
nachin sazdade obstanovka i komfort na gostite si. Za celta e naela firma.

Napishete programa, koqto izchislqva neobhodimata suma, koito Bojidara shte trqbva da zaplati na firmata
izpalnitel na proekta. cenata na edin kv. m. e 7.61 lv sas DDS. Poneje neiniqt dwor e dosta golqm,
firmata izpulnitel predlaga 18% otstupka ot krainata cena.

Input:
    1. Kv. metri, koito shte badat ozeleneni - [0.00... 10000.00]

Output:
    "The final price is: {krainata cena} lv."
    "The discount is: {otstupka} lv."
*/

function ozelenqvane(input) {
    let kvMeter = Number(input[0]);
    let discount = 18 / 100;
    let kvMeterPrice = kvMeter * 7.61;
    let discountPrice = kvMeterPrice * discount;
    let finalPrice = kvMeterPrice - discountPrice;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}

ozelenqvane(["550"]);