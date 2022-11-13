/* 
Rumen iska da preboqdisa hola i za celta e nael maistori. Napishete programa, koqto izchislqva razhodite
za remonta, predvid slednite ceni:
    Predpazen nailon - 1.50 lv. za kv. metar
    Boq - 14.50 lv za litar
    Razreditel za boq - 5.00 lv. za litar
Za vseki sluchai, kum neobhodimite materiali, Rumen iska da dobavi oshte 10% ot kolichestvoto boq i 2 kv. metra
nailon, razbira se i 0.40 lv za torbichki. Sumata, koqto se zaplashta na maistorite za 1 chas rabota, e ravna
na 30% ot sbora na vsichki razhodi za materiali.

Input:
    1. Neobhodimo kolichestvo nailon (kv. metra) - cqlo chislo v interval [1... 100]
    2. Neobhodimo kolichestvo boq (v litri) - cqlo chislo v interval [1... 100]
    3. Kolichestvo razreditel (v litri) - cqlo chislo v interval [1... 30]
    4. Chasovete, za koito maistorite shte svurshat rabotata - cqlo chislo v intervala [1... 9]

Output:
    "{sumata na vsichki razhodi}"
*/

function recoloring(input) {
    let nailon = (Number(input[0]) + 2) * 1.50;
    let boq = ((Number(input[1]) * (10 / 100)) + Number(input[1])) * 14.50;
    let razdelitel = Number(input[2]) * 5.00;
    let worktime = Number(input[3]);

    let price = nailon + boq + razdelitel + 0.40;
    let worktimeprice = (price * (30 / 100)) * worktime;
    let fullprice = price + worktimeprice;

    console.log(fullprice);

}

recoloring(["10", "11", "4", "8"]);