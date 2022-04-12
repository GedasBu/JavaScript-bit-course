function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}



// let a = rand(2, 10);

// let b = rand(2, 10);

// let c = rand(2, 10);



// // Surasti ir i console.log išvesti dviejų mažesnių kintamųjų sumą
// console.log(a,b,c);

// if (a<c && b<c){
//     console.log(a+b);
// } 
// else if (a<b && c<b){
//     console.log(a+c);
// }
// else  {
//     console.log(b+c);
// }

let egzaminoRezultas = rand(1, 10);
console.log(egzaminoRezultas);

if (egzaminoRezultas >= 4) {
    console.log('Egzaminas islaikytas');
} else {
    console.log('Egzaminas neislaikytas');
}


let ekspermentoRezultas = rand(1, 4);
console.log(ekspermentoRezultas);
if (ekspermentoRezultas == 1 || ekspermentoRezultas == 4) {
    console.log('Ekspermanetas pavyko');
}
else {
    console.log('Ekspermanetas nepavyko');
}


let automobilioGreitis = rand(10, 125);
console.log(automobilioGreitis);
if (automobilioGreitis > 60) {
    console.log('Bauda');
}

let eilesNumeris = rand(1, 30);
//Išvesti eilės numerį ir sprendimą ar tai porinė eilė ar neporinė
console.log(eilesNumeris)
if (eilesNumeris % 2 == 0) {
    console.log('Eiles numeris porinis');
} else {
    console.log('Eiles numeris neporinis');
}

//5.


//Pasinaudojus funkcija rand() sugeneruoti atsitiktinę raidę A, B ar C ir priskirti ją kintamajam raideABC. Kintamąjį išvesti į konsolę

let raideABC = rand(1, 3);
if (raideABC == 1) {
    console.log('A');
} else if (raideABC == 2) {
    console.log('B');
}
else {
    console.log('C');
}


//6.

let pirmas = rand(0, 2);

let antras = rand(0, 2);

// Išvesti abu skaičius ir sprendimą ar yra didesnė tų skaičių sandauga ar suma 
console.log(pirmas, antras);
if (pirmas * antras > pirmas + antras) {
    console.log(pirmas * antras)
    console.log('Skaiciu sandauga didesne');
} else {
    console.log(pirmas + antras)
    console.log('Skaiciu suma didesne')
}

let asilai = rand(0, 2);

let karves = rand(0, 2);

// Išvesti asilų ir karvių skaičių ir išvesti rezultatą "gyvulių yra" kai yra nors viena karvė ar asilas arba "gyvulių nėra" jeigu nėra nei karvių nei asilų
console.log('Asilai: ', asilai);
console.log('Karves: ', karves);
if (asilai > 0 || karves > 0) {
    console.log('Gyvuliu yra')
}
else {
    console.log('gyvuliu nera')
}

//8.

let dalyvis1 = rand(1, 4);

let dalyvis2 = rand(1, 4);

// Išvesti dalyvių pasirinktus skaičius ir pranešimą "Laimėjo", jeigu dalyvių skaičių suma didesnė nei 6 arba tie skaičiai yra vienodi. Pranešimą "Pralaimėjo" - priešingu atveju
console.log('Dalyvis1  ', dalyvis1);
console.log('Dalyvis2  ', dalyvis2);

if (dalyvis1 + dalyvis2 > 6 || dalyvis2 == dalyvis1) {
    console.log('Laimejo');
}
else {
    console.log('Pralaimejo');
};

let daug = rand(1000000, 9999999);
let kiek = 0;

// Išvesti skaičių daug ir suskaičiuoti iš kelių duotų skaičių: 5, 10, 33 jis dalijasi be liekanos. Rezultatą išvesti.
console.log('Skaičius ', daug)
if(daug/5 %2 == 0) {
    console.log(daug/5)
    kiek ++;
}
if(daug/10 %2 == 0) {
    console.log(daug/10)
    kiek ++;
}
if(daug/33 %2 == 0) {
    console.log(daug/33)
    kiek ++;
}
console.log('Dalijasi is',kiek,'skaiciu')

//10.

let as = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';

let tu = rand(0, 2) ? (rand(0, 1) ? 'popierius' : 'zirklės') : 'akmuo';

// Išvesti as ir tu kintamuosius ir kas laimėjo as ar tu
console.log('As: ',as);
console.log('Tu: ',tu);

if (as == 'akmuo' && tu == 'zirklės') {
    console.log('Laimejo as')
} 
if (tu == 'akmuo' && as == 'zirklės'){
    console.log('Laimejo Tu')
} ;
if (as == 'zirklės' && tu == 'popierius' ) {
    console.log('Laimejo as')
} ;
if (tu == 'zirklės' && as == 'popierius' ) {
    console.log('Laimejo tu')
} ;
if (as == 'popierius' && tu == 'akmuo' ) {    
    console.log('Laimejo as')
} ;
if (tu == 'popierius' && as == 'akmuo' ) {   
    console.log('Laimejo tu')
} ;
