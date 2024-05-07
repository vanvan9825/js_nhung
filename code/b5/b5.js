// do {
//     number = prompt("Please enter a number between 0 and 100: "); 
// } while (!(number >= 0 && number < 100));

// for( var i = 0; i <= 10; i++){
//     console.log(i)
// }

//  document.write("<br>")
// for( var a = 1; a <= 10; a++){
//     var b = 8 ;
//     var c = b * a;
//     console.log(c)
//     document.write("<br>")
//     document.write(+b +"x" + a + "=" + c)
// }

// for( var i = 1; i <= 10; i++){
//     for( var a = 1; a <= 10; a++){
//         var kq = i*a
//         document.write(i +" x " + a +  " = "+ kq + "<br>")
//     }
//     document.write("<br>")
// }


// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
//     }
//     sayHello();

//  function tester(para1, para2){
//   console.log(para1 + " " + para2);
// }
//  const arg1 = "argument 1";
//   const arg2 = "argument 2";
//  tester(arg1, arg2);

//bài 3
var a = "";
var b = "";
var c = null;
var chuyen = false;

function ghiNhanGiaTri(x) {
  if (chuyen == false) {
    a = Number(a + String(x));
  } else {
    b = Number(b + String(x));
  }
}
function ghiNhanToanTu(y) {
  chuyen = true;
  c = y;
}
function thucHien() {
  switch (c) {
    case "x":
      alert(a * b);
      break;
    case ":":
      alert(a / b);
      break;
    case "+":
      alert(a + b);
      break;
    case "-":
      alert(a - b);
      break;
  }
}
function lamLai(){
  //khai báo var trên rồi thì không khai báo thêm nữa
a = "";
b = "";
c = null;
 chuyen = false;
}