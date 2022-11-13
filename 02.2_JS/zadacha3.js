/* 
Da se napishe  funktsiya, koyato poluchava tsyalo chislo  kato argument i otpechatva na konzolata, dali 
e chetno ili nechetno. Ako e chetno otpechatayte "even", ako e nechetno "odd".
*/

function EvenOdd(Input) {
    let number = Number(Input[0]);
    if (number % 2 == 0) {
        console.log("even");
    }else {
        console.log("odd");
    }
}

EvenOdd(["10"]);