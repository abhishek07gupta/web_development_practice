console.log("welcome to spotify");
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif=document.getElementById("playGif");
let songs=[
    {songName: "let me love you" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "helo" , filePath:"songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "let me love you" , filePath:"songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "let me love you" , filePath:"songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "let me love you" , filePath:"songs/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "let me love you" , filePath:"songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "let me love you" , filePath:"songs/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "let me love you" , filePath:"songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "let me love you" , filePath:"songs/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "let me love you" , filePath:"songs/10.mp3" , coverPath: "covers/10.jpg"}
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