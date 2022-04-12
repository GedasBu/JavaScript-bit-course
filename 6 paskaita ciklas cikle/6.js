// let aa = 0;
// let bb = 0;
// let cc = 3;


// do {
//     console.log('AAA');
//     aa = 0;
//     do {
//         console.log('B');
//         aa++;
//     } while (aa < cc)
//     cc++;
//     bb++
// } while (bb < 4);


// for (let aa = 0; aa < 4; aa++) {
//     console.log('Startas')
//     for (let bb = 0; bb < 3; bb++) {
//         console.log('B');

//     }
//     console.log('Vidurys')
//     for (let cc = 0; cc < 3; cc++) {
//         console.log('C');
//     }
//     console.log('Pabaiga');

// }


// let raide = '';
// let cc = '';
// let raide1 = '';
// let ee = '';

// for (let aa = 0; aa < 1; aa++) {
//     for (let bb = 0; bb <5 ; bb++) {        
//         raide += 'A';
//         cc += ' ' + raide;       

//     }


//     for (let dd = 5; dd!=0; dd--){
//         raide1 = 'A';
//         ee += ' ' + raide1;
//         console.log(ee);
//     }

//     console.log(cc);

// };

function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log('------9a uzdavinys------')

// let i = 0;
// let pp = 0;
// let a = 0;
// for (pp; pp < 3; a = rand(5, 10)) {
//     if (a == 5) {
//         pp++;

//     }

//     for (let b = 0; b < a; b++) {
//         i++;

//     }

// }
// console.log('vidinis ', i, 'isorinis  ', pp);

// console.log('------9c uzdavinys------')
// let i = 0;
// let pp = 0;
// let a = 0;
// for (pp; pp < 3; a = rand(5, 10)) {
//     if (a == 5) {
//         pp++;

//     } else {
//         pp = 0;
//     }

//     for (let b = 0; b < a; b++) {
//         i++;

//     }

// }
// console.log('vidinis ', i, 'isorinis  ', pp);

// console.log('------10 uzdavinys------')


let k = 0;
let p = 0;
let pt = 0;
let pk = 0;



for( p; p <= 222; p ){
    p += rand(10,20);
    pt++;    
};
for (k; k <=222;k){
    k += rand(5,25);
    pk++;

};
console.log('Petro taškai: ', p, 'Kazys: ', k);
console.log(pt, pk)
if (pt < pk) {
    console.log('Partija laimejo: Petras');
} else if (pt > pk) {
    console.log('Partija laimejo: Kazys');
} else {
    console.log('lygiosios');
}


// do {
//     p += rand(10, 20);
//     if (p >= 222) pt++;

//     k += rand(5, 25);
//     if (k >= 222) pk++;
//     console.log(pt, pk);
//     console.log('Taskai: ', p, k);

// } while (pt < 1, pk < 1)

// console.log('Petro taškai: ',p, 'Kazys: ', k);

// console.log('Petro taškai: ', p, 'Kazys: ', k);
// console.log(pt, pk)
// if (pt > pk) {
//     console.log('Partija laimejo: Petras');
// } else if (pt < pk) {
//     console.log('Partija laimejo: Kazys');
// } else {
//     console.log('lygiosios');
// }





