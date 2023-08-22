console.log("Hello");

let songidx = 0;
let audioele = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressBar');
let gif = document.getElementById("gif");
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "name of song 1",filepath: "song/1.mp3", coverpath :"cover/1.jpg"},
    {songName: "name of song 2",filepath: "song/2.mp3", coverpath :"cover/2.jpg"},
    {songName: "name of song 3",filepath: "song/3.mp3", coverpath :"cover/3.jpg"}
];

songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

//masterplay
masterplay.addEventListener('click',()=>{
    if(audioele.paused || audioele.currentTime<=0){
        audioele.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        Array.from(document.getElementsByClassName("songitemplay"))[songidx].classList.remove('fa-play-circle');
        Array.from(document.getElementsByClassName("songitemplay"))[songidx].classList.add('fa-pause-circle');
    }else{
        audioele.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        Array.from(document.getElementsByClassName("songitemplay"))[songidx].classList.remove('fa-pause-circle');
        Array.from(document.getElementsByClassName("songitemplay"))[songidx].classList.add('fa-play-circle');
    }
});

//Listen to events
audioele.addEventListener('timeupdate', ()=>{
    //progress seekbar
    progress = parseInt((audioele.currentTime/audioele.duration) * 100 );
    myprogressbar.value=progress;

});

myprogressbar.addEventListener('change',()=>{
    audioele.currentTime = myprogressbar.value * audioele.duration/100;
});

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
};

Array.from(document.getElementsByClassName("songitemplay")).forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        if(audioele.paused || audioele.currentTime<=0){
            songidx= parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioele.src = `song/${songidx+1}.mp3`;
            mastersongname.innerHTML = songs[songidx].songName;
            audioele.play();
            gif.style.opacity=1;
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
        }else{
            songidx= parseInt(e.target.id);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioele.src = `song/${songidx+1}.mp3`;
            mastersongname.innerHTML = songs[songidx].songName;
            audioele.pause();
            gif.style.opacity=0;
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
        }
    })
});

document.getElementById('next').addEventListener('click',()=>{
    makeAllplays();
    if(songidx>=2){
        songidx = 0;
    }else{
        songidx+=1;
    }
    audioele.src = `song/${songidx+1}.mp3`;
    mastersongname.innerHTML = songs[songidx].songName;
    audioele.currentTime = 0;
    audioele.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName("songitemplay"))[songidx].classList.remove('fa-play-circle');
    Array.from(document.getElementsByClassName("songitemplay"))[songidx].classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    makeAllplays();
    if(songidx<=0){
        songidx = 2;
    }else{
        songidx-=1;
    }
    audioele.src = `song/${songidx+1}.mp3`;
    mastersongname.innerHTML = songs[songidx].songName;
    audioele.currentTime = 0;
    audioele.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName("songitemplay"))[songidx].classList.remove('fa-play-circle');
    Array.from(document.getElementsByClassName("songitemplay"))[songidx].classList.add('fa-pause-circle');
})
