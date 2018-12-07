var text = "  ";

function gen() {

var noun = ["Sitting", "Standing", "Waiting", "Here", "Not Going"];
var adjactive = ["Still", "Constantly"];
var num1 = Math.floor(Math.random() * 2);
var num2 = Math.floor(Math.random() * 5);
text = text+" Why are you "+adjactive[num1]+" "+noun[num2]+"! <br>";
document.getElementById("para").innerHTML = text;

}
