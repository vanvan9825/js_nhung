// var a = prompt("nhập số vào đây")
// if( a%2==0){
//    document.write( a + " là số chẵn")
 
// } else{
//     document.write( a + " là số lẻ")
// }



// var a=prompt(" Mời bạn nhập tuổi:")
// if(a < 3){
//     console.log("Miễn phí")}
// else if(a < 12 ) {
//     console.log("giá vé là 5$")}
// else if(a < 65){
//     console.log("Giá vé là 10$")}
// else if(a > 65){
//     console.log("Giá vé là 7$") }

// var a=prompt("Mời nhập thời gian")
// switch(a){
//     case "Thức dậy":
//         console.log("T ngủ đến 8h00")
//         alert("thời gian thức dậy lúc 8h00")
//         break;
//     case "Chuẩn bị":
//          console.log("T chuẩn bị đến 8h30")
//          alert("thời gian chuẩn bị  lúc 8h30")
//         break;
//     case "đi làm ":
//         console.log("T ngủ đến 9h00")
//         alert("thời gian thức dậy lúc 9h00")
//         break;
//     default:
//         console.log("khong biet")
//         alert("khong biet")
//         break;
    
// }


// bai2 :

var a = prompt("toan hang a:")
var b = prompt("toan hang b:")
var o = prompt("toan tu")


switch (o){
    case "+":
        var kq = Number(a) + Number(b);
        alert("tong: " + kq);
        break;
    case "-":
        var kq = a - b;
        alert("hieu: " + kq);
        break;
    case "*":
        var kq = a * b;
        alert("tich: " + kq);
        break;
    case "/":
        var kq = a / b;
        alert("thuong: " + kq);
        break;
    default:
        alert("khong biet" );
        break;
}


