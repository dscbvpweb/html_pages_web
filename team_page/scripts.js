// var ul;
// var liItems;
// var imageNumber;
// var imageHeight;

// console.log(document.getElementById('upArrow'))
// document.getElementsByClassName('upArrow')[0].addEventListener('click', slider(ul));

// function init(){

//     ul = document.getElementById('team-list');
//     liItems = ul.children;
//     imageNumber = liItems.length;
//     imageHeight = liItems[0].children[0].offsetHeight;
//     ul.style.height = parseInt(imageHeight * imageNumber) + 'px';
// }

// function slider(ul){ 
//     animate({
//         delay:2,
//         duration: 200,
//         delta:function(p){return Math.max(0, -1 + 2 * p)},
//         step:function(delta){
//             ul.style.top = '-' + parseInt(currentImage * imageHeight + delta * imageHeight) + 'px';
//     },
//         callback:function(){
//             currentImage++;
//         // if it doesn’t slide to the last image, keep sliding
//             if(currentImage < imageNumber-1){
//                 slider(ul);
//         }
//        // if current image it’s the last one, it slides back to the first one
//             else{
//                 var topPosition = (imageNumber - 1) * imageHeight;
//                // after 2 seconds, call the goBack function to slide to the first image 
//                 setTimeout(function(){goBack(topPosition)},2000); 
//                 setTimeout(function(){slider(ul)}, 4000);
//             }
//         }
//     });
// }

// // document.getElementById('upArrow').addEventListener('click', slider(ul));

// function goBack(topPosition){
//     currentImage = 0; 
//     var id = setInterval(function(){
//         if(topPosition >= 0){
//             ul.style.top = '-' + parseInt(topPosition) + 'px';
//             topPosition -= imageHeight / 10;
//         }
//         else{
//             clearInterval(id);
//         } 
//     }, 17);
// }

// window.onload = init()

carousel = (function(){
    var box = document.querySelector('.carouselbox');
    var next = document.querySelector('#next');
    console.log(next)
    var prev = document.querySelector('#prev');
    var items = box.querySelectorAll('.content li');
    var counter = 0;
    var amount = items.length;
    var current = items[0];
    // var upElem = items[amount-1];
    // var downElem = items[1];

    box.classList.add('active');
    
    function navigate(direction) {
        current.classList.remove('current');
        // upElem.classList.remove('oneUp');
        // downElem.classList.remove('oneDown');
        counter = counter + direction;

        if (direction === -1 && 
            counter < 0) { 
            counter = amount - 1; 
        }
        if (direction === 1 && 
            !items[counter]) { 
            counter = 0;
        }
        
        // onePlus = counter - 1;
        // oneMinus = counter + 1;
        // upElem = items[onePlus];
        // downElem = items[oneMinus];
        // current = items[counter];
        current.classList.add('current');
        // upElem.classList.add('oneUp');
        // downElem.classList.add('oneDown');
    }
    next.addEventListener('click', function(ev) {
        navigate(1);
    });
    prev.addEventListener('click', function(ev) {
        navigate(-1);
    });
    navigate(0);
})();

