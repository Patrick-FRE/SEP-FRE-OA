function tipcalculator() {
    var bill = +document.getElementById("bill").value;
    var tip = +document.getElementById("tip").value;

    var totaltip = bill * tip;
    var totalbill = bill + totaltip;
    document.getElementById("totaltip").innerHTML = "$" + totaltip;
    document.getElementById("totalbill").innerHTML = "$" + totalbill;
}
document.getElementById("calculate").onclick = function() {
    tipcalculator()
}