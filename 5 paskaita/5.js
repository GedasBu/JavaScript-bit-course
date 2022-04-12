function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

console.log('------1 uzdavinys------')

let a = rand(5, 25);
let b = rand(5, 25);
let c = rand(5, 25);

let d = a + b + c;
console.log('Kintamieji', a, b, c);
console.log('Kintamųjų suma: ', d);

console.log('------1b uzdavinys------')
let e;
e = String(a) + String(b) + String(c);
console.log('1b: ', e);

console.log('------1c uzdavinys------')

let f;
f = a + ' ' + b + ' ' + c + ' ';
console.log('Su tarpais: ', f);

console.log('------1d uzdavinys------')
let g;
g = a + ' ' + b + ' ' + c + ' ' + String(d);
console.log('Ketvirta izduotis', g)

console.log('------2 uzdavinys------')

let aa = rand(5, 10);
console.log('Rezultatas: ', aa);

console.log('------3 uzdavinys------')

let ab = 'Labas';
let i = 0;
// while (i<5){
//     i++;
//     console.log(ab);
// };

for (; i < 5; i++) {
    console.log(ab);
}

console.log('------4 uzdavinys------')


let ii = 0;
for (; ii < 7; ii++) {

    console.log(aa);
};

console.log('------5 uzdavinys------')

ac = rand(1, 20);
console.log('Kintamasis', ac)

while (ac > 0) {
    ac--;

    console.log(aa);
};

console.log('------6 uzdavinys------')

let ad;

if (aa > 7) {

    for (ad = 0; aa > ad; ad++)
        // console.log(ad);
        console.log(aa);
}
console.log('------7a uzdavinys------')

let af;
for (let cc = 0; cc < 5; cc++) {

    console.log(af = rand(10, 20));
}

console.log('------7b uzdavinys------')

let aff = 0;
for (let cc = 0; cc < 5; cc++) {

    af = rand(10, 20);
    aff += af;
}
console.log('Suma', aff);

console.log('------7c uzdavinys------')

let affs = '';
for (let cc = 0; cc < 5; cc++) {
    console.log(af = rand(10, 20));
    affs += ' ' + String(af);

}
console.log(affs)

console.log('------7d uzdavinys------')
dd = 0;
affs = '';
for (let cc = 0; cc < 5; cc++) {
    console.log(af = rand(10, 20));
    affs += ' ' + String(af);
    dd += af;

}
console.log('Suma: ', dd);
console.log(affs + '', +dd)

console.log('------8a uzdavinys------');

let kint;

do {
    kint = rand(10, 25);

} while (kint > 12);
console.log('Kint: ', kint);

console.log('------8b uzdavinys------');
let kk = 0;
do {
    kint = rand(10, 25);
    kk++;

} while (kint > 12);
console.log('Kartai: ', kk);

console.log('------8c uzdavinys------');
let sum = 0;
let sum1 = 0;
do {
    kint = rand(10, 25);
    if (kint > 18) {
        sum += kint;
        console.log('kint: ', kint)
    } else {
        sum1++;

    }
} while (kint > 12);
console.log('Suma: ', sum)

console.log('------8d uzdavinys------');
console.log('Netikusiu reiksmiu suma: ', sum1);

console.log('------8e uzdavinys------');
let lyg = 0;
let nelyg = 0;
do {
    kint = rand(10, 25);
    if (kint % 2 == 0) {
        lyg++;
    }
    else {
        nelyg++;
    }

} while (kint >= 12);
console.log('Lyginiai: ', lyg, 'Nelyg: ', nelyg);


console.log('------8f uzdavinys------');
let kk2 = 0;
let kk3 = 0;
do {
    do {
        kint = rand(10, 25);
        kk3++;
    } while (kint > 12);

    kk2++;
  
} while (kk3 < 20)
console.log('Kartai kk2: ', kk2);




