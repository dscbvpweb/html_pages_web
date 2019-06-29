
function slideCarousel(){
    var x = document.getElementsByClassName('card')
    console.log(x.length)
    for (i=0; i<x.length; i++){
        x[i].style.transform="translateX(100px)";
    }
    console.log('yes')
}

function slideleft(){
    var elem = document.getElementsByClassName("card");   
    var pos = 0;
    var id = setInterval(frame, 0.2);
    function frame() {
        if (pos == 350) {
        clearInterval(id);
        } else {
        pos++; 
        for (i=0; i<elem.length; i++){
            // elem[i].style.top = pos + "px"; 
            elem[i].style.left = pos + "px"; 
        }
        }
    }
}

function slideright(){
    var elem = document.getElementsByClassName("card");   
    var pos = 350;
    var id = setInterval(frame, 0.2);
    function frame() {
        if (pos == 350) {
        clearInterval(id);
        } else {
        pos--; 
        for (i=0; i<elem.length; i++){
            // elem[i].style.top = pos + "px"; 
            elem[i].style.left = pos + "px"; 
        }
        }
    }
}
