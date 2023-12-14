var bluecar=document.getElementById("bluecar");
var redcar=document.getElementById("redcar");
var result=document.getElementById("result");
var score=document.getElementById("score");
var game=document.getElementById("game");
var counter=0;
bluecar.addEventListener("animationiteration",function(){
    var random=((Math.floor(Math.random()*3))*130)
    bluecar.style.left = random+ "px";
    counter++;
})

window.addEventListener("keydown",function(e){
    if(e.keyCode =="39"){
        var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
        if(redcarleft<260)
        {
            redcar.style.left = (redcarleft+130) + "px";
        }
    };
    if(e.keyCode=="37"){
        var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
        if(redcarleft>0)
        {
            redcar.style.left = (redcarleft-130) + "px";
        }
    }
})

setInterval(function Gameover(){
    var bluecarTop= parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"));
    var bluecarleft=parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var redcarleft=parseInt(window.getComputedStyle(redcar).getPropertyValue("left"));
    if((bluecarleft===redcarleft) && (bluecarTop>250) && (bluecarTop<450)){
        result.style.display="block";
        game.style.display="none";
        score.innerHTML = `Your score is ${counter}`;
        counter=0;
    }
},3)