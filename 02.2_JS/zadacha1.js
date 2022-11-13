/* 
Parvata zadacha ot tazi tema e da se napishe funktsiya, koyato chete otsenka, poluchena
kato argument i otpechatva "Excellent!", ako otsenkata e 5.50 ili po-visoka.
*/

function Grade(Input) {
    let grade = Number(Input[0]);
    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}

Grade(["5.50"]);