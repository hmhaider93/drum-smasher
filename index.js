var allButtons = document.querySelectorAll(".drum");

for (var x = 0 ; x < allButtons.length ; x++){
    allButtons[x].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;

        settingUpAudio(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event){
    settingUpAudio(event.key);
    addAnimation(event.key);
});




function settingUpAudio(key){
    switch (key) {
        case "w":
            var myAudio = new Audio("sounds/tom-1.mp3");
            myAudio.play();
            break;
        case "a":
            var myAudio = new Audio("sounds/tom-2.mp3");
            myAudio.play();
            break;
        case "s":
            var myAudio = new Audio("sounds/tom-3.mp3");
            myAudio.play();
            break;
        case "d":
            var myAudio = new Audio("sounds/tom-4.mp3");
            myAudio.play();
            break;
        case "j":
            var myAudio = new Audio("sounds/crash.mp3");
            myAudio.play();
            break;
        case "k":
            var myAudio = new Audio("sounds/snare.mp3");
            myAudio.play();
            break;
        case "l":
            var myAudio = new Audio("sounds/kick-bass.mp3");
            myAudio.play();
            break;
    
        default:
            break;
    }
}

function addAnimation(keyPressed){

    document.querySelector("." + keyPressed).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + keyPressed).classList.remove("pressed");
    },100)

}