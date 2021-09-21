

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);

    if(!audio) return;
    //without this line, we cannot hit the key over and over again.
    //Instead, we have to wait until the audio is over
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');


    const keys = document.querySelectorAll('.key');
    keys.forEach((key) => key.addEventListener('transitionend', function(e) {
        //we only want to remove the transform effect
        if(e.propertyName !== 'transform') return;

        //this is pointing to key because addEventListener is on key
        this.classList.remove('playing');
    }))
})
