var dipl = document.getElementById("display");

var expresion = "";

function pushing(valu){
    if (valu == "C") {
        expresion = "";
        document.getElementById("display").innerHTML = "";
        return;
    }
    if (valu != "=" && valu != "C") {
        expresion += valu;
        document.getElementById("display").innerHTML = expresion;
    }
    else{
        var result = eval(expresion);
        document.getElementById("display").innerHTML = result;
    }
}