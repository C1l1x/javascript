/* 
Da se napishe funktsiya, koyato poluchava parola (tekst) i proveryava dali dadenata parolata savpada s 
frazata "s3cr3t!P@ssw0rd". Pri savpadenie da se izvede "Welcome". Pri nesavpadenie da se izvede "Wrong password!". 
*/

function password(Input) {
    let login = Input[0];

    if (login == "s3cr3t!P@ssw0rd") {
        console.log("Welcome!");
    }else
        console.log("Wrong password!");
}

password(["s3cr3t!P@ssw0rd"]);