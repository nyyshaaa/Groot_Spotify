let songIndex=0;
let audioElement=new Audio("songs/Play With Fire.mp3");
console.log(audioElement)
let mainPlayCircle=document.getElementById("mainPlay");
let songProgress=document.getElementById("songProgress")
let gif=document.getElementById("gif")


let songs=[
    {songName:"Play With Fire",filePath:"songs/Play With Fire.mp3",coverPath:"covers/play with fire.jpg"},
    {songName:"Fix You",filePath:"songs/Fix_You.mp3",coverPath:"images/1.jpg"},
    {songName:"In The End",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Kyun Dil Mera",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Let Go",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Further than The Planes Fly",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Sing It With Me",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Way Back Home",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"On & On",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Castle",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Runaway",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"Tu Muskuraye",filePath:"songs/1.mp3",coverPath:"images/1.jpg"},
    {songName:"It's Nice To Have A Friend",filePath:"songs/1.mp3",coverPath:"images/1.jpg"}
]

mainPlayCircle.addEventListener('click',()=>{
    if(audioElement.currentTime<=0 || audioElement.paused){
        audioElement.play();
        mainPlayCircle.classList.remove('fa-play-circle');
        mainPlayCircle.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        mainPlayCircle.classList.remove('fa-pause-circle');
        mainPlayCircle.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Listen to audio element
audioElement.addEventListener('timeupdate',()=>{
    //update progressBar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    songProgress.value=progress

})

songProgress.addEventListener('change',()=>{
    audioElement.currentTime=(songProgress.value * audioElement.duration)/100
})



