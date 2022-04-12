// const ezerai = [

//     [2, 'Didelis'],

//     [44, 'Ilgas'],

//     [11, 'Trumpas'],

//     [9, 'Apvalus'],

//     [1, 'Gilus']

// ];



// function ezeretuvas1(a, b) {
//     return a[0] - b[0];
// }

// console.log(ezerai.slice().sort(ezeretuvas1));
// console.log(ezerai.slice().sort( (a,b) => a[0]-b[0]));
// //----------------------------------------------------------

// function ezeretuvas1(a, b) {

//     return a[0] - b[0];

// }

// function ezeretuvas(a, b) {

//     console.log('a:', a, 'b: ', b);

//     if (a[1] > b[1]) {

//         return 1;

//     } else if (a[1] < b[1]) {

//         return -1;

//     } else {

//         return 0;

//     }

// }

// console.log(ezerai.slice().sort(ezeretuvas1));

// console.log(ezerai.slice().sort((a, b) => a[0] - b[0]));

// console.log(ezerai.slice().sort((a, b) =>{

//     if (a[1] > b[1]) {

//         return 1;

//     } else if (a[1] < b[1]) {

//         return -1;

//     } else {

//         return 0;

//     }

// }));

//-------------------------------------------

const spausti = document.querySelector('button');
console.log(spausti);

spausti.addEventListener('click', e => {
console.log(e);
spausti.style.color = 'green';

})

spausti.addEventListener('mouseover', e => {
    console.log(e);
    spausti.style.background = 'red';    
    
    })
    spausti.addEventListener('mouseout', e => {
        console.log(e);
        spausti.style.background = 'white';    
        
        })