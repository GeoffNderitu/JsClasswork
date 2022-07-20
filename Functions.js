// function ongezaNumbers(){
//     var kwanza= 20;
//     var pili=30;
//     console.log(kwanza+pili);
// }
// ongezaNumbers();

// function ongezaZote(one,two){
//     console.log(one+two);
// }
// ongezaZote(20,40);

// function majibu(anza,maliza){
//     var jibu= anza+maliza;   
//     return jibu;
// }
// var tuma = majibu(50,70);
// console.log(tuma);

var chagua = parseInt(prompt(`Please select one of the options below:
1:Check Ongea points balance 
2:Okolewa kredo
3:Services
4:Products and new deals
5:Pata Bonus
6:My Account
7:Sambaza kredo 
8:Buy data bundles`));

if(chagua===1){
    alert("Your Ongea Balance is 76");
}else if(chagua===2){
    alert("You are not eligible for this service");
}else if(chagua===4){
    alert("Some of the products are not on offer at the moment");
}else if(chagua===5){
    alert("You have gotten a Ksh.60 bonus worth of airtime");
}else if(chagua===6){
    alert("We have sent you your account info via text message");
}else if(chagua===3){
    alert("A list of our services will be sent shortly");
}else if(chagua===7){
    parseInt(prompt("Please enter you wish to send"));
    parseInt(prompt("Phone number of recipient"));
    alert("Amount specified has been sent");
}else if(chagua===8){
    alert("Get to see our outstanding data deals");
}
