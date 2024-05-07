        // Tạo đối tượng sinh viên
        var sv = new Object();

        // Nhập họ tên và điểm từ người dùng
        sv.hoTen = prompt("Họ và tên:");
        sv.diem = parseFloat(prompt("Điểm TB:"));

        // Khai báo phương thức hiển thị
        sv.hienThi = function() {
            // Xếp loại và lưu học lực vào thuộc tính hocLuc
            if (this.diem >= 5) {
                this.hocLuc = "Đỗ";
            } else {
                this.hocLuc = "-30$";
            }

            // Hiển thị thông tin sinh viên ra màn hình
            document.write("<h3>Họ và tên: " + this.hoTen + "</h3>");
            document.write("<h3>Điểm TB: " + this.diem + "</h3>");
            document.write("<h3>Học lực: " + this.hocLuc + "</h3>");
        };