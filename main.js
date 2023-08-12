var drumat=document.querySelectorAll("div.drum");

for(var i=0;i<drumat.length;i++){
    drumat[i].addEventListener("click",klikimi);
    document.addEventListener("keydown",butonat);
}

function klikimi(event){
    var shkronja=event.srcElement.textContent;
    ifat(shkronja);
    klikAnimation(shkronja);
} 
function butonat(event){
    var shkronja=event.key;
    ifat(shkronja);
    klikAnimation(shkronja);
}

// OPTION 1 for animation
//function klikAnimation(shkronja){
//     var pressedButton=document.querySelector("."+shkronja);
//         pressedButton.classList.add("onClick");
//         setTimeout(function(){
//             pressedButton.classList.remove("onClick");
//         },100)
// }

function klikAnimation(shkronja){
    for(var i=0;i<drumat.length;i++){
        if(shkronja===drumat[i].textContent){
            var drumi=drumat[i];
            drumi.classList.add("onClick");
            setTimeout(function(){
                drumi.classList.remove("onClick");
            },100);
            
        }
    }
}


function ifat(shkronja){
    if(shkronja==="w"){
        var audio=new Audio("./sounds./tom-1.mp3");
        audio.play();
    }else if(shkronja==="a"){
        var audio=new Audio("./sounds./tom-2.mp3");
        audio.play();
    }else if(shkronja==="s"){
        var audio=new Audio("./sounds./tom-3.mp3");
        audio.play();
    }else if(shkronja==="d"){
        var audio=new Audio("./sounds./tom-4.mp3");
        audio.play();
    }else if(shkronja==="j"){
        var audio=new Audio("./sounds./crash.mp3");
        audio.play();
    }else if(shkronja==="k"){
        var audio=new Audio("./sounds./kick-bass.mp3");
        audio.play();
    }else if(shkronja==="l"){
        var audio=new Audio("./sounds./snare.mp3");
        audio.play();
    }
}