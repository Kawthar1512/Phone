

function Generate() {

    var type = document.getElementById('namess').value;
    var am = document.getElementById('amount').value;
    // var pin = document.getElementById('pin').value;
    var pin = document.getElementById('pin').innerHTML = Math.floor((Math.random() * 1000000000000000))
    document.getElementById('pin').value = pin;
    var totalcard = [];
    var card = {
        network: "",
        amount: "",
        pin: ""
    }
    var index = 0
    card.network = type;
    card.amount = am;
    card.pin = pin;
    setTimeout(function showanim() {
        document.getElementById('anima').style.display = "block";

        // console.log('hhhhhhhhhhhhhhhhhhhhhh')
    }, 1000)
    setTimeout(function showanim() {
        document.getElementById('anima').style.display = "none";

        // console.log('hhhhhhhhhhhhhhhhhhhhhh')
    }, 2000)


    totalcard.push(card)
    console.log(type)
    console.log(totalcard)

    setTimeout(function showpin() {

        if (type == "" && am == "") {
            // setTimeout(function)
            document.getElementById('tablebody').innerHTML += `<tr><td></td><td></td><td></td></tr>`
            document.getElementById('pin').value = "";
            // document.getElementById('pin').style.display="none";

            // alert('fill in the details')

        }
        else {
            document.getElementById('tablebody').innerHTML += `<tr><td>${type}</td><td>${am}</td><td>${pin}</td><td><button style="background:red; color:white; border:none;padding:10px" onclick=remove(${index})>Delete</button></td></tr>`

        }
        document.getElementById('pin').style.display = "block";

    }, 3000)

    index++
    localStorage.setItem('Voucher', JSON.stringify(totalcard))
    console.log(JSON.parse(localStorage.getItem('Voucher')))
    // document.getElementById('')
}
var type = document.getElementById('namess').value = "";
var am = document.getElementById('amount').value = "";
var pin = document.getElementById('pin').value = "";

function deltable(){
    var out = JSON.parse(localStorage.getItem('card'))
    out.splice(nu,1)
    totalcard = out
    localStorage.setItem('card',JSON.stringify(totalcard));
    document.getElementById(``)
}

var lightmode = false;

function darkmodes() {
    if (lightmode) {
        document.querySelector('body').style.background = "rgba(37, 37, 37)";
        document.getElementById('toggle').style.background = "black";
        document.getElementById('toggle').style.color = "white";

        // document.getElementById('tablebody').innerHTML += `<tr style="color:white"><td>${type}</td><td>${am}</td><td>${pin}</td><td><button style="background:red; color:white; border:none;padding:10px" onclick=remove(${index})>Delete</button></td></tr>`
        document.getElementById('tablebody').style.color = "white";
        document.getElementById('toggle').innerText = "Change to light mode";
        console.log('wwwwwwww');
        lightmode = !lightmode;
        localStorage.setItem('lightmodes', true)
    }
    else {
        document.querySelector('body').style.background = "white";
        document.getElementById('toggle').style.background = "white";
        document.getElementById('toggle').style.color = "black";
        // document.getElementById('tablebody').style.color="white";
        document.getElementById('toggle').innerText = "Change to dark mode";
        document.getElementById('tablebody').style.color = "black";
        localStorage.setItem('lightmodes', false)
        lightmode = true;


    }
    // if(s != 1){
    //     lightmode = !lightmode
    //     localStorage.setItem('lightmodes', lightmode)
    // }
}
lightmode = JSON.parse(localStorage.getItem('lightmodes'))
darkmodes(1)

// function remove(val){
//     alert(val)
// }


    // console.log(totalcard)

