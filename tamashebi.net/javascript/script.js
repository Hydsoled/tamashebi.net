window.onload = function fun(){
var b = document.getElementsByClassName("reklamebi")[0];
for (var i=0; i<3; i++){
    for (var j=0; j<2; j++){
        var k = b.cloneNode(true);
        document.getElementsByClassName("secbanner")[j].appendChild(k);
    }
}
var b = document.getElementById("midside");
for (var i=0; i<7; i++){
        var k = b.cloneNode(true);
        document.getElementById("fullmidcont").appendChild(k);
}
}