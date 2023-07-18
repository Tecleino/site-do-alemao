function showModal(){
    var element = document.getElementById("modal")
    element.classList.add("show-modal")
    var audio = document.getElementById("myAudio");
    audio.volume= 1
    audio.play();
}

function hideModal(){
    var element = document.getElementById("modal");
    element.classList.remove("show-modal");
    var audio = document.getElementById("myAudio");
    audio.pause();
}
