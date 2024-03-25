var arr = [
    {songName:"Tum hi ho", url:"songs/01 Tum Hi Ho - Aashiqui 2 (Arijit Singh) 320Kbps.mp3", img:"images/aashiqui2.jpg"},
    {songName:"khamoshiyan",url:"songs/01 Khamoshiyan (Arijit Singh) 190Kbps.mp3" ,img:"images/khamoshiyan.webp"},
    {songName:"piya aye na", url:"songs/06 Piya Aaye Na - Aashiqui 2 (KK) 320Kbps.mp3", img : "images/aashiqui2.jpg"},
    {songName:"arjan velley ne", url:"songs/Arjan Vailly Ne.mp3", img:"images/animal.jpg"},
   //  {songName:"jale",url:"songs/Jale 2.mp3", img:"images/jale.jpg"},
   //  {songName:"king shit",url:"songs/King Shit.mp3", img:"images/King-Shit-1.jpg"},
   //  {songName:"pehle bhi mai", url:"songs/Pehle Bhi Main.mp3", img:"images/animal.jpg"},
   //  {songName:"zara sa", url:"songs/01. Zara Sa.mp3", img:"images/zarasa.jpg"},
    
]

var allsongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");
var play = document.querySelector("#play");
var back = document.querySelector("#back");
var next = document.querySelector("#next");

var audio = new Audio()

var selectedsongs = 0

function mainFunction(){
    var clutter = "";
arr.forEach(function(elem, indx){
    clutter += `<div class="song-card" id=${indx} >
    <div id="part1">
        <img src=${elem.img} alt="">
    <h2> ${elem.songName}</h2>
    </div>
    <h6>
       3:56 
    </h6>   
 </div>`
})

allsongs.innerHTML = clutter 

audio.src = arr[selectedsongs].url
poster.style.backgroundImage = `url(${arr[selectedsongs].img})`
}
mainFunction()

allsongs.addEventListener("click",function(dets){
   selectedsongs = dets.target.id
   play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
   mainFunction()
   play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
   flag =1;
   audio.play();
})
var flag = 0;
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        flag = 1;
        mainFunction()
        audio.play()
    }
   else{
    play.innerHTML = `<i class="ri-play-circle-fill"></i>`
        flag = 0;
        mainFunction()
        audio.pause()

   }
   next.addEventListener("click",function(){
     if(selectedsongs < arr.length -1){
        selectedsongs++
        mainFunction()
        audio.play()
     }
     else{
        next.style.opacity = 0.4
     }
   })

   back.addEventListener("click",function(){
    if(selectedsongs > 0){
       selectedsongs--
       mainFunction()
       audio.play()
    }
    else{
       back.style.opacity = 0.4
    }
  })

})