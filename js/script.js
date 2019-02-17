function fidel(){
var inp1 = document.getElementById("Triangle_Input1").value;
var inp2 = document.getElementById("Triangle_Input2").value;
var inp3 = document.getElementById("Triangle_Input3").value;
var inp11=parseInt(inp1);
var inp22=parseInt(inp2);
var inp33=parseInt(inp3);
    if ((inp11 === inp22) && (inp11 === inp33) && (inp22 === inp33)) {
    alert("Equalateral");
    }
    else if ((inp11 === inp22) ||(inp11 === inp33) || (inp22 === inp33)) {
    alert("Isosceles");
    }
    else if (((inp11!=inp22)&&(inp11!=inp33)&&(inp22!=inp33))||((inp11+inp22>inp33)||(inp11+inp33>inp22)||(inp22+inp33>inp1))) {
    alert("scalene");
    }
    else {
    alert("Not a triangle");
    }

}
