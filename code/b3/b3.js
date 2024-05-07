/*Bài 4 - lap2
const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']];
theList.pop();
theList.shift();
theList.push('FIRST');
theList.splice(4,0,'hello world');
theList.splice(3,0,'middle');
theList.unshift('LAST');
console.log(theList);*/

/*bai 5 - lap 2
var x = 10 + Math.round(5 * Math.random());
document.write('Số bí mật là:' +x);
var a = prompt('Mời bạn ngập số:');
document.write('<br>Số vừa nhập là' +a);
if(a == x){ 
        document.write('<br>Bạn vừa trúng xổ số Vietlot');
    } 
    else if (a > x){
        document.write('<br>Số vừa nhập lớn hơn số bí mật');
    } 
    else{ 
        document.write('<br>Số vừa nhập nhỏ quá, đi về');
    }
*/

// var m2=prompt("Nhập giá trị cần quy đổi")
// var ha=m2/3600
// alert("Kết quả:" +ha)

//Buổi 3 - mảng - Ép kiểu

// arr1 = new Array("hello", "world", "javascript", 35, true, "array");
// arr2 = ["hello", "world", "javascript", "array"];
// arr1[-1]='Nhung'; //Thêm 'nhung' ở vị trí -1
// arr1.push('Nhung');  //Thêm phần tử cuối mảng
// arr1.pop('Nhung');  //Xóa phần tử cuối mảng
// arr1.unshift('Nhung'); //thêm phần tử vào đầu mảng
// arr1.shift('Nhung'); //xóa phần tử đầu mảng
// arr1.splice(2,1, 'nhung');  //Xóa phần tử ở 1 vị trí nào đó (vị trí con trỏ, vị trí phần tử, thay thế)
// arr1.splice(2,0, 'kia');  // 0 là không xóa mà thay thế
// console.log(arr1);
// console.log(arr2);
// console.log(arr1[-1]);

var x = Number('100');
var y = NumberO(x);
var c = x+y;
alert(typeof(x));
alert(typeof(y)); //ép kiểu
alert(c);
alert(typeof(c));
// alert("Hello" + x);