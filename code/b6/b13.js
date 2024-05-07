function kiemtra(){
    var name = document.myform.name.value;
    var sdt = document.myform.sdt.value;
    var email = document.myform.email.value;
    var password = document.myform.password.value;
    var confirmpassword = document.myform.confirmpassword.value;
    var status = false;

    // kiểm tra name 
    if(name.lenght < 1){
        document.getElementById('ht').innerHTML = "bạn không được để trống"
        
    } else if (!isNaN(name)){
        document.getElementById('ht').innerHTML = "<img src = '/code/b6/img/uncheck.png' img> bạn không được bỏ chống chỗ này "
        status = false;
    }

}