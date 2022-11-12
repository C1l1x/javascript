/* 
Uchebnata godina veche e zapochnala i otgovornichkata na 10B klas - Ani trqbva da kupi opredelen broi
paketcheta s himikali, paketcheta s markeri, kakto i preparat za pochistvane na duska. Tq e redovna klientka
na edna knijarnica, zatova ima namalenie za neq, koeto predstavlqva nqkakuv procent ot obshtata suma.
Napishete programa, koqto izchislqva kolko pari shte trqbva da subere Ani, za da plati smetkata, kato
imate predvid sledniq cenorazpis:
        Paket himikali - 5.80 lv.
        Paket markeri - 7.20 lv.
        Preparat - 1.20 lv (za litur)

Input:
    Broi paketi himikali - cqlo chislo v intervala [0...100]
    Broi paketi markeri - cqlo chislo v intervala [0... 100]
    Litri preparat za pochistvane na duskata - cqlo chislo v intervala [0... 50]
    Procent namalenie - cqlo chislo v intervala [0... 100]

Output:
    Da se otpechata na konzolata kolko pari shte sa nujni na Ani, za da si plati smetkata.
*/

function Materials(input) {
    let pencils = Number(input[0]) * 5.80;
    let markers = Number(input[1]) * 7.20;
    let preparat = Number(input[2]) * 1.20;
    let discount = Number(input[3]) / 100;

    let sum = pencils + markers + preparat;
    sum = sum - (sum * discount)

    console.log(sum);
}

Materials(["2", "3", "4", "25"]);