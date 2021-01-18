var lockscreen = false;
var forim = document.querySelector('.screen')
var upside = document.getElementById('top') 
var datebar = document.getElementById('datebar')
// var tolock = document.getElementById('u')

var unlck = document.getElementById('unlock')
function openlock() {
  
    if (lockscreen) {
        // console.log('dfhsgdjkl')
            
            upside.style.display="flex"
            datebar.style.display = "flex"
            forim.style.backgroundImage= "url(wallpaper4.jpg)"
            forim.style.backgroundRepeat= "no-repeat"
            forim.style.backgroundSize = "cover"
            unlck.style.display="block"
            
            // forim.style.transition="10s"
            // forim.style.transitionTimingFunction ="ease"
    
       

       
       


    } else {
        upside.style.display="none"
        forim.style.background= "black"
        datebar.style.display = "none"
        unlck.style.display="none"
        // secscreen.style.display="none"
        // forim.style.display="none"
      

    }
    lockscreen = !lockscreen
}
setInterval(function dates(){
    var prestime = new Date()
    var timehours = prestime.getHours()
    var timemin = prestime.getMinutes()
    // var ton = timehours >=12 ? 'am' | 'pm'
    // timehours = timehours % 12
    // var timemin = prestime.getMinutes()
    // var sctime = 
    var confirmdate;
    var curtime = timemin.toString().length;
    if(curtime == '1'){
        confirmdate =timehours + ':0' + timemin
        // return
    } else{
        confirmdate=timehours + ':'+ timemin
        // return
    }
    document.getElementById('condate').innerText = confirmdate
    document.getElementById('hometime').innerText = confirmdate



},1000)


var passcreen = false;
var secscreen = document.querySelector('.screen2')
var pins = document.getElementById('pins')

var upside2 = document.getElementById('top2')
function showlock (){
    if(passcreen){
        secscreen.style.display="block"
        // secscreen.style.backgroundImage= "url(wallpaper4.jpg)"
        // secscreen.style.backgroundRepe/at= "no-repeat"
        // secscreen.style.backgroundSize = "cover"
        upside2.style.display="flex"
        // secscreen.style.zIndex="-200"
        unlck.style.display="block"
        pins.style.display="block"
        // pins.style.zIndex="400"
        // pins.style.filter="blur(0)"
        // secscreen.style.filter="blur(1px)"
        forim.style.display="none"
        
    }
    else{
        secscreen.style.display="none"
        upside2.style.display="flex"
        datebar.style.display = "flex"
        forim.style.backgroundImage= "url(wallpaper4.jpg)"
        forim.style.backgroundRepeat= "no-repeat"
        forim.style.backgroundSize = "cover"
        pins.style.display="none"
      

    }
    passcreen = !passcreen


    
}
var inp = document.getElementById('showpin')
var sc3 = document.getElementById('screen3')

function pinsdigits(nums){
    
        inp.value == ''
        //
            inp.value += nums
            
        // inp.innerText.replace(/nums/g, "*")
        //    inp.innerText+= 
            console.log(nums)
             
    //     console.log(tosnake)
            // return
        // if(inp.innerText=="1122"){
        //    alert('Open')
        //     return
        // }
        // else{
        //     alert('wrong!')
        // }
    
}
var homescreen = false;
var screenpas; 
function dishomepage(){
    screenpas=document.getElementById('screenpas')
    var top3 = document.getElementById('top3')
    if(homescreen){
        if(inp.value=='1234'){
            upside2.style.display="flex"
            // upside2.style.color="red"
            // sc3.style.Transition="2s"
            sc3.style.display="block"
            sc3.style.backgroundSize="cover"
            sc3.style.backgroundRepeat="no-repeat"
            sc3.style.backgroundPosition="center"
            top3.style.display="flex"
            secscreen.style.display="none"
           
            
        }
        else{
            // inp.style.transition="2s"
            // screenpas.style.display="inline"

            screenpas.innerHTML= "Wrong password, please try again!"
            screenpas.style.color="red"

            console.log(screenpas)
            inp.value=''
            
        
            
        //     sc3.style.display="none"
        // secscreen.style.display="block"
        // console.log('invalid pin!')
        }
       
    }
    // else{
    //     sc3.style.display="none"
    //     secscreen.style.display="block"
    //     console.log('invalid pin!')
    // }
    homescreen =!homescreen
    // if(inp == '1234'){
    //     secscreen.style.display="none"
    //     sc3.style.display="block"
    //     console.log('gbdsjD')

    // }
    // else{
    //     secscreen.style.display="block"

    //     // return;
    // }
}
var callscreen = false;
var sc4;
function showcallscreen(){
     sc4 = document.querySelector('.screen4')
    if(callscreen){
      sc4.style.display="block"
      sc3.style.display="none"
      console.log('hello there')
    }
    else{
        sc3.style.display="block"
        // sc4.style.display="none"
    }
    callscreen= !callscreen
}
var dial= document.getElementById('dialpad')
var di=false;
// dialpad = 
function dialpad(){
    if(di){
        dial.style.display="block"
        dial.style.background="white"
    // $('#fordial').click(function(){
    //     var dial =  document.getElementById('dialpad')
    //     dial.style.display="block"
    // })
    }else{
        dial.style.display="none"
    }
      di =!di
}

var dinp = document.getElementById('diinp')

function inputdial(inps){
    dinp.value == ''
     dinp.value+= inps
    console.log(dinp)

}
