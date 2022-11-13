/* 
Za rozhdeniya si den Lyubomir poluchil akvarium s formata na paralelepiped. Parvonachalno prochitame ot 
konzolata na otdelni redove razmerite mu – dalzhina, shirochina i visochina v santimetri. Tryabva da se 
presmetne kolko litra voda shte sabira akvariuma, ako se znae, che opredelen protsent ot vmestimostta mu e 
zaeta ot pyasak, rasteniya, nagrevatel i pompa. 
Edin litar voda se ravnyava na edin kubichen detsimetar/ 1l=1 dm3/. 
Da se napishe programa, koyato izchislyava litrite voda, koyato sa neobhodimi za napalvaneto na akvariuma.

Input:
    1. Dalzhina v sm – tsyalo chislo v intervala [10 … 500]
    2. Shirochina v sm – tsyalo chislo v intervala [10 … 300]
    3. Visochina v sm – tsyalo chislo v intervala [10… 200]
    4. Protsent  – realno chislo v intervala [0.000 … 100.000]

Output:
    Litrite voda koito shte subira akvariuma.
*/

function akvarium(Input) {
    let dalzhinaSm = Number(Input[0]);
    let shirochina = Number(Input[1]);
    let visochina = Number(Input[2]);
    let procent = Number(Input[3]) / 100;

    let obem = (dalzhinaSm * shirochina * visochina) / 1000;
    let litri = obem * (1 - procent);
    
    console.log(litri);
}

akvarium(["85", "75", "47", "17"]);