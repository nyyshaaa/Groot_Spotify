let songIndex=0;
let audioElement=new Audio("songs/");
let mainPlay=document.getElementById("mainPlay");
let songProgress=document.getElementById("songProgress")


let songs=[
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Play With Fire",filePath:"songs/1.mp3",coverPath:"images/1.jpg"}
]

mainPlay.addEventListener('click',()=>{
    if(audioElement.currentTime<=0 || audioElement.paused){
        audioElement.play();
    }
})


songProgress.addEventListener('timeupdate',()=>{
    console.log("timeupdate")
})



