/* 
Da se napishe funkciq, koqto pokuchava dve celi chisla i izvejda po-golqmoto ot tqh.
*/

function Greater(Input) {
    let firstNumber = Number(Input[0]);
    let secondNumber = Number(Input[1]);

    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    }else if (secondNumber > firstNumber) {
        console.log(secondNumber);
    }else{
        console.log("Both number are equal.");
    }
}

Greater(["5", "5"]);