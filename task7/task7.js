var audio = document.getElementById('myaudio');
var playbtn = document.getElementById('play-btn');

function playaudio() {
    if (myaudio.paused) {
        myaudio.play();
    } else
    	myaudio.pause();
    
}

function goToVotePage(){
	window.location.href='../votePage/vote.html';
	// console.log('1');
}

function goToResultPage(){
		window.location.href='../resultPage/resultPage.html';

}

function goToHomePage(){
	window.location.href='../homePage/homePage.html';
}