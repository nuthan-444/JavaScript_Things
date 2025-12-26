import songs from "./assets/songs.js";
console.log(songs)
let currentMusic = null;
const listOfAllSong = document.getElementById("listOfAllSong");
const playPauseBtn = document.getElementById("playPauseBtn");
const musicCard = document.getElementById("song-div");
const musicCardThumbnail = document.getElementById("songImage");

function playMusic(audioPath) {

    if(currentMusic && !currentMusic.paused) {
        currentMusic.pause();
        currentMusic.currentTime = 0;
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play");
    } else {
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
    }

    currentMusic = new Audio(audioPath);
    currentMusic.play();

}

playPauseBtn.addEventListener("click",()=>{
    if(!currentMusic) return;


    if(currentMusic.paused){
        playPauseBtn.classList.remove("fa-pause");
        playPauseBtn.classList.add("fa-play");
        currentMusic.play();
    } else{
        playPauseBtn.classList.remove("fa-play");
        playPauseBtn.classList.add("fa-pause");
        currentMusic.pause();
    }

})

songs.forEach((song, idx) => {
    const oneSongDiv = document.createElement("div");
    oneSongDiv.classList.add("onesong");
    oneSongDiv.style.cursor="pointer"
    oneSongDiv.style.backgroundColor=song.bgcolor;
    const img = document.createElement("img");
    img.src = song.thumbnail;
    img.classList.add("songOfImage");

    const p = document.createElement("p");
    p.textContent = song.name;
    p.style.color=song.fontcolor;

    oneSongDiv.appendChild(img);
    oneSongDiv.appendChild(p);


    listOfAllSong.appendChild(oneSongDiv);



    oneSongDiv.addEventListener("mouseover",() => {
        oneSongDiv.style.opacity=0.8;
    })

    oneSongDiv.addEventListener("mouseout",() => {
        oneSongDiv.style.opacity=1;
    })

    oneSongDiv.addEventListener("click",()=>{
        document.querySelector("body").style.backgroundColor=song.bodyBgColor;
        musicCard.style.backgroundColor=`${song.bgcolor}`;
        musicCardThumbnail.src = song.thumbnail;
        playMusic(song.audioPath);
    })
});






