/* Dadeno e tsyalo chislo – nachalen broy tochki. Varhu nego se nachislyavat bonus tochki po 
pravilata, opisani po-dolu. Da se napishe funktsiya, koyato presmyata bonus tochkite, koito poluchava 
chisloto i obshtiya broy tochki (chisloto + bonusa).

    • Ako chisloto e do 100 vklyuchitelno, bonus tochkite sa 5.
    • Ako chisloto e po-golyamo ot 100, bonus tochkite sa 20% ot chisloto.
    • Ako chisloto e po-golyamo ot 1000, bonus tochkite sa 10% ot chisloto.

    • Dopalnitelni bonus tochki (nachislyavat se otdelno ot predhodnite):
        ◦ Za chetno chislo > + 1 t.
        ◦ Za chislo, koeto zavarshva na 5 > + 2 t. 
*/

function BonusPoints(Input) {
    let points = Number(Input[0]);
    let bonus = 0;
    let procent = 0;
    if (points <= 100) {
        bonus += 5;
    }else if (points > 100 && points < 1000) {
        procent = points * 20 / 100;
        bonus += procent;
    }else {
        procent = points * 10 / 100;
        bonus += procent;
    }

    if (points % 2 == 0) {
        bonus += 1;
    }else if (points % 10 == 5) {
        bonus += 2;
    }

    console.log(bonus);
    console.log(points + bonus);
}

BonusPoints(["2703"]);