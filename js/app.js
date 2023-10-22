// if (1==2) {
//     alert('yes')
// }else{
//     alert('No')
// }

// let num = prompt ("Please enter a number")
// console.log(Number(num) + 100)

// if (num > 0) {
//     alert("Num is a positive number");

// } else {
//     alert("Num is a negative number");
    
// }

// console.log(num % 2)

// if (num % 2 == 0) {
//     console.log(`${num} is an even number `);

// }else{
//     console.log(`${num} is an odd number `);

// }

// let name = (`my name is Tanjim Sifat `)
// let num = 16

// console.log(`${name}I am ${num} years old`)
// console.log(`${name}I am ${num} years old`)
 
// let user = {
//     name: 'Siam',
//     age: 21,
//     asStudent: true,
//     hobby: 'playing football',
//     SocialMedia: [
//         'facebook',
//         'instagram',
//         'linkedin',
// ]

// }
// console.log(user.SocialMedia[0]);

// if (1==2) {
//     alert('yes')
// }else{
//     alert('NO')
// }
// let number =prompt ('please enter a number');
// if(number>0) {

//     alert('number is a positive value')

// }else if (number == 0) {

//     alert('this is a nutral number')

// }else{

//     alert('number is a negative value')

// }
// if (Number(number) % 2 == 0) {
//     console.log(`this is an even number`)
// }else{
//     console.log(`this is an odd number`)
// }



// function sscResult(profileName , userMarkes) {

//     let marks = userMarkes
//     let name = profileName;

//     if(marks >= 80 && marks <= 100) {
//         document.write(`Ohh SORRY ${name} your grade is ` + 'A+')
    
//     }else if(marks >= 70 && marks <= 79) {
//        document.write(`Bad luck ${name} your grade is ` + 'A')
    
//     }else if(marks >= 60 && marks <= 69) {
//         document.write(`${name} your grade is ` + 'A-')
    
//     }else if(marks >= 50 && marks <= 59) {
//         document.write(`${name} your grade is ` + 'B')
    
//     }else if(marks >= 40 && marks <= 49) {
//         document.write(`${name} your grade is ` + 'C')
    
//     }else if(marks >= 33 && marks <= 39) {
//         document.write(`${name} your grade is ` + 'D')
    
//     }else { 
//         document.write(`Congratulation ${name} your grade is ` + 'F')
    
//     }
// }

// sscResult("Kawser Siam" , 57);

// sscResult("Tanjim Sifat" , 87);



//* CHANGE HADDING START

 let changeHading = document.querySelector(".changeHading h1")
 let clickBtn = document.querySelector(".clickBtn")

function textChange() {
     changeHading.innerHTML = 'I am a Web Designer'
}
 clickBtn.addEventListener("click" , textChange)



//*ON
let btnOn = document.querySelector(".btnOn")
let img = document.querySelector("img")

function turnOnLight () {
    img.src="./img/on.jpg"
}

btnOn.addEventListener('click', turnOnLight)

//*OFF
let btnOff = document.querySelector(".btnOff")

function turnOffLight() {
    img.src="./img/off.jpg"
}

btnOff.addEventListener("click" , turnOffLight)