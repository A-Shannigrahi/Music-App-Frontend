console.log("Welcome to High on Tunes");

let audioelement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("progressbar");

let gif=document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songIndex = 1;
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    {songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    
];

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

//to play/pause the music 
masterPlay.addEventListener("click",() => {
    if (audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//event Timeupdate and updating the progress bar

audioelement.addEventListener('timeupdate',() => 
           {
               
               progress = parseInt((audioelement.currentTime/audioelement.duration)* 100); 
               myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',() => {
    audioelement.currentTime = myProgressBar.value * audioelement.duration/100;

});



const makeAllPlays = ()=>{
    songItemPlay.forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


songItemPlay.forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songIndex}.mp3`;
        
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

previous=document.getElementById("previous");

previous.addEventListener('click',()=> {
    
    if (songIndex !==1)
    {
        songIndex-=1;
    }
    else{
        songIndex=9;
    }
    audioelement.src = `songs/${songIndex}.mp3`;
        
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
});

next=document.getElementById("next");

next.addEventListener('click',()=> {
    
    if (songIndex !==9)
    {
        songIndex+=1;
    }
    else{
        songIndex=1;
    }
    audioelement.src = `songs/${songIndex}.mp3`;
        
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
});


