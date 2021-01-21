var mm = document.querySelector('.mains')
var on;
var off;
var scr = document.querySelector('screen')
function onn(){
    if(mm===on || mm==!undefined){
        mm.style.background="black"
    }
    else{
        scr.style.backgroundImage="wallpaper1.jpg"
        scr.style.backgroundRepeat="no-repeat"
        scr.style.backgroundSize="cover"

    }
    mm=off;
}