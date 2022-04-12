
function rand(min, max) {

    min = Math.ceil(min);



    max = Math.floor(max);



    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// let a1 = ['atsuktuvas', 'pjūklas', 'plaktukas', 'replės'];

// for (let i = 0; i<a1.length;i++){
//     console.log(a1[i]);
// }

// let a2 = [];
// // let i1 = 0;


// for (let i = 0; i < 22; ) {
//     i1 = rand(5, 20);
//     if (i1 % 2) {
//         a2.push(i1);
//         i++
//     };    
// };
// console.log(a2);

let a = [];
let b = [];
let c = [];
let d = [];
let e = [];
let e1 = [];
let f = [];
let milg = rand(10, 30);
let mreiks = 0;
let psuma = 0;
let psuma2 = 0;
let pr = 0;
sk = 0;

for (let i = 0; i < milg; i++) {
    mreiks = rand(0, 10);
    a.push(mreiks);//1 uzduotis
    d.push(mreiks);
    psuma += mreiks;//2 uzduotis
    if (mreiks > 2) {// 3 uzduotis
        psuma2 += mreiks;
    }

    if (mreiks < 2) {// 4 uzduotis
        b.push(0)

    } else {
        b.push(mreiks);
    }
    if (a[i] > pr) { // 5 uzduotis max skaicius
        pr = a[i]
    }
    if (mreiks == 0) { // 6 uzduotis 0 y i
        c.push(i)

    } else {
        c.push(mreiks);
    }

}
for (let i1 = 0; i1 < milg; i1++) { // 5 uzduotis max skaiciu kiekis
    if (a[i1] == pr) {
        sk++;
    }

}

console.log('Nr1. Masyvas: ', a);
console.log('Nr2. Suma reiksmiu: ', psuma);
console.log('Nr3. Daugiau uz 2 suma: ', psuma2);
console.log('Nr4 maziau uz 2 paverciam i 0', b);
console.log('Nr5 Didziausias skaicius', pr, 'tokiu skaiciu yra', sk);
console.log('Nr6 nulis keist i', c);



for (let i2 = 0; i2 < 30 - a.length; i2++) { //7 uzduotis 
    d.push(rand(0, 10));

}
console.log('Nr7 ilgis 30', d);

for (let i3 = 0; i3 < a.length; i3++) { // 8 uzduotis
    if (a[i3] <= 2) {
        e.push(a[i3])

    } else {
        e1.push(a[i3])
    }
}
console.log('Nr8. E monetu masyvas:', e);
console.log('Nr8. E1 popierinis masyvas', e1);


f.push(e, e1); //9 uzduotis
console.log('Nr9 E3 = E + E1 masyvas', f);

let g = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']; //10 Uzduotis
let g1 = [];
g1.push(e, e1, g);

console.log('Nr10 E + E1 + G masyvas', g1.slice());

g.sort(); //11 uzduotis
console.log('Nr 11 sort', g.slice());

let g2 = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']; //12 uzduotis

let visa = 0; // 12 uzduotis
let kiek = 20 - g2.length;
let kortM = 0;
let kortV = 0;
for (let i4 = 0; i4 < kiek; i4++) {
    visa = rand(0, 1);
    if (visa == 0) {
        g.push('MasterCard');
        kortM++//13 uzduotis
    } else {
        g.push('Visa');
        kortV++// 13 uzduotis
    };

}
console.log('Nr 12 E', g1.slice());

if (kortM > kortV) { // 13 uzduotis
    console.log('13 Nr. Mastercard korteliu yra daugiau', kortM);
} else {
    console.log('13 Nr. Visa korteliu yra daugiau', kortM);
}

let h = []; //14 uzduotis
let bil = 0;
for (let i5 = 0; i5 < 10; i5++) {
    bil = rand(1000000000, 9999999999)
    h.push(bil);
}
g1.push(h);

console.log('Nr.14 Su bilietais;', g1.slice());

h.sort(); //15 uzduotis
console.log('15. uzduotis isrusiuoti bilietai', g1.slice());


let pinigai = 0; //16 uzduotis
let suma = 0;
do {
    pinigai = rand(3, 10)
    e1.push(pinigai)
    suma += pinigai;
} while (suma < 500);
console.log('Nr 16 e1', e1.slice());
g1.push(e1);
console.log('Nr 16 nauja pinigine;', g1.slice())

let lBil = 0;//17 uzduotis
for (let i6 = 0; i6 < h.length; i6++) {

    if (h[i6] % 777) {
        lBil++
    }
}
console.log('Nr. 17 Laimingu bilietu:', lBil);  

let o = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] //18 uzduotis
g1.push(o);
o.sort((a,b) => a.length - b.length);
console.log('Nr18 su penktu skyreliu',g1.slice() );








