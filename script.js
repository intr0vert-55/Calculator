var b = "";
var res = 0;
function add(){
    var a = parseInt(document.getElementById("a").value);
    if(b == "")
        b += a;
    else
        b += " + "+a;
    res += a;
    document.getElementById("res").innerHTML = res;
}
function sub(){
    var a = parseInt(document.getElementById("a").value);
    if(b == "")
        b += a;
    else
        b += " - "+a;
    res -= a;
    document.getElementById("res").innerHTML = res;
}
function mul(){
    var a = parseInt(document.getElementById("a").value);
    if(b == "")
        b += a;
    else
        b += " * "+a;
    res *= a;
    document.getElementById("res").innerHTML = res;
}
function div(){
    var a = parseInt(document.getElementById("a").value);
    if(b == "")
        b += a;
    else
        b += " / "+a;
    res /= a;
    document.getElementById("res").innerHTML = res;
}
function equals(){
    if(b == "")
        document.getElementById("result").innerHTML = "none"
    else
        document.getElementById("result").innerHTML = b+" = "+res;
    res = 0;
    b ="";
}