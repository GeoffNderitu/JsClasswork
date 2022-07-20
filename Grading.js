var kwanza=parseInt(prompt("Enter your marks below:"));
var pili=parseInt(prompt("Enter your marks below:"));
var tatu=parseInt(prompt("Enter your marks below:"));

var bingwa=Math.max(kwanza,pili,tatu);

document.write("The highest mark is "+ bingwa + "<br>");

var chelewa=Math.min(kwanza,pili,tatu);
document.writeln("Please work harder, your mark is " + chelewa);