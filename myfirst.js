// alert("Welcome to my world")
// var message = "Hello World";
// var number = 12345678;
// var arr = [];
// var obj = {};
// var func = function beta() {};
// // var fruit1 = "mango";
// // var fruit2 = "orange";
// // var fruit3 = "Apple";

// var fruits = ['Mango','Orange', 'Apple'];
// alert(fruits[0]);
// alert(fruits[1]);
// alert(fruits[2]);

// //How to change the index of an array to another value
// console.log(fruits[3]="Watermelon");
// console.log(fruits[4]="Grapes");
// console.log(fruits[5]="Banana");
// console.log(fruits[15]="yellow");
// console.log(fruits)




// // //How to know the data type
// // console.log(typeof(message))
// // console.log(typeof(number))
// // console.log(typeof(arr))
// // console.log(typeof(obj))
// // console.log(typeof(func))

// // //Data type (Object)
// // var obj = {
// //     name: 'Kaffy',
// //      eyes: 0, 
// //      age:12, phone: 12345,
// //     canSee:function() {
// //         if (this.eyes < 2){
// //             return "This person cannot see"
// //         }else {
// //             return "This person can see"
// //         }


// //     }
// // }
// // alert(obj.canSee())
// // alert(obj.complexion="Dark")
// // console.log(obj)




// // var obj = {
// //     name: "ade, olu",
// //     level: "level one",
// //     school: "sqi ict",
// //     complexion: "Dark",
// //     leg: 0,
// //     canWalk: function(){
// //         if (this.leg<2){
// //             return "This person cannot walk"
// //         }else{
// //             return "This person can walk"
// //         }

// //     }
// // }
// // console.log(obj.canWalk())
// // console.log(obj.height = 200)
// // console.log(obj)

// // var myName= "Kawthar";
// // alert(typeof(myName))

// var Names = ["Ade ", "ola ", "Jumoke "]
// alert(Names[1])
// alert(Names[3]= "Bukola")
// alert(Names)
// var last = {
//     name: "Olaide",
//     eyes: 2,
//     complexion: "light",
//     leg: 2,
//     hand: 0,
//     canhold: function(){
//         if(this.hand < 2){
//             alert("cannot hold")
//         }else{
//             alert("can hold")
//         }


//     }
// }
// console.log(last)
// alert(last.canhold)
// var ask = prompt("enter your full name");
// alert("you are welcome Dear " + ask)
// var like = prompt("What would you like to Order for?, We have Amala and Egusi, Pounded Yam, Efo riro, Jollof Rice");
// alert("Okay! your "+ like + " would be ready in 20 minutes" )
// var address = prompt("Kindly enter your address where the food would be delivered to")
// alert("Thank you for Patronising us, payment should be made on point of delivery")

// var age = prompt("What is your age");
// if (age < 18){
//     alert("You cannot attend this event");
// }else if(age>18 && age<21){
//     alert("you can enter but you cannot drink")
// }else{
//     alert("you can attend this event and drink as you wish..Enjoy!")
// }
// var age = prompt("Enter your age");
// alert(age)
// if (age<0){
//     alert("Error!, age cannot be negative valeu")
// }else if(age=21){
//     alert("Happy 21st Birthday!")
// }else if(age/2=1){
//     alert("Your age is odd!")
// }
// else{
//     alert("Your age is a perfect square!")
// }
// var guess = prompt("Guess a number");
// if (guess < 7){
//     alert("Too low!, try again")
// }else if (guess > 7){
//     alert("Too high, try again")
// }else{
//     alert("you are correct")
// }


//assignment operators
// 1. =
//2. +=
//3. -=
//4. /=
//5. %=

//arithmetic operators(+,-,%,/,*)
//comparison operators(<, >, <=, >=, ==, ===, !=)

// var a = 2;
// var b = 2;
// var ans = a > b && a != b && ( a==b || a < b && b==a);
// // var ans = a = b || 
// console.log(ans)

//string operator
//e.g var a ="10";
//     var b = 10;
// var ans = a +b;
// console.log(ans)

// string literal

// var a ="my name is";
// var b = "kawthar";

// var ans = `${b} ${a} and I am 12 years old`;
// //or
// c = a + " " + b + " " + "and I am 10 years old";
// console.log(ans, 1)
// console.log(c, 2)
//logical operators
//OR (||) - return
// AND (&&) - 
// not - !

// ternary operators
// var a = 5;
// var b = 5;
// var ans = a ==b ? a = true : a=false;
// console.log(ans)

//Functions
// function writeName(){
//     console.log("Vic")
//     console.log("Vic")

// }
// writeName()
// Parameterised Functions

// function writeNames(name1,name2,name3){
//     console.log(name1)
//     console.log(name2)

// }
// writeNames("Vic","Teslim" ,"Kawthar")

// Variable Scope: 

// 1. local Variable
// 2. global variable: variable declared outside your function, they are declared globally and they can be used by other functions

//Event is an action performed by a browser;
//Event handler is the intermediary between an even and a function, it will carry the same name as the function, its the one that'll invoke the function

// function names(){
//     document.getElementById('my3').value="33"

// }
// DOM MANIPULATION
// function create(){
//     var text = document.getElementById('val1').value
//     var tag = document.getElementById('slct').value
//     var element = document.createElement(tag);
//     element.innerHTML = text;
//     // document.body.appendChild(element);

//     if(tag == "list"){
//          var list = document.body.appendChild(document.createElement('li'));

//          list.innerHTML= text;
//         document.body.appendChild(list)
//             return;
//     }
//     // element.classList.add('text-danger');
//     document.body.appendChild(element);
// }


// 




// function create(){
//     var text = document.getElementById('val1').value;
//     var tag = document.getElementById('slct').value;
//     var mynew = text;
//     var element = document.createElement(tag);
//     if (tag == "ul"){
//         element.innerHTML = text
//         element.innerHTML = "<input type=text style='width:400px; height: 100px; border:1px solid red'>";

//         // document.body.appendChild(text)
//         document.body.appendChild(element );
//     }


// }
// function create(){
//     var text = document.getElementById('val1').value;
//     var tag = document.getElementById('slct').value;
//     var element = document.createElement(tag);
//     element.innerHtml = text;
//     if(tag == "ul"){
//         var list = document.createElement('li');
//         list.innerHTML= text;
//         document.body.appendChild(list)

//     }
