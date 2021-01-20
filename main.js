paras = [];

function push(){
    for (var j=1; j<=4; j++){
        var paras2= document.getElementById("para1-"+j).value;
        console.log(paras2);
        paras.push(paras2);
        Input.join(".")
    }
}

function push2(){
    for (var i=1; i<=4; i++){
        var p3= document.getElementById("para2-"+o).value;
        console.log(p3);
        paras.push(p3);
        Input.join(".")
    }
}