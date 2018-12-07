function theRest(){
document.getElementById("output4").innerHTML="SUCCESS";
}
var text = "  ";

function gen() {

var noun = ["Story", "Lifestyle", "Path to Success", "History", "Autobiography"];
var adjactive = ["Great", "Excellent", "Tremendous", "Fantastic", "Outstanding"];
var num1 = Math.floor(Math.random() * 5);
var num2 = Math.floor(Math.random() * 5);
text = text+" What a "+adjactive[num1]+" "+noun[num2]+"! <br>";

document.getElementById("para").innerHTML = text;

}
