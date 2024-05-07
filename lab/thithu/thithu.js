const khoahoc=document.getElementsByClassName('khoahoc')
const hocphi=document.getElementsByClassName('hocphi')

khoahoc.addEventListener('change', ()=>{
    if(khoahoc.value ==1){
        hocphi.value = 500;
    }
    if(khoahoc.value ==2){
        hocphi.value = 800;
    }
    if(khoahoc.value ==3){
        hocphi.value = 1000;
    }
}

)


function kiemtra(){
    var hoten= document.getElementById('id').value
    var email= document.getElementById('email').value

    var khoahoc= document.getElementById('khoahoc').value
    var hinhthuchoc = document.getElementById('thuong').value
    var hinhthuchoc = document.getElementById('onl').value
   
}
