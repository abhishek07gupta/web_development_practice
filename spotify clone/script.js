//next and previous buttons does not work if song is first played using masterPlay button
//cant pause from the menu



console.log("welcome to spotify");
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif=document.getElementById("playGif");
masterSongName=document.getElementById("masterSongName");
let songs=[
    {songName: "0 to 100 - Sidhu Moose" , filePath:"songs/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Her - Shubh" , filePath:"songs/2.mp3" , coverPath: "covers/2.jpg"},
    {songName: "Never fold - Sidhu Moose" , filePath:"songs/3.mp3" , coverPath: "covers/3.jpg"},
    {songName: "On top - Karan Aujla" , filePath:"songs/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Bloodlust - Sidhu Moose" , filePath:"songs/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "Qismat - Ammy virk" , filePath:"songs/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Love Sick - Sidhu Moose" , filePath:"songs/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "WYTB - Karan Aujla" , filePath:"songs/8.mp3" , coverPath: "covers/8.jpg"},
    {songName: "Its Ok God - Karan Aujla" , filePath:"songs/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "Let em Play - Karan Aujla" , filePath:"songs/10.mp3" , coverPath: "covers/10.jpg"}
]
let songItems=Array.from(document.getElementsByClassName('songItem'));
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    var songTimeName = new Audio(`songs/${i}.mp3`);
    //songTimeName.src=`songs[i]${i}.mp3`;
    //songTimeName.src=`songs/${i}.mp3`;
    //element.getElementsByClassName('timeStamp')[i].innerText = songTimeName.duration; //trying to set the song timing in menu.
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
        audioElement.src=`songs/${songIndex}.mp3`;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        masterSongName.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex==10){
        songIndex=1;
    }
    else{
        songIndex++;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex==1){
        songIndex=10;
    }
    else{
        songIndex--;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    masterSongName.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
})