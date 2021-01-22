var lockscreen = false;
var forim = document.querySelector('.screen')
var upside = document.getElementById('top')
var datebar = document.getElementById('datebar')
// var tolock = document.getElementById('u')

var unlck = document.getElementById('unlock')
var hnav = document.getElementById('homenav')
function openlock() {

    if (lockscreen == false) {
        // console.log('dfhsgdjkl')

        upside.style.display = "flex"
        datebar.style.display = "flex"
        forim.style.backgroundImage = "url(wallpaper4.jpg)"
        forim.style.backgroundRepeat = "no-repeat"
        forim.style.backgroundSize = "cover"
        unlck.style.display = "block"



        // forim.style.transition="10s"
        // forim.style.transitionTimingFunction ="ease"







    } else {
        upside.style.display = "none"
        forim.style.background = "black"
        datebar.style.display = "none"
        unlck.style.display = "none"
        // secscreen.style.display="none"
        // forim.style.display="none"


    }
    lockscreen = !lockscreen
}
setInterval(function dates() {
    var prestime = new Date()
    var timehours = prestime.getHours()
    var timemin = prestime.getMinutes()
    // var ton = timehours >=12 ? 'am' | 'pm'
    // timehours = timehours % 12
    // var timemin = prestime.getMinutes()
    // var sctime = 
    var confirmdate;
    var curtime = timemin.toString().length;
    if (curtime == '1') {
        confirmdate = timehours + ':0' + timemin
        // return
    } else {
        confirmdate = timehours + ':' + timemin
        // return
    }
    document.getElementById('condate').innerText = confirmdate
    document.getElementById('hometime').innerText = confirmdate



}, 1000)


var passcreen = false;
var secscreen = document.querySelector('.screen2')
var pins = document.getElementById('pins')

var upside2 = document.getElementById('top2')
function showlock() {
    if (passcreen == false) {
        secscreen.style.display = "block"
        // $('#display').effect('shake')
        // secscreen.style.backgroundImage= "url(wallpaper4.jpg)"
        // secscreen.style.backgroundRepe/at= "no-repeat"
        // secscreen.style.backgroundSize = "cover"
        upside2.style.display = "flex"
        // secscreen.style.zIndex="-200"
        unlck.style.display = "block"
        pins.style.display = "block"
        // pins.style.zIndex="400"
        // pins.style.filter="blur(0)"
        // secscreen.style.filter="blur(1px)"
        forim.style.display = "none"

    }
    else {
        secscreen.style.display = "none"
        upside2.style.display = "flex"
        datebar.style.display = "flex"
        forim.style.backgroundImage = "url(wallpaper4.jpg)"
        forim.style.backgroundRepeat = "no-repeat"
        forim.style.backgroundSize = "cover"
        pins.style.display = "none"


    }
    passcreen = !passcreen



}
var inp = document.getElementById('showpin')
var sc3 = document.getElementById('screen3')

