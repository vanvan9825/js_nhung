var anharr = [];
var index = 0;
function loadanh() {
    for (i  = 0; i < 7; i++) {
        anharr[i]=new Image; //Khai báo đối tượng ảnh
        anharr[i].src = "image/" + i + ".jpg" ; //Gán ảnh lên
        
    }
}
function Start(){
    loadanh();
    document.getElementById("img1").src=anharr[index].src
    index++;
    if (index >= anharr.length) {
        index=0;
    }
    t=setTimeout("Start()",500);
}
function Stop(){
    clearTimeout(t);
}

function Next(){
    loadanh();
    document.getElementById("img1").src=anharr[index].src
    index++;
    if (index == anharr.length) {
        index=0;
    }
}

function First(){
    loadanh();
    var index = 0;
    document.getElementById("img1").src=anharr[index].src 
}


function Last(){
    loadanh();
    var index = anharr.length - 1;
    document.getElementById("img1").src=anharr[index].src
     

}
