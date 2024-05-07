// bài 1: nhập ra 1 số nguyên bất kỳ và máy radom 1 số thông báo xem 2 số đó có trùng nhau không  và in ra màn hình 2 số đó

var e = prompt ("xin mời nhập số từ 0 đến 99: ");
var f = Math.floor(Math.random() * 100);
document.write(" số bạn nhập là " + e);
document.write("<br>")
document.write(" số máy tính in ra là " + f);
if( e === f){
    alert("số bạn nhập " + e + " trùng với số máy tính in ra")
} else {
    alert ("số bạn nhập " + e + " khác với số máy tính in ra là " + f )
}

// bài 2: nhập số bất kì và kiểm tra xem có phải số chính phương hay không
var x = parseInt(prompt("Nhập một số nguyên dương:")); 
if( x > 0 && Math.sqrt(x) === Math.floor(Math.sqrt(x))){
    alert ( "số " + x + " là số chính phương")
} else{
    alert ( "số " + x + " không là số chính phương")
}


// bài 3:  ax^2 + bx - c = 0 giải pt bậc 2
 var a = prompt("xin mời nhập số a: ")
 var b = prompt("xin mời nhập số b: ")
 var c = prompt("xin mời nhập số c: ")

 var delta =  b* b - (4* a* c);
 if( delta < 0){
   alert("Phương trình vô nghiệm ");
 }else if( delta == 0){
    var d = (-b)/(2 *  a);
   alert("phương trình có nghiệm kép x1 = x2 = " +  d );
 } else{
    var x1 = ( - b + sqrt( delta))/(2 *  a);
    var x2 = ( - b - sqrt( delta))/(2 *  a);
   alert("phương trình có hai nghiệm phân biệt x1 = " +  x1 + ", x2 = " +  x2);
 } 


 // bài 4  nhập tháng in ra ngày 
 var month = parseInt(prompt("Nhập một tháng (từ 1 đến 12):"));

if (month >= 1 && month <= 12) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert("Tháng " + month + " có 31 ngày.");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert("Tháng " + month + " có 30 ngày.");
            break;
        case 2:
            var year = parseInt(prompt("Nhập một năm:"));
            var day = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? 29 : 28;
            alert("Tháng 2 năm " + year + " có " + day+ " ngày.");
            break;
    }
}
else {
    alert("Tháng không hợp lệ. Vui lòng nhập lại.");
}