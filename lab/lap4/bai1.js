// bài 1

// Bước 1: Tạo một mảng lưu trữ kho sản phẩm
var inventoryArray = [];

// Tạo 3 items
var item1 = { name: "Iphone", model: "15 pro", cost:50000000 , quantity: 5 };
var item2 = { name: "Samsung", model: "A3 plus", cost: 20000000, quantity: 10 };
var item3 = { name: "Oppo", model: "F3 plus", cost: 30000000, quantity: 15 };

// Thêm các items vào inventory array
inventoryArray.push(item1, item2, item3);

// Xuất inventory array bằng console
console.log(inventoryArray);

// Truy xuất quantity element của item thứ 3 bằng console
console.log("Quantity of item 3: " + inventoryArray[2].quantity);

// Thêm và truy xuất thêm các elements khác từ inventory array
inventoryArray[0].description = " iPhone qúa đẹp";
inventoryArray[1].description = " Samsung qúa đẹp";
inventoryArray[2].description = "  Oppo cũng ok";

console.log(inventoryArray);