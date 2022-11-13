/* 
Da se napishe funktsiya,  koyato poluchava kato vida i razmerite na geometrichna figura i presmyata 
litseto y. Figurite sa chetiri vida: kvadrat (square), pravoagalnik (rectangle), krag (circle) i triagalnik 
(triangle). Na parviya red na vhoda se chete vida na figurata (tekst sas slednite vazmozhnosti: square, 
rectangle, circle ili triangle). 
    • Ako figurata e kvadrat (square): na sledvashtiya red se chete edno drobno 
chislo - dalzhina na stranata mu
    • Ako figurata e pravoagalnik (rectangle): na sledvashtite dva reda chetat dve drobni 
chisla - dalzhinite na stranite mu
    • Ako figurata e krag (circle): na sledvashtiya red chete edno drobno chislo - radiusat na kraga
    • Ako figurata e triagalnik (triangle): na sledvashtite dva reda chetat dve drobni 
chisla - dalzhinata na stranata mu i dalzhinata na visochinata kam neya

Rezultatat da se zakragli do 3 tsifri sled desetichnata zapetaya. 
*/

function rectangle(Input) {
    let figure = Input[0];
    let a = Number(Input[1]);
    let b = Number(Input[2]);

    if (figure == "square") {
        a = a * a;
        
        console.log(a);        
    }
    if (figure == "rectangle") {
        b = a * b;

        console.log(b);
    }
    if (figure == "circle") {
        a = Math.PI * (a * a);

        console.log(a);
    }
    if (figure == "triangle") {
        a = (a / 2) * b;

        console.log(a);
    }
}

rectangle(["triangle", "4.5", "20"]);