function displayCurrentTime() {
    // Sử dụng đối tượng Date để lấy thời gian hiện tại
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();

    // Hiển thị thời gian lên trang web
    document.getElementById("current-time").innerHTML = h + ":" + m + ":" + s;

    // Gọi lại hàm sau 1 giây
    setTimeout(displayCurrentTime, 1000);
}

// Gọi hàm displayCurrentTime khi trang web được tải thành công
window.onload = displayCurrentTime;

// Tải lại trang web sau 1 giây để cập nhật thời gian
setTimeout(function() {
    location.reload();
}, 1000);