var vklad=Number(prompt("zadejte váš počáteční vklad (kladné číslo)"))
var urok=Number(prompt("zadejte roční úrokovou sazbu v procentech")) 
alert("teď budete zadávat jak dlouho budete úročit a za překročení 10 let dostanete 500 kč bonus")
var roky=Number(prompt("zadejte počet let/roků po kterých budete spořit"))

for(var i=1;i!==roky+1;i++){
var vklad=((vklad/100)*urok)+vklad
alert(vklad)
}
if(roky>=10){
    alert("dostáváte bonus za uroceni přes 10 roků 🥳")
    var bonus=vklad+500
    alert(bonus)
}