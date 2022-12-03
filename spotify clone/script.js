console.log("welcome to spotify");
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif=document.getElementById("playGif");
let songs=[
    {songName: "Warriyo - Mortals" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma" , filePath:"songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Deaf Kev - Invincibles" , filePath:"songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & Ehide" , filePath:"songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Janji - Heroes - Tonight" , filePath:"songs/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salame-ishq" , filePath:"songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Wakanda - Marvels" , filePath:"songs/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "Undefeatable - Sion" , filePath:"songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "Love and Thunder - Thor" , filePath:"songs/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "Courtesy call - Thousand" , filePath:"songs/10.mp3" , coverPath: "covers/10.jpg"}
]
let songItems=Array.from(document.getElementsByClassName('songItem'));
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate' , ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

function makeAllPlays() {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element =>{
    element.addEventListener('click', e=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        console.log(songIndex);
        audioElement.src=`songs/${songIndex}.mp3`;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        audioElement.currentTime=0;
        audioElement.play();
    })
})