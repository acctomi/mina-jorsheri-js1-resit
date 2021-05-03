function resetState() {
    var dives = document.getElementsByClassName('dynamic-divs');
    
    var len = dives.length;

for (var i = 0; i < len; i++) {
    if (dives[i].className.toLowerCase() == "dynamic-divs") {
        dives[i].parentNode.removeChild(dives[i]);
    }
}
    
}

function createDives(inputNumber) {
    var tempNumber = inputNumber.value;
    var dives = document.getElementsByClassName('dynamic-divs');


    for (var i = 0; i < tempNumber; ++i){
    
        var tempStr = "Number " + i + "";
        var node = document.createElement("DIV");
        var textnode = document.createTextNode(tempStr);
        node.appendChild(textnode);
        dives[i].append(node);

    }
    
}