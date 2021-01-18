// var count = 4;
// while(count <=20){
//     console.log("Your count is" + count);
//     count++;
// }

// var str = "hello";
// var count  = 0;
// while(count < str.length){
//     console.log(str[count]);
//     count++;
// }
// var num = 1;
// while(num <= 10){
//     console.log(num);
//     num+=2;
// }
// var num =1;

// while (num <= 20){
//     if (num % 4 == 0){
//         console.log(num);
//     }
//     num++;
// }
// var num =100;
// while (num < 150){
//     console.log(num + 1);
//     num--;
// }
// for(var myloop = 3; myloop<6; myloop++){
//     console.log(myloop)
// }
// var str = "mystring";
// for(var b = 0; b < str.length; b++){
// console.log(str[b])
// }

var arr = [{
    name: "Teslim",
    phone: 12345,
    email: "teslim@gmail.com",
    gender: "Male",
    Hobbies: ['sleeping', 'eating', 'coding']
}, {
    name: "Tobi",
    phone: 12345,
    email: "vic@email.com",
    gender: "Male",
    Hobbies: ['Womanising', 'eating', 'coding']
},
{
    name: "Vic",
    phone: 12345,
    email: "vicku@gmail.com",
    gender: "Female",
    Hobbies: ['Writing', 'eating', 'coding']
}, {
    name: "Tomi",
    phone: 12345,
    email: "tomi@gmail.com",
    gender: "Female",
    Hobbies: ['Talking', 'eating', 'coding']
}, {
    name: "Kawthar",
    phone: 12345,
    email: "tomi@gmail.com",
    gender: "Male",
    Hobbies: ['reading', 'eating', 'coding']
}];

// for(var b = 0; b < arr.length; b++){
//     var name = arr[b].name
//    var phone = arr[b].phone
//     var email = arr[b].email
//     var gender = arr[b].gender 
//     document.getElementById('topic').innerHTML= "Students Bio Data"

//     if(arr[b].gender == "Male"){

//     document.getElementById('result').innerHTML += "His name is: " +  name + " " + "His Phone Number:" +" "+  phone +" "+ "Email:  " + email + "<br>"

//     }
//     else{
//         document.getElementById('result').innerHTML += "Her name is: " +  name + " " + "Her Phone Number:" +" "+  phone +" "+ "Email:  " + email + "<br>"

//     }
// }


// His Method 
// for (var b= 0; b < arr.length; b++ ){
//     var gender;
//     arr[b].gender == 'male' ? gender = "His" : gender = 'Her'
//     console.log(`${gender} name is ${arr[b].name}`)
// }

arr.forEach(function (element) {
    names = element.name

    var gender;
    element.gender == 'Male' ? gender = "His" : gender = "Her"
    var list = document.createElement('ol');



    element.Hobbies.forEach(function (elements) {
        // result.innerHTML += `<li>${elements}</li>`
        var list2 = document.createElement('li')
        list2.append(elements)
        list.append(list2)

    })
    console.log(list);
    var tot = (`${gender} name is ${element.name} ${gender} phone is ${element.phone} ${gender} email is ${element.email} ${gender} hobbies are `)
    document.getElementById('result').innerHTML += tot;
    document.getElementById('result').append(list)






});

// console.error("There is an error message")
// console.info("You are awesome")
// console.table(["orange", "Grape"])
// console.assert(2 > 3, "It cannont be")


// arr.forEach(function(element){
//     var names = [];
//     names.push(element.name);
//     document.getElementById('topic').innerHTML= "Students Names"
//     document.getElementById('result').innerHTML +=  names + "<br> "

// })