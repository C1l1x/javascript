/* 
Trima sportni sastezateli finishirat za nyakakav broy sekundi (mezhdu 1 i 50). Da se napishe 
funktsiya, koyato poluchava tri argumenta - sekundi i presmyata sumarnoto im vreme vav format 
"minuti:sekundi". Sekundite da se izvedat s vodeshta nula (2  "02", 7  "07", 35  "35"). 
*/

function MinuteSeconds(Input) {
    let firstNum = Number(Input[0]);
    let secondNum = Number(Input[1]);
    let thirdNum = Number(Input[2]);

    let totaltime = firstNum + secondNum + thirdNum;
    let minutes = Math.floor(totaltime / 60);
    let seconds = totaltime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`)
    }
}

MinuteSeconds(["22", "7", "34"]);