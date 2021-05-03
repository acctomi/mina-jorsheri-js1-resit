 

var dives = document.getElementsByClassName('about');

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');


var tempVar = p1.innerText;
p1.innerText = p2.innerText;
p2.innerText = tempVar;
