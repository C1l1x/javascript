/* 
Napishete programa, koqto chete agal v radiani (desetichno chislo) i go preobrazuva v gradusi. Izpolzvaite
formulata: gradus = radian * 180 / p. Chisloto p v Java programi e dostupno chrez Math.PI.
*/

function radianivgradusi(input) {
    let radiani = Number(input[0]);
    let gradus = radiani * 180 / Math.PI;

    console.log(gradus);
}

radianivgradusi(["3.1416"]);