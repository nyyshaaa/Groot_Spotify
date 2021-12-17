let songIndex = 1;
let audioElement = new Audio("songs/Play With Fire.mp3");
let mainPlayCircle = document.getElementById("mainPlay");
let songProgress = document.getElementById("songProgress")
let gif = document.getElementById("gif")
let songItems = document.getElementsByClassName("songItem")
let songItemsPlay = document.getElementsByClassName("songItemPlay")
let mainSongName=document.getElementById("mainSongName")
// console.log(songItemsPlay)



let songs = [{
        songName: "Play With Fire",
        filePath: "songs/Play With Fire.mp3",
        coverPath: "covers/play with fire.jpg"
    },
    {
        songName: "Fix You",
        filePath: "songs/Fix_You.mp3",
        coverPath: "covers/fix you.png"
    },
    {
        songName: "In The End",
        filePath: "songs/Tommee_Profitt_Ft_Fleurie_-_In_The_End_Mellen_Gi_Remix_.mp3",
        coverPath: "covers/in the end.png"
    },
    {
        songName: "Kyun Dil Mera",
        filePath: "songs/Kyun Dil Mera - Paharganj 128 Kbps.mp3",
        coverPath: "covers/Kyun-Dil-Mera.jpg"
    },
    {
        songName: "Let Go",
        filePath: "songs/Let Go (Beau Young Prince) Music Video AMV-128k.mp3",
        coverPath: "covers/let go.jpg"
    },
    {
        songName: "Further than The Planes Fly",
        filePath: "songs/Eves-Karydas-Further-Than-The-Planes-Fly.mp3",
        coverPath: "covers/planes fly.jpg"
    },
    {
        songName: "Sing It With Me",
        filePath: "songs/JP-Cooper-Sing-It-With-Me-Ft-Astrid-S-via-Naijafinix.com_.mp3",
        coverPath: "covers/sing me.jpg"
    },
    {
        songName: "Way Back Home",
        filePath: "songs/WAY BACK HOME - SHAUN FEAT CONOR MAYNARD(BollyStatus.Com).mp3",
        coverPath: "covers/way back home.jpg"
    },
    {
        songName: "On & On",
        filePath: "songs/Cartoon - On & On (Lyrics) feat. Daniel Levi-128k.mp3",
        coverPath: "covers/cartoon on.jpg"
    },
    {
        songName: "Castle",
        filePath: "songs/Clarx+Harddope+Castle+NCS+Release].mp3",
        coverPath: "covers/castle.jpg"
    },
    {
        songName: "Runaway",
        filePath: "songs/Sick Individuals, Vigel, Nazzereene (MyRingtone.site) - Runaway.mp3",
        coverPath: "covers/runaway.jpg"
    },
    {
        songName: "Tu Muskuraye",
        filePath: "songs/Tu Muskuraye-Rochak Kohli-VlcMusic.CoM.mp3",
        coverPath: "covers/tu muskuraye.jpg"
    },
    {
        songName: "Its Nice To Have A Friend",
        filePath: "songs/Its Nice To Have A Friend .mp3",
        coverPath: "covers/nice to have a friend.jpg"
    }
]



Array.from(songItems).forEach((element, i) => {
    // console.log(element,i)
    // console.log(songs[i].songName)
    // console.log(element.getElementsByTagName("img")[0])
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

mainPlayCircle.addEventListener('click', () => {
    if (audioElement.currentTime <= 0 || audioElement.paused) {
        audioElement.play();
        mainPlayCircle.classList.remove('fa-play-circle');
        mainPlayCircle.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        mainPlayCircle.classList.remove('fa-pause-circle');
        mainPlayCircle.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to audio element
audioElement.addEventListener('timeupdate', () => {
    //update progressBar
    
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    // console.log(progress)
    songProgress.value = progress
    playNextSongOnEnd(progress)
})

function playNextSongOnEnd(progress){
    console.log(songIndex)
        if(progress===100){
            songIndex=songIndex%13
            audioElement.src=songs[songIndex].filePath
            audioElement.currentTime = 0
            mainSongName.innerHTML=songs[songIndex].songName
            audioElement.play()
            progress=0
            songIndex=songIndex+1
            // console.log(songIndex)
            
            // console.log(songIndex)
            // mainPlayCircle.classList.remove('fa-play-circle');
            // mainPlayCircle.classList.add('fa-pause-circle');
            // gif.style.opacity = 1;
        }
    
}

songProgress.addEventListener('change', () => {
    audioElement.currentTime = (songProgress.value * audioElement.duration) / 100
})


function makePlayAll() {
    Array.from(songItemsPlay).forEach((element) => {
        // console.log(element.classList)
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')

    })

}

// function makePlay(eleTarget){
//     eleTarget.classList.remove('fa-pause-circle')
//     eleTarget.classList.add('fa-play-circle')
// }

// console.log(Array.from(songItemsPlay))
Array.from(songItemsPlay).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        makePlayAll()
        // console.log(e.target.classList)
        songIndex=Number(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        // makePlay()
        audioElement.src = songs[i].filePath
        // console.log(audioElement.duration)
        audioElement.currentTime = 0
        mainSongName.innerHTML=songs[i].songName
        audioElement.play()
        mainPlayCircle.classList.remove('fa-play-circle');
        mainPlayCircle.classList.add('fa-pause-circle');
        gif.style.opacity = 1;


    })
})


document.getElementById('previous').addEventListener("click", () => {
    // console.log(songIndex)
    if(songIndex<=1){
        songIndex=1
    }else{
        songIndex=songIndex-1
    }
    audioElement.src = songs[songIndex-1].filePath
    audioElement.currentTime = 0
    mainSongName.innerHTML=songs[songIndex-1].songName
    audioElement.play()
    mainPlayCircle.classList.remove('fa-play-circle');
    mainPlayCircle.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})

document.getElementById('next').addEventListener("click", () => {
    
    songIndex=songIndex%13+1
    audioElement.src = songs[songIndex-1].filePath
    audioElement.currentTime = 0
    mainSongName.innerHTML=songs[songIndex-1].songName
    audioElement.play()
    mainPlayCircle.classList.remove('fa-play-circle');
    mainPlayCircle.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
})