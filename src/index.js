let songList = [
    {
        img: "https://pagalnew.com/coverimages/title-track-chandigarh-kare-aashiqui-500-500.jpg",
        url: "https://pagalnew.com/mp3-songs/bollywood-mp3-songs/title-track-chandigarh-kare-aashiqui-128-kbps-sound.mp3"
    },

    {
        img: "https://pagalnew.com/coverimages/tera-hua-cash-500-500.jpg",
        url: "https://pagalnew.com/mp3-songs/bollywood-mp3-songs/tera-hua-cash-128-kbps-sound.mp3"
    },

    {
        img: "https://pagalnew.com/coverimages/Kusu-Kusu-Satyameva-Jayate-2-500-500.jpg",
        url: "https://pagalnew.com/mp3-songs/bollywood-mp3-songs/kusu-kusu-satyameva-jayate-2-128-kbps-sound.mp3"
    }
]



// counter set to first song from the song list
let currentSong = 0;
let pauseTime = 0;

// Reference of cover image
const img = document.querySelector('#cover-image')

// Reference of buttons
const playBtn = document.querySelector('#play-btn')
const pauseBtn = document.querySelector('#pause-btn')
const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

const audio = document.querySelector('#audio')

playBtn.addEventListener('click',()=>{
  
    img.setAttribute('src',songList[currentSong].img)
    audio.setAttribute('src',songList[currentSong].url)

    pauseBtn.classList.remove('hidden');
    playBtn.classList.add('hidden');

    if(pauseTime != 0){
        audio.currentTime = pauseTime;
        audio.play();
    }

    audio.play();
})

function songState(audio){
    pauseTime = Math.round(audio.currentTime);
    return pauseTime;
}

pauseBtn.addEventListener('click',()=>{
    audio.pause();

    songState(audio);

    pauseBtn.classList.add('hidden');
    playBtn.classList.remove('hidden');
})


nextBtn.addEventListener('click',()=>{

    currentSong++;

    img.setAttribute('src',songList[currentSong].img)
    audio.setAttribute('src',songList[currentSong].url)

    pauseBtn.classList.remove('hidden');
    playBtn.classList.add('hidden');

    audio.play();
})


prevBtn.addEventListener('click',()=>{

    currentSong--;

    img.setAttribute('src',songList[currentSong].img)
    audio.setAttribute('src',songList[currentSong].url)

    pauseBtn.classList.remove('hidden');
    playBtn.classList.add('hidden');
    
    audio.play();
})