function pinsdigits(nums) {

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
function dishomepage() {
    screenpas = document.getElementById('screenpas')

    var top3 = document.getElementById('top3')
    if (homescreen == false) {
        if (inp.value == '1234') {
            upside2.style.display = "flex"
            // upside2.style.color="red"
            // sc3.style.Transition="2s"
            sc3.style.display = "block"
            sc3.style.backgroundSize = "cover"
            sc3.style.backgroundRepeat = "no-repeat"
            sc3.style.backgroundPosition = "center"
            top3.style.display = "flex"
            secscreen.style.display = "none"
            // $(".screen2").fadeOut("2000");
            hnav.style.display = "flex"
            hnav.style.display = "flex"
            hnav.style.border = "none"
            hnav.style.background = "transparent"
            // mid.style.borderColor = "white"
            // ex.style.color = "white"
            // min.style.color = "white"
            nvb.style.marginTop = "-16px"





        }
        else {
            // inp.style.transition="2s"
            // screenpas.style.display="inline"

            screenpas.innerHTML = "Wrong password, please try again!"
            screenpas.style.color = "red"

            console.log(screenpas)
            inp.value = ''



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
    homescreen = !homescreen
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
var nvb = document.querySelector('.nav-bot')
var mid = document.getElementById('middle')
var ex = document.getElementById('exit1')
var min = document.getElementById('min1')
function showcallscreen() {
    sc4 = document.querySelector('.screen4')
    if (callscreen == false) {
        sc4.style.transition = "2s"
        sc4.style.display = "block"
        sc3.style.display = "none"

        sc3.style.transition = "2s"
        console.log('hello there')
        hnav.style.display = "flex"
        hnav.style.paddingTop = "1px"
        hnav.style.marginTop = "-52px"
        mid.style.borderColor = "black"
        ex.style.color = "black"
        min.style.color = "black"
        // hnav.style.color="black"

        hnav.style.borderTop = "1px solid gray"
        hnav.style.backgroundColor = "white"
        // hnav.style.paddingTop = "3px"

        nvb.style.marginTop = "-10px"

    }
    else {
        sc3.style.display = "block"
        // return
        // sc4.style.display="none"
    }
    callscreen = !callscreen
}
var dial = document.getElementById('dialpad')
var di = false;
var cln = document.querySelector('.call-log-nav')
// dialpad = 
function dialpad() {
    if (di == false) {
        dial.style.display = "block"
        dial.style.background = "white"



        // cln.display.style.display="none"
        // $('#fordial').click(function(){
        //     var dial =  document.getElementById('dialpad')
        //     dial.style.display="block"
        // })
    } else {
        dial.style.display = "none"
    }
    di = !di
}

var dinp = document.getElementById('diinp')
var ld = document.getElementById('loading')
var sim = document.getElementById('sims')
var debut = document.getElementById('debt')
function inputdial(inps) {
    dinp.value == ''
    dinp.value += inps
    dinp.style.display = "block"
    // debut.style.display="inline"
    // sim.style.marginTop = "-50px"
    dial.style.top = "191px"
    console.log(dinp)

}
var over = document.getElementById('overlay')
var screen5 = document.querySelector('.screen5')
var audio = new Audio('ringing.wav')
var audio2 = new Audio('Sqi_college.m4a')
var seconds = document.getElementById('seconds')
var calsim = document.getElementById('callsim')
var forw = document.getElementById('callforw')
var ongoing = document.getElementById('ongoing')
var sp = dinp.value.slice(5, 13)
var mb = document.getElementById('mainbal')
function check() {
    if (dinp.value == "#124#") {
        // alert("Your balance is empty!")

        dinp.value = ''
        dial.style.display = "none"

        over.style.display = "block"
        // $('#loading').show();
        $('#loading').slideUp(2000)
        $('#loading').show()
        // $("#panel").slideToggle("slow")
        // ld.style.display = "block"

    }

    // else if(dinp.value.startsWith('*123*')&& dinp.value[0]=='#'){

    //     dinp.value = ''
    //     dial.style.display = "none"
    //     over.style.display = "block"
    //     $('#loading').slideUp(2000)
    //     $('#loading').show()
    //     $('#bal').html('Your recharge is successful!'+'Your new acc balance is <strong>100</strong>' + '<button onclick="ll()" style="margin-top:16px">OK</button>')
    // }

    else if (dinp.value.length >= 10 || dinp.value[0] == '0') {

        // alert('calling..')
        $('#dialpad').hide()
        sc4.style.display = "none"
        // $('.screen4').fadeOut('fast')
        // $('.screen5').fadeIn(1000)
        screen5.style.display = "block"
        // $('.screen5').show()
        $('#dialednum').text(dinp.value)
        hnav.style.background = "transparent"
        hnav.style.border = "none"
        ex.style.color = "white"
        min.style.color = "white"
        mid.style.borderColor = "white"
        // dinp.value=''

        setTimeout(function () {

            audio.loop = true
            audio.play();
            $('#callforw').fadeIn('slow')
            // $('#callforw')


        }, 2000)
        setTimeout(function () {

            audio.pause()
            audio.currentTime = 0
            console.log('dtooped')
            forw.style.display = "block"

            $('#callforw').fadeOut('slow')
            // ('0.05')
            // function print(txt) {
            //     document.getElementById("display").innerHTML = txt;
            //   }
            function start() {
                startTime = Date.now();
                $('#oncall').show()
                audio2.loop = true
                audio2.play()

                var timer = setInterval(function printTime() {
                    elapsedTime = Date.now() - startTime;
                    document.getElementById("seconds").innerHTML = timeToString(elapsedTime);
                }, 1000)
            }
            function timeToString(time) {
                let diffInHrs = time / 3600000;
                let hh = Math.floor(diffInHrs);

                let diffInMin = (diffInHrs - hh) * 60;
                let mm = Math.floor(diffInMin);

                let diffInSec = (diffInMin - mm) * 60;
                let ss = Math.floor(diffInSec);

                let diffInMs = (diffInSec - ss) * 1000;
                let ms = Math.floor(diffInMs);

                let formattedMM = mm.toString().padStart(2, "0");
                let formattedSS = ss.toString().padStart(2, "0");
                // let formattedMS = ms.toString().padStart(2, "0");
                return `${formattedMM}:${formattedSS}`;
            }


            start()
            // alert('audio stoped')

        }, 12000)

    }
    else if (dinp.value == '') {
        // dr.style.display="none"
        // $('#durationcall').hide()
        return
    }
    else if (mb.innerText == '') {
        // $('#oncall').css(){}
        document.getElementById('oncall').style.display="none"
        // audio2.pause()
        // audio2.currentTime = 0
        console.log('no bal')
        // return
        // forw.style.display = "block"

        // $('#callforw').fadeOut('slow')
    }
    else {
        dinp.value = ''
        dial.style.display = "none"
        over.style.display = "block"
        $('#loading').slideUp(2000)
        $('#loading').show()
        $('#bal').html('Connection Problem or invalid MMI code' + '<button onclick="ll()" style="margin-top:16px">OK</button>')

    }

    var bal = document.getElementById('bal')
    setTimeout(function showbal() {
        $('#dialpad').hide()
        $('#loading').slideUp('fast')
        // $('#loading').hide()
        // ld.style.display = "none"
        $('#bal').slideUp('fast')
        $('#bal').show()

        // bal.style.display = "block"
    }, 2000)

}




function ll() {
    bal.style.display = "none"
    over.style.display = "none"
    dr.style.display = "none"

    // 

}
// function callic(){

// }
function exit() {
    if (callscreen) {
        dinp.value = ''
        sc4.style.display = "none"
        console.log('hGHdzscsadsad')
        upside2.style.display = "flex"
        // upside2.style.color="red"
        // sc3.style.Transition="2s"
        sc3.style.display = "block"
        screen5.style.display = "none"

        hnav.style.backgroundColor = "transparent"
        hnav.style.border = "none"

        // sc3.style.backgroundSize="cover"
        // sc3.style.backgroundRepeat="no-repeat"
        // sc3.style.backgroundPosition="center"
        // top3.style.display="flex"

    }
    // else{
    //     return;
    // }

}
var dr = document.getElementById('durationcall')
function cutcall() {
    clearInterval('timer')
    var duration = document.getElementById("seconds").innerHTML

    audio2.pause()
    audio2.currentTime = 0
    console.log(duration)
    $('.screen5').hide()
    $('.screen4').show()
    dinp.value = ''
    dr.style.display = "block"
    $('#dur').text(duration)
    // 
    document.getElementById("seconds").innerHTML == ""
    hnav.style.backgroundColor = "white"
    hnav.style.border = "1px solid lightgray"
    ex.style.color = "black"
    min.style.color = "black"
    mid.style.borderColor = "black"
    return

}
// function timeToString() {
    // var time = 10000000
    // var diffInHrs = time / 3600000;
    // var hh = Math.floor(diffInHrs);

    // var diffInMin = (diffInHrs - hh) * 60;
    // var mm = Math.floor(diffInMin);

    // var diffInSec = (diffInMin - mm) * 60;
    // var ss = Math.floor(diffInSec);

    // var diffInMs = (diffInSec - ss) * 100;
    // var ms = Math.floor(diffInMs);

    // var formattedMM = mm.toString().padStart(2, "0");
    // var formattedSS = ss.toString().padStart(2, "0");
    // var formattedMS = ms.toString().padStart(2, "0");

    // return `${formattedMM}:${formattedSS}:${formattedMS}`;
//   }
