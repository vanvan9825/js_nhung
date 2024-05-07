function display() {
    var pro = document.getElementById("pro");
    var qty = document.getElementById("qty");

    var name = pro.innerText; 
    var price = parseFloat(pro.getAttribute("data-price")); 

    var quantity = parseFloat(qty.value); 

    var amount = price * quantity; 

    
    document.getElementById("name").innerText = "Tên sản phẩm: " + name;
    document.getElementById("amount").innerText = "Thành tiền: " + amount + "triệu đồng";
}

// Gán sự kiện click cho nút "OK"
document.getElementById("display").onclick = display;