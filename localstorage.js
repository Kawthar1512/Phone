var mytable = document.getElementById('tablebody');
var totalcard = [];
var cardPin;
var lastNum = 0;
var num = -1;
var localst;
var pin;


function Generate() {
    var type = document.getElementById('namess').value;
    var am = document.getElementById('amount').value;
    document.getElementById('pin').value = pin;

    var card = {
        network: "",
        amount: "",
        pin: ""
    }
    // var index = 0
    

    if (type == "" || am == "" ) {
        
        // setTimeout(function)
        // pin="";
        document.getElementById('tablebody').innerText = "";
        alert('Dear Valued Customer, please in the Form below to generate your pin')
      
        // document.getElementById('pin').value = "";
        // document.getElementById('pin').style.display="none";

        // alert('fill in the details')\
        return

    }
    else { //that is if the inputs are not empty
        console.log((document.getElementById('amount').value.length))
        // i.e if the amount input value is less than zero OR the length is zero
        if (document.getElementById('amount').value <= 0 || document.getElementById('amount').value.length== 0){
            alert('Amount: Invalid!')
            return
        }
        // document.getElementById('tablebody').innerHTML = "";
        // then genefrate the pin
        pin = Math.floor((Math.random() * 1000000000000000));
        
        setTimeout(function showanim() {
            document.getElementById('anima').style.display = "block";
    
            // console.log('hhhhhhhhhhhhhhhhhhhhhh')
        }, 1000)
        // i used this to hide the animation after its load
        setTimeout(function hideanim() {
            document.getElementById('anima').style.display = "none";
    
            // console.log('hhhhhhhhhhhhhhhhhhhhhh')
        }, 3000)
        setTimeout(function showpin() {
            document.getElementById('pin').style.display = "block";
            
            document.getElementById('pin').value = pin
        }, 5000)

    }
    card.network = type;
    card.amount = am;
    card.pin = pin;

    totalcard.push(card)
    console.log(type)
    console.log(totalcard)



    localStorage.setItem('voucher', JSON.stringify(totalcard));
}

function tester(ele){
    console.log(ele)
    let num = ele.toString();
    // for (let i = 0; i < num.length; i++){
    //     if()
    // }
    return num.includes("--")
}

console.log(JSON.parse(localStorage.getItem('voucher')));
type = document.getElementById('namess').value = "";
am = document.getElementById('amount').value = "";
pin = document.getElementById('pin').value = "";
localst = JSON.parse(localStorage.getItem('voucher'));
console.log(localst)


function distable() {
    
    localst = JSON.parse(localStorage.getItem('voucher'));
    if(localst.length == 0){
        alert("Dear Customer, You don't have any transaction history")
        return
    }
    document.getElementById('fortable').style.display="block"
    mytable.innerHTML = "";
    console.log(localst);
    for (var i = 0; i < localst.length; i++) {
        var tablerow = document.createElement('tr');
        tablerow.setAttribute('id', `tbrow${i}`);
        var serial = document.createElement('td');
        var cardNet = document.createElement("td");
        var cardAmt = document.createElement("td");
        cardPin = document.createElement("td");
        var rowbtn = document.createElement("td");
        lastNum++
        serial.append(lastNum)
        cardNet.append(localst[i].network);
        cardAmt.append(localst[i].amount);
        cardPin.append(localst[i].pin);
        var button = document.createElement('button');
        button.setAttribute('onclick', `deletedd(${i})`)
        button.innerHTML = "Delete";

        tablerow.appendChild(serial);
        tablerow.appendChild(cardNet);
        tablerow.appendChild(cardAmt);
        tablerow.appendChild(cardPin);
        tablerow.appendChild(button);
        mytable.appendChild(tablerow);

        console.table(localst[i].network, localst[i].amount, localst[i].pin)
        console.log(i)





    }
    num++
    lastNum = 0;
}

//function to delete table
function deletedd(del) {
    var dele = JSON.parse(localStorage.getItem('voucher'))
    dele.splice(del, 1)
    totalcard = dele
    localStorage.setItem('voucher', JSON.stringify(totalcard));
    document.getElementById(`tbrow${del}`).style.display = "none"


}

lightmode = false;
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
}
lightmode = JSON.parse(localStorage.getItem('lightmodes'))
darkmodes(1)