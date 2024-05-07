var newWindow; // Biến lưu trữ cửa sổ mới

function openNewWindow() {
    // Kích thước của cửa sổ phụ thuộc vào trình duyệt
    var width = (navigator.userAgent.indexOf("MSIE") !== -1) ? 100 : 150;
    var height = (navigator.userAgent.indexOf("MSIE") !== -1) ? 100 : 150;

    // Mở cửa sổ mới
    newWindow = window.open("", "_blank", "toolbar=yes, menubar=yes, width=" + width + ", height=" + height);

    // Thêm nội dung vào cửa sổ mới
    newWindow.document.write("<h1>Cửa sổ mới</h1>");
    newWindow.document.write("<p>Đây là cửa sổ mới.</p>");
}

function closeNewWindow() {
    // Đóng cửa sổ mới
    newWindow.close();
}

function checkNewWindowStatus() {
    // Kiểm tra trạng thái của cửa sổ mới
    var isClosed = newWindow.closed;

    // Thông báo cho người dùng biết cửa sổ đã đóng hay chưa
    alert("Cửa sổ mới " + (isClosed ? "đã đóng" : "đã đã đóng."));
}
