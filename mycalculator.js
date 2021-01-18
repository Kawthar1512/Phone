// problem 1 - we need a way to assing a click listener to 
// all buttons
// steps to solving problem 1 
// - 1) get all element with class name of number
// - 2) in your html code, replace the id of all element of
// class number with an attribute data-value (anything you like) 
// then the value of the attrubute should be the number
//  - 3) loop through the elements of class number and assign an
// onclick listener to each of them
// - 4) the click listener should simply get the attribute 
// data-value and append it to the innertext of the scnd-value
// element

// function seven(){
//     document.getElementById('7').innerHTML
// }
function getfirstvalue() {
    return document.getElementById("first-value").innerText;
}
function printfirstvalue(num) {
    document.getElementById("first-value").innerText = num;

}
function getscndvalue() {
    return document.getElementById("scnd-value").innerText;
}
function printscndvalue(num) {
    if (num == "") {
        document.getElementById("scnd-value").innerText;
    }
    else {
        document.getElementById("scnd-value").innerText = getFormattedNumber(num);

    }

}
function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printfirstvalue("");
            printscndvalue("");
        }
        else if (this.id == "backspace") {
            var output = reverseNumberFormat(getscndvalue()).toString();
            if (output) {
                output = output.substr(0, output.length-1);
                printscndvalue(output);
            }
        }
        else{
            var output = getscndvalue();
            var history = getfirstvalue();
            if(output!=""){
                output = reverseNumberFormat(output);
                history = history + output;
                if(this.id=="="){
                    var res =eval(history);
                    printscndvalue(res);
                    printfirstvalue("")
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getscndvalue());
        if (output != NaN) {
            output = output + this.id;
            printscndvalue(output);
        }
    })
}

// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
//   };

//   function updateDisplay() {
//     // select the element with class of `calculator-screen`
//     const display = document.querySelector('#scnd-value');
//     // update the value of the element with the contents of `displayValue`
//     display.value = calculator.displayValue;
//   }
  
//   updateDisplay();
  