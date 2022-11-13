/* 
Djesi reshava, che iska da se zanimava s basketbol, no za da trenira e nujna ekipirovka. Napishete
programa, koqto izchislqva kakvi razhodi shte ima Djesi, ako zapochne da trenira, kato znaete kolko 
e taksata za trenirovki po basketbol za period ot 1 godina. Nujna ekipirovka:
    Basketbolni kecove - centa im e 40% po-malka ot taksata za edna godina
    Basketbolen ekip - cenata mu e 20% po-evtina ot tazi na kecovete
    Basketbolna topka - cenata i e 1/4 ot cenata na basketbolnata topka
    Basketbolni aksesoari - cenata im e 1/5 ot cenata na baskebolnata topka

Input:
    Godishnata taksa za trenirovki po basketbol - cqlo chislo v intervala [0... 9999]

Output:
    da se otpechata na konzolata kolko shte sa razhodite na Djesi, ako zapochne da sportuva basketbol.
*/

function basketbol(Input) {
    let taksa = Number(Input[0]);
    let shoes = taksa - (taksa * (40 / 100));
    let ekip = shoes - (shoes * (20 / 100));
    let ball = ekip / 4;
    let aksesoari = ball / 5;
    let sum = taksa + shoes + ekip + ball + aksesoari;

    console.log(sum);
}

basketbol(["365"]);