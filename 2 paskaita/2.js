/*let box1 = 6;
let box2 = 2;
let result;
result = box1 / box2;
result = box1 + --box2;



console.log(result);

let box3 = 'labas';
box3++;
console.log(box3);

let metas = prompt('Koks paros metas?');
console.log(metas);
if (metas == 'vakaras') {
    alert('Teisingai');
} else {
   alert('Neteisngai');
}
*/
function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}
//1 uzduotis
console.log('1 uzduotis');
let kint1 = rand(0, 4);
let kint2 = rand(0, 4);
let rezultatas;
console.log(kint1)
console.log(kint2)

if (kint1 > kint2) {
    rezultatas = kint1 / kint2;
} else {
    rezultatas = kint2 / kint1;
};

console.log(rezultatas);

//2 uzduotis
console.log('2 uzduotis');
let kint21 = rand(0, 25);
let kint22 = rand(0, 25);
let kint23 = rand(0, 25);
console.log(kint21, kint22, kint23);

if (kint21 < kint22 && kint21 > kint23 || kint21 > kint22 && kint21 < kint23) {
    console.log(kint21);
}
else if (kint22 > kint21 && kint22 < kint23 || kint22 < kint21 && kint22 > kint23) {
    console.log(kint22);
}
else {
    console.log(kint23);
}

// 3 uzduotis
console.log('3 uzduotis');

let tr1 = rand(1, 10);
let tr2 = rand(1, 10);
let tr3 = rand(1, 10);

if (tr1 + tr2 > tr3 && tr1 + tr3 > tr2 && tr2 + tr3 > tr1) {

    console.log(tr1, tr2, tr3);
    console.log('Trikampi sudaryti galima');
}
else {

    console.log(tr1, tr2, tr3);
    console.log('Trikampio sudaryti negalima')
}
// 4 uzduotis
console.log('4 uzduotis');
let kint41 = rand(0, 2);
let kint42 = rand(0, 2);
let kint43 = rand(0, 2);
let kint44 = rand(0, 2);
let rez0 = 0;
let rez1 = 0;
let rez2 = 0;

console.log('kint41-', kint41, 'kint42-', kint42, 'kint43-', kint43, 'kint44-', kint44);

if (kint41 == 0) {
    rez0 = 1;
}
else if (kint41 == 1) {
    rez1 = 1;
}
else {
    rez2 = 1;
}
if (kint42 == 0) {
    rez0++;
}
else if (kint42 == 1) {
    rez1++;
}
else {
    rez2++;
}
if (kint43 == 0) {
    rez0++;
}
else if (kint43 == 1) {
    rez1++;
}
else {
    rez2++;
}
if (kint44 == 0) {
    rez0++;
}
else if (kint44 == 1) {
    rez1++;
}
else {
    rez2++;
}
console.log('Nuliai - ', rez0, 'Vienetai - ', rez1, 'Trejetai - ', rez2);

//5 Užduotis
console.log('5 uzduotis');
let kint51 = rand(-10, 10);
let kint52 = rand(-10, 10);
let kint53 = rand(-10, 10);
console.log(kint51, kint52, kint53);
if (kint51 < 0) {
    console.log('+', kint51, '+');
}
else if (kint51 > 0) {
    console.log('-', kint51, '-');
}
else {
    console.log('"', kint51, '"');
}
if (kint52 < 0) {
    console.log('+', kint52, '+');
}
else if (kint52 > 0) {
    console.log('-', kint52, '-');
}
else {
    console.log('"', kint52, '"');
}
if (kint53 < 0) {
    console.log('+', kint53, '+');
}
else if (kint53 > 0) {
    console.log('-', kint53, '-');
}
else {
    console.log('"', kint53, '"');
}
//6 uzduotis
console.log('6 uzduotis');
let kiekis = rand(5, 3000);
console.log('Perkamas žvakių kiekis - ', kiekis);
if (kiekis * 1 >= 2000) {
    console.log('Žvakių kaina: ', 1 - 1 * 0.04, 'Eur');

}
else if (kiekis * 1 >= 1000 && kiekis * 1 < 2000) {
    console.log('Žvakių kaina: ', 1 - 1 * 0.03, 'Eur');
}
else {
    console.log('Žvakių kaina: 1 Eur');
};
//7 uzduotis
console.log('7 uzduotis');

let kint71 = rand(0, 100);
let kint72 = rand(0, 100);
let kint73 = rand(0, 100);
let daliklis1 = 0;
let daliklis2 = 0;
let daliklis3 = 0;
console.log('Kintamieji: ', kint71, kint72, kint73);
console.log('Aritemetinis vidurkis: ', (kint71 + kint72 + kint73) / 3);
if (kint71 >= 10 && kint71 <= 90) {
    daliklis1++;
};
if (kint72 >= 10 && kint72 <= 90) {
    daliklis2++;
}
if (kint73 >= 10 && kint73 <= 90) {
    daliklis3++;
}
if (daliklis1 == 1 && daliklis2 == 1 && daliklis3 == 1) {
    console.log('Kintamieji: ', kint71, kint72, kint73);
    console.log('Aritemetinis vidurkis 2: ', (kint71 + kint72 + kint73) / 3);
}
else if (daliklis1 == 0 && daliklis2 == 1 && daliklis3 == 1) {
    console.log('Kintamieji: ', kint72, kint73);
    console.log('Aritemetinis vidurkis 2: ', (kint72 + kint73) / 2);
}
else if (daliklis1 == 1 && daliklis2 == 0 && daliklis3 == 1) {
    console.log('Kintamieji: ', kint71, kint73);
    console.log('Aritemetinis vidurkis 2: ', (kint71 + kint73) / 2);
}
else if (daliklis1 == 1 && daliklis2 == 1 && daliklis3 == 0) {
    console.log('Kintamieji: ', kint71, kint72);
    console.log('Aritemetinis vidurkis 2: ', (kint71 + kint72) / 2);
}
else if (daliklis1 == 1 && daliklis2 == 0 && daliklis3 == 0) {
    console.log('Kintamieji: ', kint71);
    console.log('Aritemetinis vidurkis 2: ', (kint71));
}
else if (daliklis1 == 0 && daliklis2 == 1 && daliklis3 == 0) {
    console.log('Kintamieji: ', kint72);
    console.log('Aritemetinis vidurkis 2: ', (kint72));
}
else if (daliklis1 == 0 && daliklis2 == 0 && daliklis3 == 1) {
    console.log('Kintamieji: ', kint73);
    console.log('Aritemetinis vidurkis 2: ', (kint73));
}
else if (daliklis1 == 0 && daliklis2 == 0 && daliklis3 == 0) {
    console.log('Kintamuju attitinkanciu sąlygas nera')
}











