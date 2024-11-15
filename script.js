document.getElementById('toggle-music').addEventListener('click', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function() {
    var floatingMenu = document.querySelector('.floating-menu');
    if (window.scrollY > 200) { // Juster px etter behov
        floatingMenu.style.display = 'block';
    } else {
        floatingMenu.style.display = 'none';
    }
});
