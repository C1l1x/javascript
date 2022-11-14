/* 
Da se napishe funkciq, koqto poluchava chas i minuti ot 24-chasovo denonoshtie i izchislqva kolko shte e chasut
sled 15 min. Rezultata da se otpechata vuv format chasove:minuti, Chasovete vinagi sa mejdu 0 i 23 a 
minutite vinagi sa mevdu 0 i 59. Chasovete se izpisvat s edna ili dve cifri. Minutite se izpisvat vinagi s po dve cifri,
s vodeshta nula, kogato e neobhodimo 
*/

function TimePlus15(Input) {
    let hours = Number(Input[0]);
    let minutes = Number(Input[1]);
    
    minutes += 15;
    if (minutes > 60) {
        hours += 1;
        minutes %= 60;
        if (hours > 23 && minutes >= 10) {
            hours = 0;
            console.log(`${hours}:${minutes}`)
        }else 
            console.log(`${hours}:0${minutes}`);
    } else if (minutes < 10){
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }

}

TimePlus15(["1", "46"]);
TimePlus15(["0", "01"]);
TimePlus15(["23", "59"]);
TimePlus15(["11", "08"]);
TimePlus15(["12", "49"]);