// // let masyvas = [1,4,3,0,9,5];

// // function lygintuvas(a,b){
// //     console.log(`a: ${a} ir b: ${b}`)
// // return a - b;

// // };
// // masyvas.sort(lygintuvas);

// // for (d of masyvas){
// //     console.log(d)
// // }

// let ezerai = [

//     [2, 'Didelis'],

//     [8, 'Ilgas'],

//     [11, 'Trumpas'],

//     [1, 'Apvalus'],

//     [7, 'Gilussssssss']

// ]

// // console.log(ezerai.slice());

// // function lygintuvas(a, b) {    
// //     console.log('a:', a, 'b: ', b);   
// //      if (a[1].lenght > b[1].length) {        return 1;    
// //     } else if (a[1].lenght < b[1].length) { 
// //                return -1;    
// //     } else {        return 0;    }}


// // ezerai.sort(lygintuvas);
// // console.log(ezerai);

// function ezeretuvas(a, b) {

//     console.log('a:', a, 'b: ', b);

//     if (a[1].length > b[1].length) {

//         return 1;

//     } else if (a[1].length < b[1].length) {

//         return -1;

//     } else {

//         return 0;

//     }

// }
// ezerai.sort(ezeretuvas);
// console.log(ezerai);

// let newH1 = document.createElement("h1");
// let oldH1 = document.querySelector('h1')
// let body = document.querySelector('body')
// let naujas = document.createTextNode("Pirmas kartas");

// body.insertBefore(newH1,oldH1);
// // newH1.appendChild(naujas);
// // // body.appendChild(newH1);

// console.log(newH1);
// console.log(oldH1);
// console.log(body);


// //1. Sukuriam elementą

// let newH1 = document.createElement("h1");



// //2. Sukuriam text nodą

// let labasVakaras = document.createTextNode("Labas Vakaras!");



// //3. Text nodą įdedame į elementą

// newH1.appendChild(labasVakaras);



// //4. Surandam html'e tėvinį tagą į kurį dėsim elementą

// let container = document.querySelector(".container");



// //5. Į tėvą įdedame sukurtą elementą

// container.appendChild(newH1);


// for (let i = 0; i < 10; i++) {
//     let newdiv = document.createElement("div");
//     let naujas = document.createTextNode("Hello");
//     newdiv.appendChild(naujas);
//     let body = document.querySelector('body')
//     body.appendChild(newdiv);

//     if (i % 2) {
//         newdiv.style.color = 'green';
//     }
// }


// let lis = document.querySelectorAll("li");


// for (let i = 0; i < lis.length; i++){
// if (i % 3 === 0){
//     lis[i].style.color = 'green';
// }
// }



