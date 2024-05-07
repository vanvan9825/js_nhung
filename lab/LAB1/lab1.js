//bai 1:

var a = prompt(" Xin mời nhập a:");
var b = prompt(" Xin mời nhập b: ");
var c = a**b;
document.write("a^b = " +c);


// bai 2:
document.write('<br>');
var x = parseFloat(prompt("xin mời nhập cạnh a:"));
var y = parseFloat(prompt("xin mời nhập cạnh b:"));
var z = parseFloat(prompt("xin mời nhập cạnh c:")); 
var p = (x+y+z)/2;
var s = Math.sqrt(p * (p - x)  *(p - y)*(p - z));
document.write("Diện tích hình tam giác là:" +s);


   