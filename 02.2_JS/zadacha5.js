/* 
Da se napishe funktsiya, koyato poluchava tsyalo chislo i proveryava dali e pod 100, mezhdu 100 i 200 ili nad 200. 
Ako chisloto e:
    • pod 100 otpechatayte: "Less than 100"
    • mezhdu 100 i 200 otpechatayte: "Between 100 and 200"
    • nad 200 otpechatayte: "Greater than 200"
*/

function numbercheck(Input) {
    let number = Number(Input[0]);

    if (number < 100) {
        console.log("Less than 100");
    }else if (number > 200) {
        console.log("Greater than 200");
    }else
        console.log("Between 100 and 200");
}

numbercheck(["200"]);