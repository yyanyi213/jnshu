var audio = document.getElementById('myaudio');
var playbtn = document.getElementById('play-btn');

function playaudio() {
    if (myaudio.paused) {
        myaudio.play();
    } else
    	myaudio.pause();
    
}