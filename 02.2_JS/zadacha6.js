/* 
Da se napishe funktsiya, koyato poluchava skorost (realno chislo) i otpechatva informatsiya za skorostta. 
    • Pri skorost do 10 (vklyuchitelno) otpechatayte "slow"
    • Pri skorost nad 10 i do 50 (vklyuchitelno) otpechatayte "average" 
    • Pri skorost nad 50 i do 150 (vklyuchitelno) otpechatayte "fast"
    • Pri skorost nad 150 i do 1000 (vklyuchitelno) otpechatayte "ultra fast" 
    • Pri po-visoka skorost otpechatayte "extremely fast"
*/

function speed(Input) {
    let number = Number(Input[0]);

    if (number <= 10) {
        console.log("slow");
    }else if (number > 10 && number <= 50) {
        console.log("avarage");
    }else if (number > 50 && number <= 150) {
        console.log("fast");
    }else if (number > 150 && number <= 1000) {
        console.log("ultra fast");
    }else
        console.log("extremely fast");
}

speed(["1001"]);